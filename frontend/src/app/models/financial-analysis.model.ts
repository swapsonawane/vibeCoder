export interface CashFlowForecast {
  id: string;
  userId: string;
  period: ForecastPeriod;
  startDate: Date;
  endDate: Date;
  projectedIncome: number;
  projectedExpenses: number;
  projectedBalance: number;
  confidence: number; // 0-100
  factors: ForecastFactor[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ForecastPeriod {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  YEARLY = 'YEARLY'
}

export interface ForecastFactor {
  type: FactorType;
  description: string;
  impact: number; // positive or negative amount
  probability: number; // 0-100
}

export enum FactorType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER',
  BILL = 'BILL',
  SUBSCRIPTION = 'SUBSCRIPTION'
}

export interface SpendingPattern {
  id: string;
  userId: string;
  category: string;
  totalAmount: number;
  averageAmount: number;
  frequency: number; // transactions per month
  trend: TrendDirection;
  percentageOfTotal: number;
  lastTransactionDate: Date;
  analysisPeriod: Date;
}

export enum TrendDirection {
  INCREASING = 'INCREASING',
  DECREASING = 'DECREASING',
  STABLE = 'STABLE',
  FLUCTUATING = 'FLUCTUATING'
}

export interface SpendingCategory {
  name: string;
  color: string;
  icon: string;
  budget?: number;
  spent: number;
  remaining?: number;
}

export interface BillReminder {
  id: string;
  userId: string;
  billName: string;
  amount: number;
  dueDate: Date;
  category: string;
  isRecurring: boolean;
  frequency?: RecurrenceFrequency;
  status: ReminderStatus;
  priority: ReminderPriority;
  paymentSuggestion: PaymentSuggestion;
  lastPaidDate?: Date;
  nextDueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum RecurrenceFrequency {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  YEARLY = 'YEARLY'
}

export enum ReminderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED'
}

export enum ReminderPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface PaymentSuggestion {
  suggestedAmount: number;
  suggestedDate: Date;
  reason: string;
  impact: string;
  alternatives: PaymentAlternative[];
}

export interface PaymentAlternative {
  amount: number;
  date: Date;
  description: string;
  pros: string[];
  cons: string[];
}

export interface FinancialInsight {
  id: string;
  userId: string;
  type: InsightType;
  title: string;
  description: string;
  severity: InsightSeverity;
  actionable: boolean;
  actionItems?: string[];
  data: any;
  createdAt: Date;
}

export enum InsightType {
  SPENDING_ALERT = 'SPENDING_ALERT',
  BUDGET_BREACH = 'BUDGET_BREACH',
  SAVINGS_OPPORTUNITY = 'SAVINGS_OPPORTUNITY',
  BILL_REMINDER = 'BILL_REMINDER',
  CASH_FLOW_WARNING = 'CASH_FLOW_WARNING',
  PATTERN_DETECTED = 'PATTERN_DETECTED'
}

export enum InsightSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ALERT = 'ALERT',
  CRITICAL = 'CRITICAL'
}
