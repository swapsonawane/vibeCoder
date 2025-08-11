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

// Financial Analysis Mock Data
const cashFlowForecasts = [
  {
    id: '1',
    userId: '1',
    period: '3_MONTHS',
    forecastDate: new Date('2024-01-01'),
    projectedIncome: 7500,
    projectedExpenses: 5200,
    projectedSavings: 2300,
    confidence: 85,
    factors: [
      { type: 'INCOME_INCREASE', description: 'Annual salary review', impact: 500 },
      { type: 'EXPENSE_DECREASE', description: 'Reduced utility costs', impact: -200 }
    ]
  },
  {
    id: '2',
    userId: '1',
    period: '6_MONTHS',
    forecastDate: new Date('2024-01-01'),
    projectedIncome: 15000,
    projectedExpenses: 10800,
    projectedSavings: 4200,
    confidence: 75,
    factors: [
      { type: 'INCOME_INCREASE', description: 'Promotion expected', impact: 1000 },
      { type: 'EXPENSE_INCREASE', description: 'Home maintenance', impact: 300 }
    ]
  }
];

const spendingPatterns = [
  {
    id: '1',
    userId: '1',
    category: 'FOOD_AND_DINING',
    currentMonth: 450,
    previousMonth: 380,
    trend: 'INCREASING',
    percentageChange: 18.4,
    averageMonthly: 415,
    insights: ['Spending increased due to dining out more frequently', 'Consider meal planning to reduce costs']
  },
  {
    id: '2',
    userId: '1',
    category: 'TRANSPORTATION',
    currentMonth: 320,
    previousMonth: 350,
    trend: 'DECREASING',
    percentageChange: -8.6,
    averageMonthly: 335,
    insights: ['Reduced fuel costs due to remote work', 'Public transport usage increased']
  },
  {
    id: '3',
    userId: '1',
    category: 'ENTERTAINMENT',
    currentMonth: 280,
    previousMonth: 220,
    trend: 'INCREASING',
    percentageChange: 27.3,
    averageMonthly: 250,
    insights: ['Increased streaming subscriptions', 'More social activities']
  }
];

const billReminders = [
  {
    id: '1',
    userId: '1',
    billName: 'Electricity Bill',
    amount: 85.50,
    dueDate: new Date('2024-02-15'),
    category: 'UTILITIES',
    priority: 'HIGH',
    recurrence: 'MONTHLY',
    status: 'PENDING',
    isRecurring: true,
    nextDueDate: new Date('2024-03-15'),
    paymentSuggestions: [
      {
        method: 'AUTO_PAY',
        description: 'Set up automatic payment',
        benefits: ['Never miss a payment', 'Avoid late fees'],
        setupTime: '5 minutes'
      },
      {
        method: 'EARLY_PAYMENT',
        description: 'Pay 5 days early',
        benefits: ['Peace of mind', 'Buffer for processing time'],
        setupTime: '2 minutes'
      }
    ]
  },
  {
    id: '2',
    userId: '1',
    billName: 'Internet Service',
    amount: 65.00,
    dueDate: new Date('2024-02-20'),
    category: 'UTILITIES',
    priority: 'MEDIUM',
    recurrence: 'MONTHLY',
    status: 'PENDING',
    isRecurring: true,
    nextDueDate: new Date('2024-03-20'),
    paymentSuggestions: [
      {
        method: 'AUTO_PAY',
        description: 'Set up automatic payment',
        benefits: ['Convenient', 'No late fees'],
        setupTime: '5 minutes'
      }
    ]
  },
  {
    id: '3',
    userId: '1',
    billName: 'Car Insurance',
    amount: 120.00,
    dueDate: new Date('2024-03-01'),
    category: 'INSURANCE',
    priority: 'HIGH',
    recurrence: 'MONTHLY',
    status: 'PENDING',
    isRecurring: true,
    nextDueDate: new Date('2024-04-01'),
    paymentSuggestions: [
      {
        method: 'AUTO_PAY',
        description: 'Set up automatic payment',
        benefits: ['Required for coverage', 'Avoid policy cancellation'],
        setupTime: '5 minutes'
      }
    ]
  }
];

