# Financial Analysis API Documentation

This document provides comprehensive documentation for the Financial Analysis API endpoints implemented in the Node.js backend server.

## Base URL
```
http://localhost:8080/api
```

## Authentication
All endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### 1. Cash Flow Forecasting

#### Get Cash Flow Forecast
**GET** `/financial-analysis/cash-flow-forecast`

Retrieves cash flow forecast for a specific period.

**Query Parameters:**
- `period` (optional): Forecast period (default: `3_MONTHS`)
  - `1_MONTH` - 1 Month
  - `3_MONTHS` - 3 Months  
  - `6_MONTHS` - 6 Months
  - `12_MONTHS` - 12 Months

**Response:**
```json
{
  "id": "1",
  "userId": "1",
  "period": "3_MONTHS",
  "forecastDate": "2024-01-01T00:00:00.000Z",
  "projectedIncome": 7500,
  "projectedExpenses": 5200,
  "projectedSavings": 2300,
  "confidence": 85,
  "factors": [
    {
      "type": "INCOME_INCREASE",
      "description": "Annual salary review",
      "impact": 500
    },
    {
      "type": "EXPENSE_DECREASE", 
      "description": "Reduced utility costs",
      "impact": -200
    }
  ]
}
```

#### Get Forecast Periods
**GET** `/financial-analysis/cash-flow-forecast/periods`

Retrieves available forecast periods.

**Response:**
```json
[
  {
    "value": "1_MONTH",
    "label": "1 Month",
    "description": "Short-term forecast"
  },
  {
    "value": "3_MONTHS", 
    "label": "3 Months",
    "description": "Quarterly forecast"
  },
  {
    "value": "6_MONTHS",
    "label": "6 Months", 
    "description": "Semi-annual forecast"
  },
  {
    "value": "12_MONTHS",
    "label": "12 Months",
    "description": "Annual forecast"
  }
]
```

### 2. Spending Pattern Analysis

#### Get Spending Patterns
**GET** `/financial-analysis/spending-patterns`

Retrieves spending patterns analysis for the authenticated user.

**Response:**
```json
[
  {
    "id": "1",
    "userId": "1",
    "category": "FOOD_AND_DINING",
    "currentMonth": 450,
    "previousMonth": 380,
    "trend": "INCREASING",
    "percentageChange": 18.4,
    "averageMonthly": 415,
    "insights": [
      "Spending increased due to dining out more frequently",
      "Consider meal planning to reduce costs"
    ]
  },
  {
    "id": "2",
    "userId": "1", 
    "category": "TRANSPORTATION",
    "currentMonth": 320,
    "previousMonth": 350,
    "trend": "DECREASING",
    "percentageChange": -8.6,
    "averageMonthly": 335,
    "insights": [
      "Reduced fuel costs due to remote work",
      "Public transport usage increased"
    ]
  }
]
```

#### Get Spending Categories
**GET** `/financial-analysis/spending-patterns/categories`

Retrieves available spending categories.

**Response:**
```json
[
  {
    "value": "FOOD_AND_DINING",
    "label": "Food & Dining",
    "icon": "utensils"
  },
  {
    "value": "TRANSPORTATION",
    "label": "Transportation", 
    "icon": "car"
  },
  {
    "value": "ENTERTAINMENT",
    "label": "Entertainment",
    "icon": "film"
  },
  {
    "value": "SHOPPING",
    "label": "Shopping",
    "icon": "shopping-bag"
  },
  {
    "value": "UTILITIES",
    "label": "Utilities",
    "icon": "bolt"
  },
  {
    "value": "HEALTHCARE",
    "label": "Healthcare",
    "icon": "heartbeat"
  },
  {
    "value": "INSURANCE",
    "label": "Insurance",
    "icon": "shield-alt"
  },
  {
    "value": "EDUCATION",
    "label": "Education",
    "icon": "graduation-cap"
  },
  {
    "value": "TRAVEL",
    "label": "Travel",
    "icon": "plane"
  },
  {
    "value": "OTHER",
    "label": "Other",
    "icon": "ellipsis-h"
  }
]
```

### 3. Bill Reminders

#### Get Bill Reminders
**GET** `/financial-analysis/bill-reminders`

Retrieves all bill reminders for the authenticated user.

**Response:**
```json
[
  {
    "id": "1",
    "userId": "1",
    "billName": "Electricity Bill",
    "amount": 85.50,
    "dueDate": "2024-02-15T00:00:00.000Z",
    "category": "UTILITIES",
    "priority": "HIGH",
    "recurrence": "MONTHLY",
    "status": "PENDING",
    "isRecurring": true,
    "nextDueDate": "2024-03-15T00:00:00.000Z",
    "paymentSuggestions": [
      {
        "method": "AUTO_PAY",
        "description": "Set up automatic payment",
        "benefits": ["Never miss a payment", "Avoid late fees"],
        "setupTime": "5 minutes"
      },
      {
        "method": "EARLY_PAYMENT",
        "description": "Pay 5 days early",
        "benefits": ["Peace of mind", "Buffer for processing time"],
        "setupTime": "2 minutes"
      }
    ]
  }
]
```

