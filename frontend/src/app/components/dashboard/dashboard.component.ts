import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  user: any = null;
  accounts: any[] = [];
  recentTransfers: any[] = [];
  upcomingBills: any[] = [];
  notifications: any[] = [];
  loading = true;
  private userSubscription: Subscription = new Subscription();

  // Dashboard stats
  totalBalance = 0;
  monthlySpending = 0;
  pendingTransfers = 0;
  unreadNotifications = 0;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.loading = true;
    
    // Subscribe to user changes to get real-time updates
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });

    // Mock data for demo
    this.accounts = [
      {
        id: '1',
        accountNumber: 'ACC1001234567',
        accountType: 'SAVINGS',
        balance: 15750.50,
        availableBalance: 15750.50,
        currency: 'USD'
      },
      {
        id: '2',
        accountNumber: 'ACC1001234568',
        accountType: 'CHECKING',
        balance: 8240.25,
        availableBalance: 8240.25,
        currency: 'USD'
      }
    ];

    this.recentTransfers = [
      {
        id: '1',
        description: 'Internal Transfer',
        recipientName: 'Savings Account',
        amount: 500.00,
        status: 'COMPLETED',
        createdAt: new Date()
      }
    ];

    this.upcomingBills = [
      {
        id: '1',
        description: 'Electric Bill',
        amount: 85.50,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        isRecurring: true
      }
    ];

    this.notifications = [
      {
        id: '1',
        title: 'Welcome!',
        message: 'Welcome to NetBanking demo application',
        priority: 'LOW',
        createdAt: new Date()
      }
    ];

    this.calculateTotalBalance();
    this.pendingTransfers = 0;
    this.unreadNotifications = 1;
    this.monthlySpending = 1250.75;
    
    this.loading = false;
  }

  private calculateTotalBalance(): void {
    this.totalBalance = this.accounts.reduce((total, account) => total + account.balance, 0);
  }

  getAccountTypeIcon(type: string): string {
    switch (type) {
      case 'SAVINGS': return 'fas fa-piggy-bank';
      case 'CHECKING': return 'fas fa-credit-card';
      case 'BUSINESS': return 'fas fa-building';
      case 'JOINT': return 'fas fa-users';
      default: return 'fas fa-wallet';
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  refreshDashboard(): void {
    this.loading = true;
    // Add a small delay to show loading state
    setTimeout(() => {
      this.loadDashboardData();
    }, 500);
  }

  navigateToAccount(account: any): void {
    // Navigate to accounts page with selected account
    this.router.navigate(['/accounts'], { queryParams: { accountId: account.id } });
  }

  navigateToBills(): void {
    this.router.navigate(['/bills']);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
} 