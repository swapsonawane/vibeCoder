export interface DigitalWallet {
  id: string;
  userId: string;
  walletNumber: string;
  balance: number;
  currency: string;
  isActive: boolean;
  createdAt: Date;
  lastTransactionAt?: Date;
  dailyLimit: number;
  monthlyLimit: number;
  usedDailyLimit: number;
  usedMonthlyLimit: number;
}

export interface WalletTransaction {
  id: string;
  walletId: string;
  transactionType: 'CREDIT' | 'DEBIT' | 'TRANSFER' | 'QR_PAYMENT' | 'CRYPTO_BUY' | 'CRYPTO_SELL';
  amount: number;
  currency: string;
  description: string;
  recipientName?: string;
  recipientWallet?: string;
  merchantName?: string;
  qrCodeId?: string;
  cryptoSymbol?: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  transactionDate: Date;
  referenceNumber: string;
  fees?: number;
  metadata?: { [key: string]: any };
}

export interface QRPayment {
  id: string;
  qrCode: string;
  merchantName: string;
  merchantId: string;
  amount?: number;
  currency: string;
  description?: string;
  isActive: boolean;
  expiresAt?: Date;
  createdAt: Date;
  maxUses?: number;
  currentUses: number;
}

export interface CryptoHolding {
  id: string;
  walletId: string;
  symbol: string;
  name: string;
  quantity: number;
  averageBuyPrice: number;
  currentPrice: number;
  totalValue: number;
  profitLoss: number;
  profitLossPercentage: number;
  lastUpdated: Date;
}

export interface CryptoTransaction {
  id: string;
  walletId: string;
  symbol: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  pricePerUnit: number;
  totalAmount: number;
  fees: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  transactionDate: Date;
  referenceNumber: string;
}

export interface ContactlessPayment {
  id: string;
  walletId: string;
  merchantName: string;
  amount: number;
  currency: string;
  paymentMethod: 'NFC' | 'TAP_TO_PAY' | 'CONTACTLESS_CARD';
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  transactionDate: Date;
  location?: string;
  deviceInfo?: string;
}

export interface WalletSettings {
  id: string;
  walletId: string;
  enableNotifications: boolean;
  enableBiometricAuth: boolean;
  autoTopUp: boolean;
  autoTopUpAmount: number;
  autoTopUpThreshold: number;
  preferredCurrency: string;
  transactionLimits: {
    daily: number;
    monthly: number;
    perTransaction: number;
  };
  securitySettings: {
    requirePinForPayments: boolean;
    requireBiometricForLargeAmounts: boolean;
    largeAmountThreshold: number;
  };
}

export interface WalletSummary {
  totalBalance: number;
  availableBalance: number;
  pendingTransactions: number;
  monthlySpending: number;
  cryptoPortfolioValue: number;
  totalProfitLoss: number;
  recentTransactions: WalletTransaction[];
  topCryptoHoldings: CryptoHolding[];
}

export interface PaymentRequest {
  recipientWallet: string;
  amount: number;
  currency: string;
  description?: string;
  paymentType: 'INSTANT' | 'SCHEDULED';
  scheduledDate?: Date;
  pin?: string;
  biometricAuth?: boolean;
}

export interface TopUpRequest {
  walletId: string;
  amount: number;
  sourceAccountId: string;
  currency: string;
  pin?: string;
}

export interface WithdrawRequest {
  walletId: string;
  amount: number;
  destinationAccountId: string;
  currency: string;
  pin?: string;
}