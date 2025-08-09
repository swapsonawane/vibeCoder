import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BillPayment, BillPaymentRequest, BillPaymentStatus, Payee, PayeeCategory } from '../models/transfer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BillPaymentService {

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

  // Bill Payment Operations
  createBillPayment(request: BillPaymentRequest): Observable<BillPayment> {
    return this.http.post<BillPayment>(`${environment.apiUrl}/bills`, request, {
      headers: this.getAuthHeaders()
    });
  }

  getBillPayments(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills`, {
      headers: this.getAuthHeaders()
    });
  }

  getBillPayment(paymentId: string): Observable<BillPayment> {
    return this.http.get<BillPayment>(`${environment.apiUrl}/bills/${paymentId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getBillPaymentsByStatus(status: BillPaymentStatus): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills`, {
      headers: this.getAuthHeaders(),
      params: { status: status.toString() }
    });
  }

  cancelBillPayment(paymentId: string): Observable<BillPayment> {
    return this.http.put<BillPayment>(`${environment.apiUrl}/bills/${paymentId}/cancel`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  // Scheduled and Recurring Payments
  getScheduledPayments(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills/scheduled`, {
      headers: this.getAuthHeaders()
    });
  }

  getRecurringPayments(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills/recurring`, {
      headers: this.getAuthHeaders()
    });
  }

  updateRecurringPayment(paymentId: string, payment: Partial<BillPayment>): Observable<BillPayment> {
    return this.http.put<BillPayment>(`${environment.apiUrl}/bills/recurring/${paymentId}`, payment, {
      headers: this.getAuthHeaders()
    });
  }

  cancelRecurringPayment(paymentId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/bills/recurring/${paymentId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Payee Management
  getPayees(): Observable<Payee[]> {
    return this.http.get<Payee[]>(`${environment.apiUrl}/bills/payees`, {
      headers: this.getAuthHeaders()
    });
  }

  getPayeesByCategory(category: PayeeCategory): Observable<Payee[]> {
    return this.http.get<Payee[]>(`${environment.apiUrl}/bills/payees`, {
      headers: this.getAuthHeaders(),
      params: { category: category.toString() }
    });
  }

  addPayee(payee: Omit<Payee, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Observable<Payee> {
    return this.http.post<Payee>(`${environment.apiUrl}/bills/payees`, payee, {
      headers: this.getAuthHeaders()
    });
  }

  updatePayee(payeeId: string, payee: Partial<Payee>): Observable<Payee> {
    return this.http.put<Payee>(`${environment.apiUrl}/bills/payees/${payeeId}`, payee, {
      headers: this.getAuthHeaders()
    });
  }

  deletePayee(payeeId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/bills/payees/${payeeId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Bill Management
  getPaymentHistory(fromDate?: Date, toDate?: Date): Observable<BillPayment[]> {
    let params: any = {};
    if (fromDate) params.fromDate = fromDate.toISOString();
    if (toDate) params.toDate = toDate.toISOString();

    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills/history`, {
      headers: this.getAuthHeaders(),
      params
    });
  }

  getUpcomingBills(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills/upcoming`, {
      headers: this.getAuthHeaders()
    });
  }

  getOverdueBills(): Observable<BillPayment[]> {
    return this.http.get<BillPayment[]>(`${environment.apiUrl}/bills/overdue`, {
      headers: this.getAuthHeaders()
    });
  }

  // Validation
  validateBillPayment(request: BillPaymentRequest): Observable<{
    isValid: boolean;
    errors: string[];
    warnings: string[];
  }> {
    return this.http.post<{
      isValid: boolean;
      errors: string[];
      warnings: string[];
    }>(`${environment.apiUrl}/bills/validate`, request, {
      headers: this.getAuthHeaders()
    });
  }
} 