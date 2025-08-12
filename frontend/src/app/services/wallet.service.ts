import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  DigitalWallet,
  WalletTransaction,
  QRPayment,
  CryptoHolding,
  CryptoTransaction,
  ContactlessPayment,
  WalletSettings,
  WalletSummary,
  PaymentRequest,
  TopUpRequest,
  WithdrawRequest
} from '../models/wallet.model';
import { NotificationService } from './notification.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:8080/api';
  private currentWalletSubject = new BehaviorSubject<DigitalWallet | null>(null);
  public currentWallet$ = this.currentWalletSubject.asObservable();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private authService: AuthService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    this.notificationService.showError(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // ===== WALLET MANAGEMENT =====

  getWallet(): Observable<DigitalWallet> {
    return this.http.get<DigitalWallet>(`${this.apiUrl}/wallet`, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(wallet => this.currentWalletSubject.next(wallet)),
      catchError(this.handleError.bind(this))
    );
  }

  createWallet(): Observable<DigitalWallet> {
    return this.http.post<DigitalWallet>(`${this.apiUrl}/wallet`, {}, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(wallet => {
        this.currentWalletSubject.next(wallet);
        this.notificationService.showSuccess('Digital wallet created successfully!');
      }),
      catchError(this.handleError.bind(this))
    );
  }

  getWalletSummary(): Observable<WalletSummary> {
    return this.http.get<WalletSummary>(`${this.apiUrl}/wallet/summary`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== TRANSACTIONS =====

  getTransactions(page: number = 0, size: number = 10, type?: string): Observable<{transactions: WalletTransaction[], totalElements: number}> {
    let params = `page=${page}&size=${size}`;
    if (type) {
      params += `&type=${type}`;
    }

    return this.http.get<{transactions: WalletTransaction[], totalElements: number}>(
      `${this.apiUrl}/wallet/transactions?${params}`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getTransactionById(transactionId: string): Observable<WalletTransaction> {
    return this.http.get<WalletTransaction>(`${this.apiUrl}/wallet/transactions/${transactionId}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== WALLET PAYMENTS =====

  sendPayment(paymentRequest: PaymentRequest): Observable<WalletTransaction> {
    return this.http.post<WalletTransaction>(`${this.apiUrl}/wallet/send`, paymentRequest, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess('Payment sent successfully!');
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  requestPayment(recipientWallet: string, amount: number, description?: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/wallet/request`, {
      recipientWallet,
      amount,
      description
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => this.notificationService.showSuccess('Payment request sent successfully!')),
      catchError(this.handleError.bind(this))
    );
  }

  // ===== TOP UP & WITHDRAW =====

  topUpWallet(topUpRequest: TopUpRequest): Observable<WalletTransaction> {
    return this.http.post<WalletTransaction>(`${this.apiUrl}/wallet/topup`, topUpRequest, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess('Wallet topped up successfully!');
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  withdrawFromWallet(withdrawRequest: WithdrawRequest): Observable<WalletTransaction> {
    return this.http.post<WalletTransaction>(`${this.apiUrl}/wallet/withdraw`, withdrawRequest, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess('Withdrawal completed successfully!');
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  // ===== QR PAYMENTS =====

  generateQRCode(amount?: number, description?: string): Observable<QRPayment> {
    return this.http.post<QRPayment>(`${this.apiUrl}/wallet/qr/generate`, {
      amount,
      description
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => this.notificationService.showSuccess('QR code generated successfully!')),
      catchError(this.handleError.bind(this))
    );
  }

  scanQRCode(qrCode: string): Observable<QRPayment> {
    return this.http.get<QRPayment>(`${this.apiUrl}/wallet/qr/scan/${qrCode}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  payWithQR(qrCode: string, amount?: number, pin?: string): Observable<WalletTransaction> {
    return this.http.post<WalletTransaction>(`${this.apiUrl}/wallet/qr/pay`, {
      qrCode,
      amount,
      pin
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess('QR payment completed successfully!');
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  getMyQRCodes(): Observable<QRPayment[]> {
    return this.http.get<QRPayment[]>(`${this.apiUrl}/wallet/qr/my-codes`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== CRYPTO PORTFOLIO =====

  getCryptoHoldings(): Observable<CryptoHolding[]> {
    return this.http.get<CryptoHolding[]>(`${this.apiUrl}/wallet/crypto/holdings`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getCryptoTransactions(): Observable<CryptoTransaction[]> {
    return this.http.get<CryptoTransaction[]>(`${this.apiUrl}/wallet/crypto/transactions`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  buyCrypto(symbol: string, amount: number, pin?: string): Observable<CryptoTransaction> {
    return this.http.post<CryptoTransaction>(`${this.apiUrl}/wallet/crypto/buy`, {
      symbol,
      amount,
      pin
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess(`Successfully purchased ${symbol}!`);
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  sellCrypto(symbol: string, quantity: number, pin?: string): Observable<CryptoTransaction> {
    return this.http.post<CryptoTransaction>(`${this.apiUrl}/wallet/crypto/sell`, {
      symbol,
      quantity,
      pin
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess(`Successfully sold ${symbol}!`);
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  getCryptoPrice(symbol: string): Observable<{price: number, change24h: number}> {
    return this.http.get<{price: number, change24h: number}>(`${this.apiUrl}/wallet/crypto/price/${symbol}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getAvailableCryptos(): Observable<{symbol: string, name: string, price: number, change24h: number}[]> {
    return this.http.get<{symbol: string, name: string, price: number, change24h: number}[]>(
      `${this.apiUrl}/wallet/crypto/available`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== CONTACTLESS PAYMENTS =====

  processContactlessPayment(merchantId: string, amount: number, paymentMethod: 'NFC' | 'TAP_TO_PAY' | 'CONTACTLESS_CARD'): Observable<ContactlessPayment> {
    return this.http.post<ContactlessPayment>(`${this.apiUrl}/wallet/contactless/pay`, {
      merchantId,
      amount,
      paymentMethod
    }, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        this.notificationService.showSuccess('Contactless payment completed successfully!');
        this.refreshWallet();
      }),
      catchError(this.handleError.bind(this))
    );
  }

  getContactlessTransactions(): Observable<ContactlessPayment[]> {
    return this.http.get<ContactlessPayment[]>(`${this.apiUrl}/wallet/contactless/transactions`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== SETTINGS =====

  getWalletSettings(): Observable<WalletSettings> {
    return this.http.get<WalletSettings>(`${this.apiUrl}/wallet/settings`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  updateWalletSettings(settings: Partial<WalletSettings>): Observable<WalletSettings> {
    return this.http.put<WalletSettings>(`${this.apiUrl}/wallet/settings`, settings, {
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => this.notificationService.showSuccess('Wallet settings updated successfully!')),
      catchError(this.handleError.bind(this))
    );
  }

  // ===== UTILITY METHODS =====

  refreshWallet(): void {
    this.getWallet().subscribe();
  }

  validateWalletNumber(walletNumber: string): Observable<{valid: boolean, ownerName?: string}> {
    return this.http.get<{valid: boolean, ownerName?: string}>(
      `${this.apiUrl}/wallet/validate/${walletNumber}`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  searchWalletByPhone(phoneNumber: string): Observable<{walletNumber: string, ownerName: string}[]> {
    return this.http.get<{walletNumber: string, ownerName: string}[]>(
      `${this.apiUrl}/wallet/search/phone/${phoneNumber}`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getTransactionLimits(): Observable<{daily: number, monthly: number, perTransaction: number, used: {daily: number, monthly: number}}> {
    return this.http.get<{daily: number, monthly: number, perTransaction: number, used: {daily: number, monthly: number}}>(
      `${this.apiUrl}/wallet/limits`,
      { headers: this.getAuthHeaders() }
    ).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  // ===== ANALYTICS =====

  getSpendingAnalytics(period: 'week' | 'month' | 'year' = 'month'): Observable<{
    totalSpent: number;
    categoryBreakdown: {category: string, amount: number, percentage: number}[];
    dailySpending: {date: string, amount: number}[];
    topMerchants: {name: string, amount: number, transactions: number}[];
  }> {
    return this.http.get<any>(`${this.apiUrl}/wallet/analytics/spending?period=${period}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getCryptoPortfolioAnalytics(): Observable<{
    totalValue: number;
    totalInvested: number;
    totalProfitLoss: number;
    profitLossPercentage: number;
    topPerformers: CryptoHolding[];
    portfolioDistribution: {symbol: string, percentage: number, value: number}[];
  }> {
    return this.http.get<any>(`${this.apiUrl}/wallet/analytics/crypto`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}