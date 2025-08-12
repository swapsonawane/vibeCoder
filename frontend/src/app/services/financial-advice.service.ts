// frontend/src/app/services/financial-advice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FinancialAdviceRequest {
  salary: number;
  expenses: {
    housing: number;
    groceries: number;
    transportation: number;
    utilities: number;
    entertainment: number;
    savings: number;
    other: number;
  };
  futureGoal?: string;
}

export interface FinancialAdviceResponse {
  advice: string[];
  insights: { title: string; detail: string }[];
}

@Injectable({ providedIn: 'root' })
export class FinancialAdviceService {
  private apiUrl = 'http://localhost:8080/api/financial-advice';

  constructor(private http: HttpClient) {}

  getAdvice(data: FinancialAdviceRequest): Observable<FinancialAdviceResponse> {
    return this.http.post<FinancialAdviceResponse>(this.apiUrl, data);
  }
}
