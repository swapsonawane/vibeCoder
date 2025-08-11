const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 8080;
const JWT_SECRET = 'netbanking-demo-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const users = [
  {
    id: '1',
    username: 'demo',
    password: bcrypt.hashSync('password', 10),
    email: 'demo@netbanking.com',
    firstName: 'Demo',
    lastName: 'User',
    phoneNumber: '+1-555-0123',
    isActive: true,
    createdAt: new Date('2023-01-01'),
    lastLoginAt: new Date()
  }
];

const accounts = [
  {
    id: '1',
    userId: '1',
    accountNumber: 'ACC1001234567',
    accountType: 'SAVINGS',
    balance: 15750.50,
    availableBalance: 15750.50,
    currency: 'USD',
    isActive: true,
    openedDate: new Date('2023-01-15')
  },
  {
    id: '2',
    userId: '1',
    accountNumber: 'ACC1001234568',
    accountType: 'CHECKING',
    balance: 8240.25,
    availableBalance: 8240.25,
    currency: 'USD',
    isActive: true,
    openedDate: new Date('2023-02-01')
  }
];

const transactions = [
  {
    id: '1',
    accountId: '1',
    type: 'CREDIT',
    amount: 2500.00,
    description: 'Salary Credit',
    date: new Date('2024-01-15'),
    status: 'COMPLETED',
    balance: 15750.50
  },
  {
    id: '2',
    accountId: '1',
    type: 'DEBIT',
    amount: 120.00,
    description: 'Grocery Store',
    date: new Date('2024-01-14'),
    status: 'COMPLETED',
    balance: 13250.50
  }
];

// JWT Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update last login
    user.lastLoginAt = new Date();

    // Remove password from response
    const { password: _, ...userResponse } = user;

    res.json({
      token,
      user: userResponse,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
});

// Account routes
app.get('/api/accounts', authenticateToken, (req, res) => {
  const userAccounts = accounts.filter(acc => acc.userId === req.user.userId);
  res.json(userAccounts);
});

app.get('/api/accounts/:id', authenticateToken, (req, res) => {
  const account = accounts.find(acc => acc.id === req.params.id && acc.userId === req.user.userId);
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }
  res.json(account);
});

app.get('/api/accounts/:id/transactions', authenticateToken, (req, res) => {
  const account = accounts.find(acc => acc.id === req.params.id && acc.userId === req.user.userId);
  if (!account) {
    return res.status(404).json({ message: 'Account not found' });
  }
  
  const accountTransactions = transactions.filter(t => t.accountId === req.params.id);
  res.json(accountTransactions);
});

// Transfer routes
app.post('/api/transfers', authenticateToken, (req, res) => {
  const { fromAccount, toAccount, amount, description } = req.body;
  
  // Mock transfer creation
  const transfer = {
    id: Date.now().toString(),
    fromAccount,
    toAccount,
    amount,
    description,
    status: 'COMPLETED',
    date: new Date(),
    userId: req.user.userId
  };
  
  res.json(transfer);
});

// Bill payment routes
app.post('/api/bills', authenticateToken, (req, res) => {
  const { account, payee, amount, dueDate, description } = req.body;
  
  // Mock bill payment creation
  const payment = {
    id: Date.now().toString(),
    account,
    payee,
    amount,
    dueDate,
    description,
    status: 'SCHEDULED',
    date: new Date(),
    userId: req.user.userId
  };
  
  res.json(payment);
});

app.get('/api/bills/upcoming', authenticateToken, (req, res) => {
  // Mock upcoming bills
  const upcomingBills = [
    {
      id: '1',
      payeeName: 'Electric Company',
      amount: 85.50,
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      status: 'SCHEDULED'
    }
  ];
  res.json(upcomingBills);
});

// Notification routes
app.get('/api/notifications', authenticateToken, (req, res) => {
  const notifications = [
    {
      id: '1',
      title: 'Welcome to NetBanking',
      message: 'Your account has been successfully set up',
      type: 'INFO',
      isRead: false,
      createdAt: new Date()
    }
  ];
  res.json(notifications);
});

