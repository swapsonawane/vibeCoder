import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Transfer, TransferRequest, TransferStatus, Beneficiary } from '../models/transfer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

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

  // Transfer Operations
  createTransfer(request: TransferRequest): Observable<Transfer> {
    return this.http.post<Transfer>(`${environment.apiUrl}/transfers`, request, {
      headers: this.getAuthHeaders()
    });
  }

  getTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/transfers`, {
      headers: this.getAuthHeaders()
    });
  }

  getTransfer(transferId: string): Observable<Transfer> {
    return this.http.get<Transfer>(`${environment.apiUrl}/transfers/${transferId}`, {
      headers: this.getAuthHeaders()
    });
  }

  getTransfersByStatus(status: TransferStatus): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/transfers`, {
      headers: this.getAuthHeaders(),
      params: { status: status.toString() }
    });
  }

  cancelTransfer(transferId: string): Observable<Transfer> {
    return this.http.put<Transfer>(`${environment.apiUrl}/transfers/${transferId}/cancel`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  scheduleTransfer(request: TransferRequest): Observable<Transfer> {
    return this.http.post<Transfer>(`${environment.apiUrl}/transfers/schedule`, request, {
      headers: this.getAuthHeaders()
    });
  }

  getScheduledTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/transfers/scheduled`, {
      headers: this.getAuthHeaders()
    });
  }

  // Beneficiary Management
  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`${environment.apiUrl}/beneficiaries`, {
      headers: this.getAuthHeaders()
    });
  }

  addBeneficiary(beneficiary: Omit<Beneficiary, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(`${environment.apiUrl}/beneficiaries`, beneficiary, {
      headers: this.getAuthHeaders()
    });
  }

  updateBeneficiary(beneficiaryId: string, beneficiary: Partial<Beneficiary>): Observable<Beneficiary> {
    return this.http.put<Beneficiary>(`${environment.apiUrl}/beneficiaries/${beneficiaryId}`, beneficiary, {
      headers: this.getAuthHeaders()
    });
  }

  deleteBeneficiary(beneficiaryId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/beneficiaries/${beneficiaryId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // Transfer Limits and Validation
  getTransferLimits(): Observable<{
    dailyLimit: number;
    monthlyLimit: number;
    dailyUsed: number;
    monthlyUsed: number;
    remainingDaily: number;
    remainingMonthly: number;
  }> {
    return this.http.get<{
      dailyLimit: number;
      monthlyLimit: number;
      dailyUsed: number;
      monthlyUsed: number;
      remainingDaily: number;
      remainingMonthly: number;
    }>(`${environment.apiUrl}/transfers/limits`, {
      headers: this.getAuthHeaders()
    });
  }

  validateTransfer(request: TransferRequest): Observable<{
    isValid: boolean;
    errors: string[];
    warnings: string[];
  }> {
    return this.http.post<{
      isValid: boolean;
      errors: string[];
      warnings: string[];
    }>(`${environment.apiUrl}/transfers/validate`, request, {
      headers: this.getAuthHeaders()
    });
  }

  // Transfer History
  getTransferHistory(fromDate?: Date, toDate?: Date): Observable<Transfer[]> {
    let params: any = {};
    if (fromDate) params.fromDate = fromDate.toISOString();
    if (toDate) params.toDate = toDate.toISOString();

    return this.http.get<Transfer[]>(`${environment.apiUrl}/transfers/history`, {
      headers: this.getAuthHeaders(),
      params
    });
  }
} 