const financialInsights = [
  {
    id: '1',
    userId: '1',
    type: 'SPENDING_ALERT',
    title: 'High Entertainment Spending',
    description: 'Your entertainment spending is 27% higher than last month',
    severity: 'WARNING',
    category: 'ENTERTAINMENT',
    actionable: true,
    actionItems: ['Review streaming subscriptions', 'Set entertainment budget'],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    userId: '1',
    type: 'SAVINGS_OPPORTUNITY',
    title: 'Savings Potential Identified',
    description: 'You could save $200/month by optimizing your utility bills',
    severity: 'INFO',
    category: 'UTILITIES',
    actionable: true,
    actionItems: ['Compare utility providers', 'Implement energy-saving measures'],
    createdAt: new Date('2024-01-14')
  },
  {
    id: '3',
    userId: '1',
    type: 'BILL_REMINDER',
    title: 'Upcoming Bill Due',
    description: 'Electricity bill of $85.50 due in 3 days',
    severity: 'HIGH',
    category: 'BILLS',
    actionable: true,
    actionItems: ['Schedule payment', 'Set up auto-pay'],
    createdAt: new Date('2024-01-13')
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

// ===== FINANCIAL ANALYSIS API ENDPOINTS =====

// Cash Flow Forecasting
app.get('/api/financial-analysis/cash-flow-forecast', authenticateToken, (req, res) => {
  try {
    const { period = '3_MONTHS' } = req.query;
    const userForecasts = cashFlowForecasts.filter(f => f.userId === req.user.userId && f.period === period);
    
    if (userForecasts.length === 0) {
      // Generate a new forecast if none exists
      const newForecast = {
        id: Date.now().toString(),
        userId: req.user.userId,
        period: period,
        forecastDate: new Date(),
        projectedIncome: Math.floor(Math.random() * 5000) + 5000,
        projectedExpenses: Math.floor(Math.random() * 3000) + 4000,
        projectedSavings: 0,
        confidence: Math.floor(Math.random() * 30) + 70,
        factors: [
          { type: 'INCOME_INCREASE', description: 'Expected salary increase', impact: Math.floor(Math.random() * 500) + 200 },
          { type: 'EXPENSE_DECREASE', description: 'Optimized spending', impact: -(Math.floor(Math.random() * 300) + 100) }
        ]
      };
      newForecast.projectedSavings = newForecast.projectedIncome - newForecast.projectedExpenses;
      cashFlowForecasts.push(newForecast);
      res.json(newForecast);
    } else {
      res.json(userForecasts[0]);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cash flow forecast', error: error.message });
  }
});

app.get('/api/financial-analysis/cash-flow-forecast/periods', authenticateToken, (req, res) => {
  try {
    const periods = [
      { value: '1_MONTH', label: '1 Month', description: 'Short-term forecast' },
      { value: '3_MONTHS', label: '3 Months', description: 'Quarterly forecast' },
      { value: '6_MONTHS', label: '6 Months', description: 'Semi-annual forecast' },
      { value: '12_MONTHS', label: '12 Months', description: 'Annual forecast' }
    ];
    res.json(periods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch forecast periods', error: error.message });
  }
});

// Spending Pattern Analysis
app.get('/api/financial-analysis/spending-patterns', authenticateToken, (req, res) => {
  try {
    const userPatterns = spendingPatterns.filter(p => p.userId === req.user.userId);
    res.json(userPatterns);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch spending patterns', error: error.message });
  }
});

app.get('/api/financial-analysis/spending-patterns/categories', authenticateToken, (req, res) => {
  try {
    const categories = [
      { value: 'FOOD_AND_DINING', label: 'Food & Dining', icon: 'utensils' },
      { value: 'TRANSPORTATION', label: 'Transportation', icon: 'car' },
      { value: 'ENTERTAINMENT', label: 'Entertainment', icon: 'film' },
      { value: 'SHOPPING', label: 'Shopping', icon: 'shopping-bag' },
      { value: 'UTILITIES', label: 'Utilities', icon: 'bolt' },
      { value: 'HEALTHCARE', label: 'Healthcare', icon: 'heartbeat' },
      { value: 'INSURANCE', label: 'Insurance', icon: 'shield-alt' },
      { value: 'EDUCATION', label: 'Education', icon: 'graduation-cap' },
      { value: 'TRAVEL', label: 'Travel', icon: 'plane' },
      { value: 'OTHER', label: 'Other', icon: 'ellipsis-h' }
    ];
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch spending categories', error: error.message });
  }
});

// Bill Reminders
app.get('/api/financial-analysis/bill-reminders', authenticateToken, (req, res) => {
  try {
    const userReminders = billReminders.filter(r => r.userId === req.user.userId);
    res.json(userReminders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bill reminders', error: error.message });
  }
});

app.post('/api/financial-analysis/bill-reminders', authenticateToken, (req, res) => {
  try {
    const { billName, amount, dueDate, category, priority, recurrence, isRecurring } = req.body;
    
    // Validate required fields
    if (!billName || !amount || !dueDate || !category || !priority) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newReminder = {
      id: Date.now().toString(),
      userId: req.user.userId,
      billName,
      amount: parseFloat(amount),
      dueDate: new Date(dueDate),
      category,
      priority,
      recurrence: recurrence || 'MONTHLY',
      status: 'PENDING',
      isRecurring: isRecurring || false,
      nextDueDate: isRecurring ? new Date(new Date(dueDate).getTime() + 30 * 24 * 60 * 60 * 1000) : null,
      paymentSuggestions: generatePaymentSuggestions(amount, category, priority),
      createdAt: new Date()
    };

    billReminders.push(newReminder);
    res.status(201).json(newReminder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create bill reminder', error: error.message });
  }
});

app.put('/api/financial-analysis/bill-reminders/:id', authenticateToken, (req, res) => {
  try {
    const { id } = req.params;
    const reminderIndex = billReminders.findIndex(r => r.id === id && r.userId === req.user.userId);
    
    if (reminderIndex === -1) {
      return res.status(404).json({ message: 'Bill reminder not found' });
    }

    const updatedReminder = { ...billReminders[reminderIndex], ...req.body };
    billReminders[reminderIndex] = updatedReminder;
    
    res.json(updatedReminder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update bill reminder', error: error.message });
  }
});

app.delete('/api/financial-analysis/bill-reminders/:id', authenticateToken, (req, res) => {
  try {
    const { id } = req.params;
    const reminderIndex = billReminders.findIndex(r => r.id === id && r.userId === req.user.userId);
    
    if (reminderIndex === -1) {
      return res.status(404).json({ message: 'Bill reminder not found' });
    }

    billReminders.splice(reminderIndex, 1);
    res.json({ message: 'Bill reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete bill reminder', error: error.message });
  }
});

app.get('/api/financial-analysis/bill-reminders/categories', authenticateToken, (req, res) => {
  try {
    const categories = [
      { value: 'UTILITIES', label: 'Utilities', icon: 'bolt' },
      { value: 'INSURANCE', label: 'Insurance', icon: 'shield-alt' },
      { value: 'RENT', label: 'Rent/Mortgage', icon: 'home' },
      { value: 'CREDIT_CARD', label: 'Credit Card', icon: 'credit-card' },
      { value: 'LOAN', label: 'Loan Payment', icon: 'money-bill-wave' },
      { value: 'SUBSCRIPTION', label: 'Subscription', icon: 'sync' },
      { value: 'MEDICAL', label: 'Medical', icon: 'stethoscope' },
      { value: 'OTHER', label: 'Other', icon: 'ellipsis-h' }
    ];
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bill categories', error: error.message });
  }
});

app.get('/api/financial-analysis/bill-reminders/priorities', authenticateToken, (req, res) => {
  try {
    const priorities = [
      { value: 'LOW', label: 'Low', color: 'success' },
      { value: 'MEDIUM', label: 'Medium', color: 'warning' },
      { value: 'HIGH', label: 'High', color: 'danger' },
      { value: 'CRITICAL', label: 'Critical', color: 'dark' }
    ];
    res.json(priorities);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch priority levels', error: error.message });
  }
});

// Financial Insights
app.get('/api/financial-analysis/insights', authenticateToken, (req, res) => {
  try {
    const userInsights = financialInsights.filter(i => i.userId === req.user.userId);
    res.json(userInsights);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch financial insights', error: error.message });
  }
});

app.get('/api/financial-analysis/insights/types', authenticateToken, (req, res) => {
  try {
    const types = [
      { value: 'SPENDING_ALERT', label: 'Spending Alert', icon: 'exclamation-triangle' },
      { value: 'SAVINGS_OPPORTUNITY', label: 'Savings Opportunity', icon: 'piggy-bank' },
      { value: 'BILL_REMINDER', label: 'Bill Reminder', icon: 'calendar-alt' },
      { value: 'BUDGET_ALERT', label: 'Budget Alert', icon: 'chart-pie' },
      { value: 'INVESTMENT_OPPORTUNITY', label: 'Investment Opportunity', icon: 'chart-line' }
    ];
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch insight types', error: error.message });
  }
});

// Dashboard Summary
app.get('/api/financial-analysis/dashboard-summary', authenticateToken, (req, res) => {
  try {
    const userReminders = billReminders.filter(r => r.userId === req.user.userId);
    const userInsights = financialInsights.filter(i => i.userId === req.user.userId);
    const userPatterns = spendingPatterns.filter(p => p.userId === req.user.userId);

    const summary = {
      totalBills: userReminders.length,
      upcomingBills: userReminders.filter(r => {
        const daysUntilDue = Math.ceil((new Date(r.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
        return daysUntilDue <= 7 && daysUntilDue > 0;
      }).length,
      totalInsights: userInsights.length,
      unreadInsights: userInsights.filter(i => !i.isRead).length,
      spendingTrends: userPatterns.map(p => ({
        category: p.category,
        trend: p.trend,
        percentageChange: p.percentageChange
      })),
      recentInsights: userInsights.slice(0, 3)
    };

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dashboard summary', error: error.message });
  }
});

// Helper function to generate payment suggestions
function generatePaymentSuggestions(amount, category, priority) {
  const suggestions = [];
  
  // Auto-pay suggestion for recurring bills
  if (category === 'UTILITIES' || category === 'INSURANCE' || category === 'RENT') {
    suggestions.push({
      method: 'AUTO_PAY',
      description: 'Set up automatic payment',
      benefits: ['Never miss a payment', 'Avoid late fees'],
      setupTime: '5 minutes'
    });
  }

  // Early payment suggestion for high priority bills
  if (priority === 'HIGH' || priority === 'CRITICAL') {
    suggestions.push({
      method: 'EARLY_PAYMENT',
      description: 'Pay 3-5 days early',
      benefits: ['Peace of mind', 'Buffer for processing time'],
      setupTime: '2 minutes'
    });
  }

  // Payment plan suggestion for large amounts
  if (amount > 200) {
    suggestions.push({
      method: 'PAYMENT_PLAN',
      description: 'Consider payment plan',
      benefits: ['Spread cost over time', 'Reduce monthly burden'],
      setupTime: '10 minutes'
    });
  }

  return suggestions;
}

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
  console.log(`\n📈 Financial Analysis API Endpoints:`);
  console.log(`   GET  /api/financial-analysis/cash-flow-forecast`);
  console.log(`   GET  /api/financial-analysis/spending-patterns`);
  console.log(`   GET  /api/financial-analysis/bill-reminders`);
  console.log(`   POST /api/financial-analysis/bill-reminders`);
  console.log(`   GET  /api/financial-analysis/insights`);
  console.log(`   GET  /api/financial-analysis/dashboard-summary`);
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

/*
================================================================================
FINANCIAL ANALYSIS API - FEATURE SUMMARY
================================================================================

This server has been extended with comprehensive financial analysis features
to support the banking application's advanced financial management capabilities.

NEW FEATURES ADDED:
==================

1. CASH FLOW FORECASTING
   - Endpoint: GET /api/financial-analysis/cash-flow-forecast
   - Endpoint: GET /api/financial-analysis/cash-flow-forecast/periods
   - Features: 3-month and 6-month projections, confidence scoring, impact factors
   - Data: Projected income, expenses, savings with trend analysis

2. SPENDING PATTERN ANALYSIS
   - Endpoint: GET /api/financial-analysis/spending-patterns
   - Endpoint: GET /api/financial-analysis/spending-patterns/categories
   - Features: Category-wise spending analysis, trend detection, percentage changes
   - Data: Monthly comparisons, insights, average spending patterns

3. BILL DUE DATE REMINDERS WITH PAYMENT SUGGESTIONS
   - Endpoint: GET /api/financial-analysis/bill-reminders
   - Endpoint: POST /api/financial-analysis/bill-reminders
   - Endpoint: PUT /api/financial-analysis/bill-reminders/:id
   - Endpoint: DELETE /api/financial-analysis/bill-reminders/:id
   - Endpoint: GET /api/financial-analysis/bill-reminders/categories
   - Endpoint: GET /api/financial-analysis/bill-reminders/priorities
   - Features: CRUD operations, payment suggestions, priority management
   - Data: Due dates, amounts, categories, payment methods, reminders

4. FINANCIAL INSIGHTS
   - Endpoint: GET /api/financial-analysis/insights
   - Endpoint: GET /api/financial-analysis/insights/types
   - Features: Personalized financial advice, spending recommendations
   - Data: Insight types, descriptions, actionable recommendations

5. DASHBOARD SUMMARY
   - Endpoint: GET /api/financial-analysis/dashboard-summary
   - Features: Overview of all financial analysis data
   - Data: Quick stats, recent activities, upcoming reminders

MOCK DATA STRUCTURES:
====================

1. cashFlowForecasts: Array of forecast objects with period, projections, confidence
2. spendingPatterns: Array of spending analysis with categories, trends, insights
3. billReminders: Array of bill reminder objects with CRUD capabilities
4. financialInsights: Array of insight objects with types and recommendations

HELPER FUNCTIONS:
=================

1. generatePaymentSuggestions(amount, category, priority)
   - Generates contextual payment suggestions based on bill characteristics
   - Returns array of payment methods with benefits and setup times

AUTHENTICATION:
===============

All financial analysis endpoints require JWT authentication via the
authenticateToken middleware. Include the token in the Authorization header:
Authorization: Bearer <jwt_token>

USAGE EXAMPLE:
==============

1. Login to get JWT token:
   POST /api/auth/login
   Body: {"username": "demo", "password": "password"}

2. Use token for financial analysis:
   GET /api/financial-analysis/cash-flow-forecast
   Headers: Authorization: Bearer <token>

FRONTEND INTEGRATION:
====================

These endpoints are consumed by the Angular FinancialAnalysisService
in the frontend application, providing a complete financial analysis
experience with real-time data and interactive features.

================================================================================
END OF FINANCIAL ANALYSIS API SUMMARY
================================================================================
*/