app.get('/api/notifications/unread/count', authenticateToken, (req, res) => {
  res.json({ count: 1 });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ===== WALLET APIs =====

// Mock wallet data
const wallets = [
  {
    id: 'wallet_1',
    userId: '1',
    walletNumber: 'WLT1001234567',
    balance: 2500.75,
    currency: 'USD',
    isActive: true,
    createdAt: new Date('2024-01-01'),
    lastTransactionAt: new Date(),
    dailyLimit: 5000,
    monthlyLimit: 50000,
    usedDailyLimit: 150,
    usedMonthlyLimit: 2350
  }
];

const walletTransactions = [
  {
    id: 'wtxn_1',
    walletId: 'wallet_1',
    transactionType: 'CREDIT',
    amount: 500.00,
    currency: 'USD',
    description: 'Top up from savings account',
    status: 'COMPLETED',
    transactionDate: new Date(),
    referenceNumber: 'WTF2024001'
  },
  {
    id: 'wtxn_2',
    walletId: 'wallet_1',
    transactionType: 'QR_PAYMENT',
    amount: 25.50,
    currency: 'USD',
    description: 'Coffee Shop Payment',
    merchantName: 'Starbucks',
    status: 'COMPLETED',
    transactionDate: new Date(Date.now() - 3600000),
    referenceNumber: 'WTF2024002'
  }
];

const cryptoHoldings = [
  {
    id: 'crypto_1',
    walletId: 'wallet_1',
    symbol: 'BTC',
    name: 'Bitcoin',
    quantity: 0.05,
    averageBuyPrice: 45000,
    currentPrice: 50000,
    totalValue: 2500,
    profitLoss: 250,
    profitLossPercentage: 11.11,
    lastUpdated: new Date()
  },
  {
    id: 'crypto_2',
    walletId: 'wallet_1',
    symbol: 'ETH',
    name: 'Ethereum',
    quantity: 1.2,
    averageBuyPrice: 2800,
    currentPrice: 3200,
    totalValue: 3840,
    profitLoss: 480,
    profitLossPercentage: 14.29,
    lastUpdated: new Date()
  }
];

const availableCryptos = [
  { symbol: 'BTC', name: 'Bitcoin', price: 50000, change24h: 2.5 },
  { symbol: 'ETH', name: 'Ethereum', price: 3200, change24h: -1.2 },
  { symbol: 'ADA', name: 'Cardano', price: 0.85, change24h: 5.8 },
  { symbol: 'DOT', name: 'Polkadot', price: 12.50, change24h: -0.5 }
];

// Store generated QR codes
const qrPayments = [];

// Get wallet
app.get('/api/wallet', authenticateToken, (req, res) => {
  const wallet = wallets.find(w => w.userId === req.user.id);
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }
  res.json(wallet);
});

// Create wallet
app.post('/api/wallet', authenticateToken, (req, res) => {
  const newWallet = {
    id: `wallet_${Date.now()}`,
    userId: req.user.id,
    walletNumber: `WLT${Math.random().toString().substr(2, 10)}`,
    balance: 0,
    currency: 'USD',
    isActive: true,
    createdAt: new Date(),
    dailyLimit: 5000,
    monthlyLimit: 50000,
    usedDailyLimit: 0,
    usedMonthlyLimit: 0
  };
  wallets.push(newWallet);
  res.status(201).json(newWallet);
});

// Get wallet summary
app.get('/api/wallet/summary', authenticateToken, (req, res) => {
  const wallet = wallets.find(w => w.userId === req.user.id);
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  const summary = {
    totalBalance: wallet.balance,
    availableBalance: wallet.balance,
    pendingTransactions: 0,
    monthlySpending: 1250.75,
    cryptoPortfolioValue: 6340,
    totalProfitLoss: 730,
    recentTransactions: walletTransactions.slice(0, 5),
    topCryptoHoldings: cryptoHoldings.slice(0, 3)
  };
  res.json(summary);
});

// Get wallet transactions
app.get('/api/wallet/transactions', authenticateToken, (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const size = parseInt(req.query.size) || 10;
  const start = page * size;
  const end = start + size;
  
  res.json({
    transactions: walletTransactions.slice(start, end),
    totalElements: walletTransactions.length
  });
});

// Top up wallet
app.post('/api/wallet/topup', authenticateToken, (req, res) => {
  const { amount, sourceAccountId } = req.body;
  const wallet = wallets.find(w => w.userId === req.user.id);
  
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  wallet.balance += amount;
  wallet.lastTransactionAt = new Date();

  const transaction = {
    id: `wtxn_${Date.now()}`,
    walletId: wallet.id,
    transactionType: 'CREDIT',
    amount,
    currency: 'USD',
    description: `Top up from account ${sourceAccountId}`,
    status: 'COMPLETED',
    transactionDate: new Date(),
    referenceNumber: `WTF${Date.now()}`
  };
  
  walletTransactions.unshift(transaction);
  res.json(transaction);
});

// Send payment
app.post('/api/wallet/send', authenticateToken, (req, res) => {
  const { recipientWallet, amount, description } = req.body;
  const wallet = wallets.find(w => w.userId === req.user.id);
  
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  if (wallet.balance < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  wallet.balance -= amount;
  wallet.lastTransactionAt = new Date();

  const transaction = {
    id: `wtxn_${Date.now()}`,
    walletId: wallet.id,
    transactionType: 'DEBIT',
    amount,
    currency: 'USD',
    description: description || 'Wallet payment',
    recipientWallet,
    status: 'COMPLETED',
    transactionDate: new Date(),
    referenceNumber: `WTF${Date.now()}`
  };
  
  walletTransactions.unshift(transaction);
  res.json(transaction);
});

// Get crypto holdings
app.get('/api/wallet/crypto/holdings', authenticateToken, (req, res) => {
  res.json(cryptoHoldings);
});

// Get available cryptos
app.get('/api/wallet/crypto/available', authenticateToken, (req, res) => {
  res.json(availableCryptos);
});

// Buy crypto
app.post('/api/wallet/crypto/buy', authenticateToken, (req, res) => {
  const { symbol, amount } = req.body;
  const wallet = wallets.find(w => w.userId === req.user.id);
  
  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  if (wallet.balance < amount) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  const crypto = availableCryptos.find(c => c.symbol === symbol);
  if (!crypto) {
    return res.status(404).json({ message: 'Cryptocurrency not found' });
  }

  wallet.balance -= amount;
  const quantity = amount / crypto.price;

  const transaction = {
    id: `ctxn_${Date.now()}`,
    walletId: wallet.id,
    symbol,
    type: 'BUY',
    quantity,
    pricePerUnit: crypto.price,
    totalAmount: amount,
    fees: amount * 0.01,
    status: 'COMPLETED',
    transactionDate: new Date(),
    referenceNumber: `CTF${Date.now()}`
  };

  // Update or create holding
  let holding = cryptoHoldings.find(h => h.symbol === symbol);
  if (holding) {
    const totalValue = holding.quantity * holding.averageBuyPrice + amount;
    holding.quantity += quantity;
    holding.averageBuyPrice = totalValue / holding.quantity;
    holding.totalValue = holding.quantity * crypto.price;
    holding.profitLoss = holding.totalValue - (holding.quantity * holding.averageBuyPrice);
    holding.profitLossPercentage = (holding.profitLoss / (holding.quantity * holding.averageBuyPrice)) * 100;
  } else {
    cryptoHoldings.push({
      id: `crypto_${Date.now()}`,
      walletId: wallet.id,
      symbol,
      name: crypto.name,
      quantity,
      averageBuyPrice: crypto.price,
      currentPrice: crypto.price,
      totalValue: amount,
      profitLoss: 0,
      profitLossPercentage: 0,
      lastUpdated: new Date()
    });
  }

  res.json(transaction);
});

// Generate QR code
app.post('/api/wallet/qr/generate', authenticateToken, (req, res) => {
  const { amount, description } = req.body;
  
  const qrPayment = {
    id: `qr_${Date.now()}`,
    qrCode: `QR${Math.random().toString(36).substr(2, 10)}`,
    merchantName: 'Personal Payment',
    merchantId: req.user.id,
    userId: req.user.id,
    amount: amount || null,
    currency: 'USD',
    description: description || 'Payment Request',
    isActive: true,
    createdAt: new Date(),
    currentUses: 0,
    maxUses: amount ? 1 : null
  };

  // Store the QR code
  qrPayments.push(qrPayment);
  console.log('QR code generated and stored:', qrPayment);

  res.json(qrPayment);
});

// Get my QR codes
app.get('/api/wallet/qr/my-codes', authenticateToken, (req, res) => {
  // Get QR codes for the current user
  const userQRCodes = qrPayments.filter(qr => qr.userId === req.user.id);
  console.log('Fetching QR codes for user:', req.user.id, 'Found:', userQRCodes.length);
  res.json(userQRCodes);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔐 Login endpoint: http://localhost:${PORT}/api/auth/login`);
  console.log(`💳 Wallet endpoint: http://localhost:${PORT}/api/wallet`);
  console.log(`\n💡 Demo credentials:`);
  console.log(`   Username: demo`);
  console.log(`   Password: password`);
}); 