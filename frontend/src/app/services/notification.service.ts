import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  isRead: boolean;
  createdAt: Date;
  readAt?: Date;
  userId: string;
  actionUrl?: string;
}

export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  TRANSACTION = 'TRANSACTION',
  SECURITY = 'SECURITY',
  SYSTEM = 'SYSTEM'
}

export enum NotificationPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  private unreadCount$ = new BehaviorSubject<number>(0);
  private realTimeNotifications$ = new Subject<Notification>();
  
  public notifications = this.notifications$.asObservable();
  public unreadCount = this.unreadCount$.asObservable();
  public realTimeNotifications = this.realTimeNotifications$.asObservable();

  private websocket?: WebSocket;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    // Initialize notifications when service is created
    this.loadNotifications();
    this.loadUnreadCount();
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // WebSocket Connection
  connect(): void {
    if (this.websocket) {
      return; // Already connected
    }

    try {
      this.websocket = new WebSocket(environment.wsUrl);
      
      this.websocket.onopen = () => {
        console.log('WebSocket connected for notifications');
      };

      this.websocket.onmessage = (event) => {
        try {
          const notification: Notification = JSON.parse(event.data);
          this.handleRealTimeNotification(notification);
        } catch (error) {
          console.error('Error parsing notification:', error);
        }
      };

      this.websocket.onclose = () => {
        console.log('WebSocket disconnected');
        this.websocket = undefined;
        // Attempt to reconnect after 5 seconds
        setTimeout(() => this.connect(), 5000);
      };

      this.websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
    }
  }

  disconnect(): void {
    if (this.websocket) {
      this.websocket.close();
      this.websocket = undefined;
    }
  }

  // HTTP API Methods
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${environment.apiUrl}/notifications`, {
      headers: this.getAuthHeaders()
    });
  }

  getUnreadNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${environment.apiUrl}/notifications/unread`, {
      headers: this.getAuthHeaders()
    });
  }

  markAsRead(notificationId: string): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/notifications/${notificationId}/read`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  markAllAsRead(): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/notifications/read-all`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  deleteNotification(notificationId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/notifications/${notificationId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getUnreadCount(): Observable<{ count: number }> {
    return this.http.get<{ count: number }>(`${environment.apiUrl}/notifications/unread/count`, {
      headers: this.getAuthHeaders()
    });
  }

  // Local Methods
  private loadNotifications(): void {
    this.getNotifications().subscribe({
      next: (notifications: any) => {
        this.notifications$.next(notifications);
      },
      error: (error: any) => {
        console.error('Error loading notifications:', error);
      }
    });
  }

  private loadUnreadCount(): void {
    this.getUnreadCount().subscribe({
      next: (response: any) => {
        this.unreadCount$.next(response.count);
      },
      error: (error: any) => {
        console.error('Error loading unread count:', error);
      }
    });
  }

  private handleRealTimeNotification(notification: Notification): void {
    // Add to notifications list
    const currentNotifications = this.notifications$.value;
    this.notifications$.next([notification, ...currentNotifications]);
    
    // Update unread count
    this.unreadCount$.next(this.unreadCount$.value + 1);
    
    // Emit real-time notification
    this.realTimeNotifications$.next(notification);
    
    // Show browser notification if permission granted
    this.showBrowserNotification(notification);
  }

  private showBrowserNotification(notification: Notification): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      const browserNotification = new Notification(notification.title, {
        body: notification.message,
        tag: notification.id
      });

      // Auto close after 5 seconds
      setTimeout(() => {
        browserNotification.close();
      }, 5000);

      // Handle click
      browserNotification.onclick = () => {
        window.focus();
        if (notification.actionUrl) {
          // Navigate to action URL if provided
          window.location.href = notification.actionUrl;
        }
        browserNotification.close();
      };
    }
  }

  // Request browser notification permission
  requestNotificationPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      return Notification.requestPermission();
    }
    return Promise.resolve('denied');
  }

  // Toast notification methods for user feedback
  showSuccess(message: string, title: string = 'Success'): void {
    const notification: Notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.SUCCESS,
      priority: NotificationPriority.MEDIUM,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    
    this.handleRealTimeNotification(notification);
  }

  showError(message: string, title: string = 'Error'): void {
    const notification: Notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.ERROR,
      priority: NotificationPriority.HIGH,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    
    this.handleRealTimeNotification(notification);
  }

  showInfo(message: string, title: string = 'Info'): void {
    const notification: Notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.INFO,
      priority: NotificationPriority.LOW,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    
    this.handleRealTimeNotification(notification);
  }

  showWarning(message: string, title: string = 'Warning'): void {
    const notification: Notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.WARNING,
      priority: NotificationPriority.MEDIUM,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    
    this.handleRealTimeNotification(notification);
  }

  private generateId(): string {
    return 'notif_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }
} 