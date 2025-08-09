import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Account, Transaction, AccountStatement } from '../models/account.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.apiUrl}/accounts`, {
      headers: this.getAuthHeaders()
    });
  }

  getAccount(accountId: string): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/${accountId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getAccountBalance(accountId: string): Observable<{ balance: number; availableBalance: number }> {
    return this.http.get<{ balance: number; availableBalance: number }>(
      `${environment.apiUrl}/accounts/${accountId}/balance`,
      { headers: this.getAuthHeaders() }
    );
  }

  getTransactions(accountId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/accounts/${accountId}/transactions`, {
      headers: this.getAuthHeaders()
    });
  }

  getTransactionsByDateRange(accountId: string, fromDate: Date, toDate: Date): Observable<Transaction[]> {
    const params = {
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString()
    };
    return this.http.get<Transaction[]>(`${environment.apiUrl}/accounts/${accountId}/transactions`, {
      headers: this.getAuthHeaders(),
      params
    });
  }

  getAccountStatement(accountId: string, fromDate: Date, toDate: Date): Observable<AccountStatement> {
    const params = {
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString()
    };
    return this.http.get<AccountStatement>(`${environment.apiUrl}/accounts/${accountId}/statement`, {
      headers: this.getAuthHeaders(),
      params
    });
  }

  searchTransactions(accountId: string, query: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/accounts/${accountId}/transactions/search`, {
      headers: this.getAuthHeaders(),
      params: { q: query }
    });
  }

  getTransaction(accountId: string, transactionId: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${environment.apiUrl}/accounts/${accountId}/transactions/${transactionId}`, {
      headers: this.getAuthHeaders()
    });
  }
} 