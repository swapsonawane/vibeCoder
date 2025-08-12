import { Component, OnInit } from '@angular/core';
import { FinancialAnalysisService } from '../../services/financial-analysis.service';
import {
  CashFlowForecast,
  ForecastPeriod,
  SpendingPattern,
  BillReminder,
  FinancialInsight,
  SpendingCategory
} from '../../models/financial-analysis.model';

@Component({
  selector: 'app-financial-analysis',
  templateUrl: './financial-analysis.component.html',
  styleUrls: ['./financial-analysis.component.css']
})
export class FinancialAnalysisComponent implements OnInit {
  activeTab: string = 'overview';
  loading: boolean = false;
  
  // Cash Flow Data
  cashFlowForecast: CashFlowForecast | null = null;
  selectedForecastPeriod: ForecastPeriod = ForecastPeriod.MONTHLY;
  forecastPeriodEnum = ForecastPeriod; // Make enum accessible in template
  
  // Spending Analysis Data
  spendingPatterns: SpendingPattern[] = [];
  spendingCategories: SpendingCategory[] = [];
  
  // Bill Reminders Data
  billReminders: BillReminder[] = [];
  
  // Financial Insights Data
  financialInsights: FinancialInsight[] = [];

  constructor(private financialAnalysisService: FinancialAnalysisService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    
    // Load all data in parallel
    Promise.all([
      this.loadCashFlowForecast(),
      this.loadSpendingPatterns(),
      this.loadSpendingCategories(),
      this.loadBillReminders(),
      this.loadFinancialInsights()
    ]).finally(() => {
      this.loading = false;
    });
  }

  private loadCashFlowForecast(): Promise<void> {
    return this.financialAnalysisService.getCashFlowForecast(this.selectedForecastPeriod)
      .toPromise()
      .then(forecast => {
        this.cashFlowForecast = forecast || null;
      })
      .catch(error => {
        console.error('Error loading cash flow forecast:', error);
      });
  }

  private loadSpendingPatterns(): Promise<void> {
    return this.financialAnalysisService.getSpendingPatterns(6)
      .toPromise()
      .then(patterns => {
        this.spendingPatterns = patterns || [];
      })
      .catch(error => {
        console.error('Error loading spending patterns:', error);
      });
  }

  private loadSpendingCategories(): Promise<void> {
    return this.financialAnalysisService.getSpendingCategories()
      .toPromise()
      .then(categories => {
        this.spendingCategories = categories || [];
      })
      .catch(error => {
        console.error('Error loading spending categories:', error);
      });
  }

  private loadBillReminders(): Promise<void> {
    return this.financialAnalysisService.getBillReminders()
      .toPromise()
      .then(reminders => {
        this.billReminders = reminders || [];
      })
      .catch(error => {
        console.error('Error loading bill reminders:', error);
      });
  }

  private loadFinancialInsights(): Promise<void> {
    return this.financialAnalysisService.getFinancialInsights()
      .toPromise()
      .then(insights => {
        this.financialInsights = insights || [];
      })
      .catch(error => {
        console.error('Error loading financial insights:', error);
      });
  }

  onForecastPeriodChange(period: ForecastPeriod): void {
    this.selectedForecastPeriod = period;
    this.loadCashFlowForecast();
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  refreshData(): void {
    this.loadData();
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'CRITICAL': return 'alert-danger';
      case 'ALERT': return 'alert-warning';
      case 'WARNING': return 'alert-warning';
      case 'INFO': return 'alert-info';
      default: return 'alert-secondary';
    }
  }

  getTrendIcon(trend: string): string {
    switch (trend) {
      case 'INCREASING': return 'trending_up';
      case 'DECREASING': return 'trending_down';
      case 'STABLE': return 'trending_flat';
      case 'FLUCTUATING': return 'timeline';
      default: return 'trending_flat';
    }
  }

  getTrendColor(trend: string): string {
    switch (trend) {
      case 'INCREASING': return 'text-danger';
      case 'DECREASING': return 'text-success';
      case 'STABLE': return 'text-primary';
      case 'FLUCTUATING': return 'text-warning';
      default: return 'text-muted';
    }
  }

  getDaysUntilDue(dueDate: Date): number {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'CRITICAL': return 'badge-danger';
      case 'HIGH': return 'badge-warning';
      case 'MEDIUM': return 'badge-info';
      case 'LOW': return 'badge-secondary';
      default: return 'badge-secondary';
    }
  }
}
