import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import {
  CashFlowForecast,
  ForecastPeriod,
  SpendingPattern,
  BillReminder,
  ReminderStatus,
  ReminderPriority,
  FinancialInsight,
  InsightType,
  InsightSeverity,
  SpendingCategory,
  TrendDirection
} from '../models/financial-analysis.model';
import { Transaction, TransactionType } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class FinancialAnalysisService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Cash Flow Forecasting
  getCashFlowForecast(period: ForecastPeriod = ForecastPeriod.MONTHLY): Observable<CashFlowForecast> {
    return this.http.get<CashFlowForecast>(`${this.apiUrl}/financial-analysis/cash-flow-forecast?period=${period}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching cash flow forecast:', error);
          return of(this.generateMockCashFlowForecast(period));
        })
      );
  }

  getForecastPeriods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/financial-analysis/cash-flow-forecast/periods`)
      .pipe(
        catchError(error => {
          console.error('Error fetching forecast periods:', error);
          return of([
            { value: '1_MONTH', label: '1 Month', description: 'Short-term forecast' },
            { value: '3_MONTHS', label: '3 Months', description: 'Quarterly forecast' },
            { value: '6_MONTHS', label: '6 Months', description: 'Semi-annual forecast' },
            { value: '12_MONTHS', label: '12 Months', description: 'Annual forecast' }
          ]);
        })
      );
  }

  // Spending Pattern Analysis
  getSpendingPatterns(months: number = 6): Observable<SpendingPattern[]> {
    return this.http.get<SpendingPattern[]>(`${this.apiUrl}/financial-analysis/spending-patterns?months=${months}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching spending patterns:', error);
          return of(this.generateMockSpendingPatterns());
        })
      );
  }

  getSpendingCategories(): Observable<SpendingCategory[]> {
    return this.http.get<SpendingCategory[]>(`${this.apiUrl}/financial-analysis/spending-patterns/categories`)
      .pipe(
        catchError(error => {
          console.error('Error fetching spending categories:', error);
          return of(this.generateMockSpendingCategories());
        })
      );
  }

  // Bill Reminders
  getBillReminders(): Observable<BillReminder[]> {
    return this.http.get<BillReminder[]>(`${this.apiUrl}/financial-analysis/bill-reminders`)
      .pipe(
        catchError(error => {
          console.error('Error fetching bill reminders:', error);
          return of(this.generateMockBillReminders());
        })
      );
  }

  createBillReminder(reminder: Partial<BillReminder>): Observable<BillReminder> {
    return this.http.post<BillReminder>(`${this.apiUrl}/financial-analysis/bill-reminders`, reminder)
      .pipe(
        catchError(error => {
          console.error('Error creating bill reminder:', error);
          return of(this.generateMockBillReminder(reminder));
        })
      );
  }

  updateBillReminder(id: string, reminder: Partial<BillReminder>): Observable<BillReminder> {
    return this.http.put<BillReminder>(`${this.apiUrl}/financial-analysis/bill-reminders/${id}`, reminder)
      .pipe(
        catchError(error => {
          console.error('Error updating bill reminder:', error);
          return of(this.generateMockBillReminder(reminder, id));
        })
      );
  }

  deleteBillReminder(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/financial-analysis/bill-reminders/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error deleting bill reminder:', error);
          return of(true);
        })
      );
  }

  getBillCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/financial-analysis/bill-reminders/categories`)
      .pipe(
        catchError(error => {
          console.error('Error fetching bill categories:', error);
          return of([
            { value: 'UTILITIES', label: 'Utilities', icon: 'bolt' },
            { value: 'INSURANCE', label: 'Insurance', icon: 'shield-alt' },
            { value: 'RENT', label: 'Rent/Mortgage', icon: 'home' },
            { value: 'CREDIT_CARD', label: 'Credit Card', icon: 'credit-card' },
            { value: 'LOAN', label: 'Loan Payment', icon: 'money-bill-wave' },
            { value: 'SUBSCRIPTION', label: 'Subscription', icon: 'sync' },
            { value: 'MEDICAL', label: 'Medical', icon: 'stethoscope' },
            { value: 'OTHER', label: 'Other', icon: 'ellipsis-h' }
          ]);
        })
      );
  }

  getBillPriorities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/financial-analysis/bill-reminders/priorities`)
      .pipe(
        catchError(error => {
          console.error('Error fetching bill priorities:', error);
          return of([
            { value: 'LOW', label: 'Low', color: 'success' },
            { value: 'MEDIUM', label: 'Medium', color: 'warning' },
            { value: 'HIGH', label: 'High', color: 'danger' },
            { value: 'CRITICAL', label: 'Critical', color: 'dark' }
          ]);
        })
      );
  }

  // Financial Insights
  getFinancialInsights(): Observable<FinancialInsight[]> {
    return this.http.get<FinancialInsight[]>(`${this.apiUrl}/financial-analysis/insights`)
      .pipe(
        catchError(error => {
          console.error('Error fetching financial insights:', error);
          return of(this.generateMockFinancialInsights());
        })
      );
  }

  getInsightTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/financial-analysis/insights/types`)
      .pipe(
        catchError(error => {
          console.error('Error fetching insight types:', error);
          return of([
            { value: 'SPENDING_ALERT', label: 'Spending Alert', icon: 'exclamation-triangle' },
            { value: 'SAVINGS_OPPORTUNITY', label: 'Savings Opportunity', icon: 'piggy-bank' },
            { value: 'BILL_REMINDER', label: 'Bill Reminder', icon: 'calendar-alt' },
            { value: 'BUDGET_ALERT', label: 'Budget Alert', icon: 'chart-pie' },
            { value: 'INVESTMENT_OPPORTUNITY', label: 'Investment Opportunity', icon: 'chart-line' }
          ]);
        })
      );
  }

  // Dashboard Summary
  getDashboardSummary(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/financial-analysis/dashboard-summary`)
      .pipe(
        catchError(error => {
          console.error('Error fetching dashboard summary:', error);
          return of({
            totalBills: 3,
            upcomingBills: 1,
            totalInsights: 3,
            unreadInsights: 2,
            spendingTrends: [],
            recentInsights: []
          });
        })
      );
  }

  // Mock Data Generators
  private generateMockCashFlowForecast(period: ForecastPeriod): CashFlowForecast {
    const now = new Date();
    const endDate = new Date(now);
    
    switch (period) {
      case ForecastPeriod.WEEKLY:
        endDate.setDate(now.getDate() + 7);
        break;
      case ForecastPeriod.MONTHLY:
        endDate.setMonth(now.getMonth() + 1);
        break;
      case ForecastPeriod.QUARTERLY:
        endDate.setMonth(now.getMonth() + 3);
        break;
      case ForecastPeriod.YEARLY:
        endDate.setFullYear(now.getFullYear() + 1);
        break;
    }

    return {
      id: '1',
      userId: 'user1',
      period,
      startDate: now,
      endDate,
      projectedIncome: 8500,
      projectedExpenses: 6200,
      projectedBalance: 2300,
      confidence: 85,
      factors: [
        {
          type: 'INCOME' as any,
          description: 'Monthly salary',
          impact: 5000,
          probability: 95
        },
        {
          type: 'EXPENSE' as any,
          description: 'Rent payment',
          impact: -2000,
          probability: 100
        }
      ],
      createdAt: now,
      updatedAt: now
    };
  }

  private generateMockSpendingPatterns(): SpendingPattern[] {
    return [
      {
        id: '1',
        userId: 'user1',
        category: 'Food & Dining',
        totalAmount: 1200,
        averageAmount: 300,
        frequency: 12,
        trend: TrendDirection.INCREASING,
        percentageOfTotal: 25,
        lastTransactionDate: new Date(),
        analysisPeriod: new Date()
      },
      {
        id: '2',
        userId: 'user1',
        category: 'Transportation',
        totalAmount: 800,
        averageAmount: 200,
        frequency: 8,
        trend: TrendDirection.STABLE,
        percentageOfTotal: 17,
        lastTransactionDate: new Date(),
        analysisPeriod: new Date()
      },
      {
        id: '3',
        userId: 'user1',
        category: 'Entertainment',
        totalAmount: 600,
        averageAmount: 150,
        frequency: 4,
        trend: TrendDirection.DECREASING,
        percentageOfTotal: 12,
        lastTransactionDate: new Date(),
        analysisPeriod: new Date()
      }
    ];
  }

  private generateMockSpendingCategories(): SpendingCategory[] {
    return [
      {
        name: 'Food & Dining',
        color: '#FF6B6B',
        icon: 'restaurant',
        budget: 500,
        spent: 300,
        remaining: 200
      },
      {
        name: 'Transportation',
        color: '#4ECDC4',
        icon: 'directions_car',
        budget: 300,
        spent: 200,
        remaining: 100
      },
      {
        name: 'Entertainment',
        color: '#45B7D1',
        icon: 'movie',
        budget: 200,
        spent: 150,
        remaining: 50
      },
      {
        name: 'Shopping',
        color: '#96CEB4',
        icon: 'shopping_bag',
        budget: 400,
        spent: 250,
        remaining: 150
      }
    ];
  }

  private generateMockBillReminders(): BillReminder[] {
    return [
      {
        id: '1',
        userId: 'user1',
        billName: 'Electricity Bill',
        amount: 150,
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        category: 'Utilities',
        isRecurring: true,
        frequency: 'MONTHLY' as any,
        status: 'PENDING' as any,
        priority: 'MEDIUM' as any,
        paymentSuggestion: {
          suggestedAmount: 150,
          suggestedDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          reason: 'Pay early to avoid late fees',
          impact: 'Save $15 late fee',
          alternatives: []
        },
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        userId: 'user1',
        billName: 'Credit Card Payment',
        amount: 500,
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        category: 'Credit',
        isRecurring: true,
        frequency: 'MONTHLY' as any,
        status: 'PENDING' as any,
        priority: 'HIGH' as any,
        paymentSuggestion: {
          suggestedAmount: 500,
          suggestedDate: new Date(),
          reason: 'High priority payment',
          impact: 'Avoid interest charges',
          alternatives: []
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }

  private generateMockBillReminder(reminder: Partial<BillReminder>, id?: string): BillReminder {
    return {
      id: id || 'new-id',
      userId: 'user1',
      billName: reminder.billName || 'New Bill',
      amount: reminder.amount || 0,
      dueDate: reminder.dueDate || new Date(),
      category: reminder.category || 'Other',
      isRecurring: reminder.isRecurring || false,
      status: 'PENDING' as any,
      priority: 'MEDIUM' as any,
      paymentSuggestion: {
        suggestedAmount: reminder.amount || 0,
        suggestedDate: new Date(),
        reason: 'New bill reminder',
        impact: 'Timely payment',
        alternatives: []
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  private generateMockFinancialInsights(): FinancialInsight[] {
    return [
      {
        id: '1',
        userId: 'user1',
        type: InsightType.SPENDING_ALERT,
        title: 'High Entertainment Spending',
        description: 'Your entertainment spending is 20% higher than last month. Consider reviewing your budget.',
        severity: InsightSeverity.WARNING,
        actionable: true,
        actionItems: ['Review entertainment budget', 'Set spending limits'],
        data: { category: 'Entertainment', increase: 20 },
        createdAt: new Date()
      },
      {
        id: '2',
        userId: 'user1',
        type: InsightType.BILL_REMINDER,
        title: 'Upcoming Bill Due',
        description: 'Your electricity bill of $150 is due in 5 days.',
        severity: InsightSeverity.INFO,
        actionable: true,
        actionItems: ['Schedule payment', 'Set up auto-pay'],
        data: { billName: 'Electricity Bill', amount: 150, dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
        createdAt: new Date()
      },
      {
        id: '3',
        userId: 'user1',
        type: InsightType.SAVINGS_OPPORTUNITY,
        title: 'Savings Opportunity Detected',
        description: 'You could save $200/month by reducing dining out expenses.',
        severity: InsightSeverity.INFO,
        actionable: true,
        actionItems: ['Cook more meals at home', 'Set dining budget'],
        data: { potentialSavings: 200, category: 'Food & Dining' },
        createdAt: new Date()
      }
    ];
  }
}
