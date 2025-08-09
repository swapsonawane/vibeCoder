import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginRequest, LoginResponse, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'netbanking_token';
  private readonly USER_KEY = 'netbanking_user';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize authentication state synchronously
    this.initializeAuthState();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    // For demo purposes, simulate login without real API call
    return new Observable<LoginResponse>(observer => {
      setTimeout(() => {
        if (credentials.username === 'demo' && credentials.password === 'password') {
          const mockUser: User = {
            id: '1',
            username: 'demo',
            email: 'demo@netbanking.com',
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '+1234567890',
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            dateOfBirth: '1990-01-15',
            occupation: 'Software Developer',
            isActive: true,
            createdAt: new Date(),
            lastLoginAt: new Date()
          };

          const mockResponse: LoginResponse = {
            token: 'demo-jwt-token-' + Date.now(),
            user: mockUser,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
          };

          this.setToken(mockResponse.token);
          this.setCurrentUser(mockResponse.user);
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(mockResponse.user);

          observer.next(mockResponse);
          observer.complete();
        } else {
          observer.error({ message: 'Invalid credentials' });
        }
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  updateUserProfile(profileData: Partial<User>): Observable<User> {
    return new Observable(observer => {
      // Simulate API call delay
      setTimeout(() => {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
          // Update the user data with new profile information
          const updatedUser = { ...currentUser, ...profileData };
          
          // Update localStorage and BehaviorSubject
          this.setCurrentUser(updatedUser);
          this.currentUserSubject.next(updatedUser);
          
          observer.next(updatedUser);
          observer.complete();
        } else {
          observer.error('No user logged in');
        }
      }, 1000);
    });
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private getCurrentUserFromStorage(): User | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  private initializeAuthState(): void {
    const token = this.getToken();
    const user = this.getCurrentUserFromStorage();
    
    if (token && user) {
      // Set authentication state immediately
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(user);
    } else {
      // Clear any partial state
      this.isAuthenticatedSubject.next(false);
      this.currentUserSubject.next(null);
    }
  }
} 