#### Create Bill Reminder
**POST** `/financial-analysis/bill-reminders`

Creates a new bill reminder.

**Request Body:**
```json
{
  "billName": "Internet Service",
  "amount": 65.00,
  "dueDate": "2024-02-20T00:00:00.000Z",
  "category": "UTILITIES",
  "priority": "MEDIUM",
  "recurrence": "MONTHLY",
  "isRecurring": true
}
```

**Required Fields:**
- `billName`: Name of the bill
- `amount`: Bill amount (number)
- `dueDate`: Due date (ISO date string)
- `category`: Bill category
- `priority`: Priority level

**Response:** Returns the created bill reminder object.

#### Update Bill Reminder
**PUT** `/financial-analysis/bill-reminders/:id`

Updates an existing bill reminder.

**Path Parameters:**
- `id`: Bill reminder ID

**Request Body:** Same as create, but all fields are optional.

**Response:** Returns the updated bill reminder object.

#### Delete Bill Reminder
**DELETE** `/financial-analysis/bill-reminders/:id`

Deletes a bill reminder.

**Path Parameters:**
- `id`: Bill reminder ID

**Response:**
```json
{
  "message": "Bill reminder deleted successfully"
}
```

#### Get Bill Categories
**GET** `/financial-analysis/bill-reminders/categories`

Retrieves available bill categories.

**Response:**
```json
[
  {
    "value": "UTILITIES",
    "label": "Utilities",
    "icon": "bolt"
  },
  {
    "value": "INSURANCE",
    "label": "Insurance",
    "icon": "shield-alt"
  },
  {
    "value": "RENT",
    "label": "Rent/Mortgage",
    "icon": "home"
  },
  {
    "value": "CREDIT_CARD",
    "label": "Credit Card",
    "icon": "credit-card"
  },
  {
    "value": "LOAN",
    "label": "Loan Payment",
    "icon": "money-bill-wave"
  },
  {
    "value": "SUBSCRIPTION",
    "label": "Subscription",
    "icon": "sync"
  },
  {
    "value": "MEDICAL",
    "label": "Medical",
    "icon": "stethoscope"
  },
  {
    "value": "OTHER",
    "label": "Other",
    "icon": "ellipsis-h"
  }
]
```

#### Get Bill Priorities
**GET** `/financial-analysis/bill-reminders/priorities`

Retrieves available priority levels.

**Response:**
```json
[
  {
    "value": "LOW",
    "label": "Low",
    "color": "success"
  },
  {
    "value": "MEDIUM",
    "label": "Medium",
    "color": "warning"
  },
  {
    "value": "HIGH",
    "label": "High",
    "color": "danger"
  },
  {
    "value": "CRITICAL",
    "label": "Critical",
    "color": "dark"
  }
]
```

### 4. Financial Insights

#### Get Financial Insights
**GET** `/financial-analysis/insights`

Retrieves financial insights for the authenticated user.

**Response:**
```json
[
  {
    "id": "1",
    "userId": "1",
    "type": "SPENDING_ALERT",
    "title": "High Entertainment Spending",
    "description": "Your entertainment spending is 27% higher than last month",
    "severity": "WARNING",
    "category": "ENTERTAINMENT",
    "actionable": true,
    "actionItems": [
      "Review streaming subscriptions",
      "Set entertainment budget"
    ],
    "createdAt": "2024-01-15T00:00:00.000Z"
  },
  {
    "id": "2",
    "userId": "1",
    "type": "SAVINGS_OPPORTUNITY",
    "title": "Savings Potential Identified",
    "description": "You could save $200/month by optimizing your utility bills",
    "severity": "INFO",
    "category": "UTILITIES",
    "actionable": true,
    "actionItems": [
      "Compare utility providers",
      "Implement energy-saving measures"
    ],
    "createdAt": "2024-01-14T00:00:00.000Z"
  }
]
```

#### Get Insight Types
**GET** `/financial-analysis/insights/types`

Retrieves available insight types.

**Response:**
```json
[
  {
    "value": "SPENDING_ALERT",
    "label": "Spending Alert",
    "icon": "exclamation-triangle"
  },
  {
    "value": "SAVINGS_OPPORTUNITY",
    "label": "Savings Opportunity",
    "icon": "piggy-bank"
  },
  {
    "value": "BILL_REMINDER",
    "label": "Bill Reminder",
    "icon": "calendar-alt"
  },
  {
    "value": "BUDGET_ALERT",
    "label": "Budget Alert",
    "icon": "chart-pie"
  },
  {
    "value": "INVESTMENT_OPPORTUNITY",
    "label": "Investment Opportunity",
    "icon": "chart-line"
  }
]
```

### 5. Dashboard Summary

#### Get Dashboard Summary
**GET** `/financial-analysis/dashboard-summary`

