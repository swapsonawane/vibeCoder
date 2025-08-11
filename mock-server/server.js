const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

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
      { userId: user.id, username: user.username },
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔐 Login endpoint: http://localhost:${PORT}/api/auth/login`);
  console.log(`\n💡 Demo credentials:`);
  console.log(`   Username: demo`);
  console.log(`   Password: password`);
});

//// Personalized financial advice and insights
//   Expense categorization and budgeting recommendations
const BUDGET_GUIDELINES = {
  housing: 30,
  groceries: 10,
  transportation: 15,
  utilities: 10,
  entertainment: 5,
  savings: 20
};

app.post('/api/financial-advice', (req, res) => {
  const { salary, expenses, futureGoal } = req.body;

  // Validate salary is a number and > 0
  if (typeof salary !== 'number' || salary <= 0) {
    return res.status(400).json({ message: 'Invalid salary value' });
  }

  // Validate expenses is an object with numeric values
  if (typeof expenses !== 'object' || !expenses) {
    return res.status(400).json({ message: 'Invalid expenses structure' });
  }

  // Calculate total expenses
  const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
  const surplus = salary - totalExpenses;

  // Generate budget insights
  const insights = [];
  for (const [category, recommendedPct] of Object.entries(BUDGET_GUIDELINES)) {
    const expenseValue = expenses[category];
    if (typeof expenseValue !== 'number') continue;

    const actualPct = (expenseValue / salary) * 100;
    const difference = actualPct - recommendedPct;
    if (Math.abs(difference) > 5) {
      insights.push({
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Spending`,
        detail: `You're spending ${actualPct.toFixed(1)}% on ${category}, which is ${difference.toFixed(1)}% ${difference > 0 ? 'above' : 'below'} the recommended ${recommendedPct}%.`
      });
    }
  }

  // Generate advice
  const advice = [];
  if (surplus > 0) {
    advice.push(`You have a monthly surplus of $${surplus.toFixed(2)}. Consider increasing savings or investing.`);
  } else {
    advice.push(`Your expenses exceed your salary by $${Math.abs(surplus).toFixed(2)}. Review your budget.`);
  }

  if (futureGoal) {
    advice.push(`To achieve your goal of "${futureGoal}", prioritize saving at least 20% of your income.`);
  }

  // Add category-specific advice
  if (expenses.housing / salary * 100 > 35) {
    advice.push('Consider downsizing your housing costs to improve financial flexibility.');
  }

  res.json({ advice, insights });
});

module.exports = router;
