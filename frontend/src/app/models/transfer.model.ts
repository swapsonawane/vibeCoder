export interface Transfer {
  id: string;
  fromAccountId: string;
  toAccountId?: string;
  beneficiaryId?: string;
  amount: number;
  currency: string;
  description: string;
  type: TransferType;
  status: TransferStatus;
  scheduledDate?: Date;
  completedDate?: Date;
  reference: string;
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export enum TransferType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
  WIRE = 'WIRE',
  ACH = 'ACH'
}

export enum TransferStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  SCHEDULED = 'SCHEDULED'
}

export interface TransferRequest {
  fromAccountId: string;
  toAccountId?: string;
  beneficiaryId?: string;
  amount: number;
  currency: string;
  description: string;
  type: TransferType;
  scheduledDate?: Date;
}

export interface Beneficiary {
  id: string;
  userId: string;
  name: string;
  accountNumber: string;
  routingNumber?: string;
  bankName: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

// Bill Payment Models
export interface BillPayment {
  id: string;
  userId: string;
  accountId: string;
  payeeId: string;
  amount: number;
  currency: string;
  description?: string;
  dueDate: Date;
  scheduledDate?: Date;
  completedDate?: Date;
  status: BillPaymentStatus;
  isRecurring: boolean;
  recurringFrequency?: RecurringFrequency;
  recurringEndDate?: Date;
  reference: string;
  createdAt: Date;
  updatedAt?: Date;
}

export enum BillPaymentStatus {
  SCHEDULED = 'SCHEDULED',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  OVERDUE = 'OVERDUE'
}

export enum RecurringFrequency {
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY', 
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  YEARLY = 'YEARLY'
}

export interface Payee {
  id: string;
  userId: string;
  name: string;
  category: PayeeCategory;
  accountNumber: string;
  address?: string;
  phoneNumber?: string;
  website?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export enum PayeeCategory {
  UTILITY = 'UTILITY',
  TELECOM = 'TELECOM',
  CREDIT_CARD = 'CREDIT_CARD',
  INSURANCE = 'INSURANCE',
  LOAN = 'LOAN',
  GOVERNMENT = 'GOVERNMENT',
  HEALTHCARE = 'HEALTHCARE',
  EDUCATION = 'EDUCATION',
  OTHER = 'OTHER'
}

export interface BillPaymentRequest {
  accountId: string;
  payeeId: string;
  amount: number;
  currency: string;
  description?: string;
  dueDate: Date;
  scheduledDate?: Date;
  isRecurring: boolean;
  recurringFrequency?: RecurringFrequency;
  recurringEndDate?: Date;
} 