Retrieves a summary of financial analysis data for the dashboard.

**Response:**
```json
{
  "totalBills": 3,
  "upcomingBills": 1,
  "totalInsights": 3,
  "unreadInsights": 2,
  "spendingTrends": [
    {
      "category": "FOOD_AND_DINING",
      "trend": "INCREASING",
      "percentageChange": 18.4
    },
    {
      "category": "TRANSPORTATION",
      "trend": "DECREASING",
      "percentageChange": -8.6
    }
  ],
  "recentInsights": [
    {
      "id": "1",
      "title": "High Entertainment Spending",
      "severity": "WARNING",
      "createdAt": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

## Error Responses

All endpoints return consistent error responses:

**400 Bad Request:**
```json
{
  "message": "Missing required fields"
}
```

**401 Unauthorized:**
```json
{
  "message": "Access token required"
}
```

**403 Forbidden:**
```json
{
  "message": "Invalid or expired token"
}
```

**404 Not Found:**
```json
{
  "message": "Bill reminder not found"
}
```

**500 Internal Server Error:**
```json
{
  "message": "Failed to fetch cash flow forecast",
  "error": "Error details"
}
```

## Usage Examples

### JavaScript/Node.js
```javascript
const axios = require('axios');

const API_BASE = 'http://localhost:8080/api';
const token = 'your-jwt-token';

// Get cash flow forecast
const getCashFlowForecast = async () => {
  try {
    const response = await axios.get(`${API_BASE}/financial-analysis/cash-flow-forecast?period=3_MONTHS`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};

// Create bill reminder
const createBillReminder = async () => {
  try {
    const response = await axios.post(`${API_BASE}/financial-analysis/bill-reminders`, {
      billName: 'Internet Service',
      amount: 65.00,
      dueDate: '2024-02-20T00:00:00.000Z',
      category: 'UTILITIES',
      priority: 'MEDIUM',
      recurrence: 'MONTHLY',
      isRecurring: true
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};
```

### cURL
```bash
# Get cash flow forecast
curl -X GET "http://localhost:8080/api/financial-analysis/cash-flow-forecast?period=3_MONTHS" \
  -H "Authorization: Bearer your-jwt-token"

# Create bill reminder
curl -X POST "http://localhost:8080/api/financial-analysis/bill-reminders" \
  -H "Authorization: Bearer your-jwt-token" \
  -H "Content-Type: application/json" \
  -d '{
    "billName": "Internet Service",
    "amount": 65.00,
    "dueDate": "2024-02-20T00:00:00.000Z",
    "category": "UTILITIES",
    "priority": "MEDIUM",
    "recurrence": "MONTHLY",
    "isRecurring": true
  }'
```

## Data Models

### Cash Flow Forecast
- `id`: Unique identifier
- `userId`: User ID
- `period`: Forecast period (1_MONTH, 3_MONTHS, 6_MONTHS, 12_MONTHS)
- `forecastDate`: Date when forecast was generated
- `projectedIncome`: Projected income amount
- `projectedExpenses`: Projected expenses amount
- `projectedSavings`: Calculated savings (income - expenses)
- `confidence`: Confidence level (0-100)
- `factors`: Array of factors affecting the forecast

### Bill Reminder
- `id`: Unique identifier
- `userId`: User ID
- `billName`: Name of the bill
- `amount`: Bill amount
- `dueDate`: Due date
- `category`: Bill category
- `priority`: Priority level (LOW, MEDIUM, HIGH, CRITICAL)
- `recurrence`: Recurrence frequency (MONTHLY, QUARTERLY, YEARLY)
- `status`: Current status (PENDING, PAID, OVERDUE)
- `isRecurring`: Whether the bill is recurring
- `nextDueDate`: Next due date for recurring bills
- `paymentSuggestions`: Array of payment suggestions

### Financial Insight
- `id`: Unique identifier
- `userId`: User ID
- `type`: Insight type
- `title`: Insight title
- `description`: Detailed description
- `severity`: Severity level (INFO, WARNING, HIGH, CRITICAL)
- `category`: Related category
- `actionable`: Whether the insight is actionable
- `actionItems`: Array of suggested actions
- `createdAt`: Creation timestamp

## Notes

1. **Authentication**: All endpoints require a valid JWT token in the Authorization header.
2. **Data Persistence**: This is a mock server - data is stored in memory and will be reset when the server restarts.
3. **Error Handling**: All endpoints include proper error handling and return appropriate HTTP status codes.
4. **Validation**: Input validation is performed on all POST/PUT requests.
5. **User Isolation**: All data is filtered by user ID to ensure data privacy.

## Getting Started

1. Start the server:
   ```bash
   cd mock-server
   npm install
   node server.js
   ```

2. Login to get a JWT token:
   ```bash
   curl -X POST "http://localhost:8080/api/auth/login" \
     -H "Content-Type: application/json" \
     -d '{"username": "demo", "password": "password"}'
   ```

3. Use the returned token in subsequent API calls.
