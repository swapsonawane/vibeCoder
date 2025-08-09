import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';
import { TransferService } from './transfer.service';
import { BillPaymentService } from './bill-payment.service';
import { PdfStatementService, StatementOptions } from './pdf-statement.service';

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  isFromUser: boolean;
  type: 'text' | 'quick-reply' | 'card' | 'transaction' | 'statement';
  quickReplies?: string[];
  cardData?: any;
  intent?: string;
}

export interface ChatIntent {
  intent: string;
  confidence: number;
  entities?: { [key: string]: any };
}

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  private isTypingSubject = new BehaviorSubject<boolean>(false);
  private chatSessionId = this.generateSessionId();

  public messages$ = this.messagesSubject.asObservable();
  public isTyping$ = this.isTypingSubject.asObservable();

  // Banking-specific intents and responses
  private bankingIntents = {
    'greeting': {
      patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'start'],
      responses: [
        '🧞‍♂️ Hello! I\'m BankGenie, your magical banking assistant. What banking wish can I grant today?',
        '✨ Hi there! BankGenie at your service! Ready to make your banking dreams come true?',
        '🌟 Welcome! I\'m BankGenie, here to work some banking magic for you. What can I help with?'
      ],
      quickReplies: ['Check Balance', 'Recent Transactions', 'Transfer Money', 'Pay Bills']
    },
    'balance_inquiry': {
      patterns: ['balance', 'how much', 'account balance', 'check balance', 'money'],
      responses: ['✨ Abracadabra! Let me reveal your account treasures...', '🔮 Gazing into your financial crystal ball...', '💰 Your wish is my command! Summoning your account balances...'],
      requiresAuth: true
    },
    'transaction_history': {
      patterns: ['transaction history', 'recent transactions', 'transaction statement', 'spending history', 'payment history'],
      responses: ['📜 Unrolling the magical scroll of your recent transactions...', '🔍 Peering into your financial timeline...', '⏰ Time magic activated! Here\'s your transaction history...'],
      requiresAuth: true
    },
    'transfer_money': {
      patterns: ['transfer', 'send money', 'move money', 'pay someone'],
      responses: ['💫 Money teleportation magic! Which account shall we transfer from?', '🪄 Ready to cast a money transfer spell! Choose your source account...', '✨ Your transfer wish is my command! Let\'s move some magical money...'],
      requiresAuth: true,
      quickReplies: ['Between My Accounts', 'To Another Person', 'External Transfer']
    },
    'bill_payment': {
      patterns: ['pay bill', 'bills', 'payments', 'utilities'],
      responses: ['🧾 Summoning your bill payment portal! Let me show you what needs attention...', '💳 Bill payment magic in progress! Here are your pending bills...', '⚡ Zapping away those bills! Let\'s see what\'s due...'],
      requiresAuth: true
    },
    'help': {
      patterns: ['help', 'what can you do', 'commands', 'assist'],
      responses: ['🧞‍♂️ BankGenie at your service! I can grant these banking wishes: ✨ Account balances ✨ Transaction history ✨ Money transfers ✨ Bill payments ✨ Digital wallet ✨ QR payments ✨ Crypto portfolio ✨ Loyalty rewards ✨ Social payments ✨ Contactless magic ✨ Download statements ✨ Tax documents and much more!'],
      quickReplies: ['Check Balance', 'Download Statement', 'Digital Wallet', 'QR Payments']
    },
    'account_info': {
      patterns: ['account', 'account info', 'my accounts', 'account details'],
      responses: ['🏦 Opening the vault of account wisdom! Here\'s your complete account overview...', '📋 Your account secrets revealed! Let me show you everything...', '🔐 Unlocking your account treasury! Here are all the details...'],
      requiresAuth: true
    },
    'digital_wallet': {
      patterns: ['digital wallet', 'wallet', 'mobile wallet', 'e-wallet', 'digital money'],
      responses: ['📱 Summoning your digital wallet portal! Here\'s your mobile money magic...', '💳 Opening your digital treasure chest! Your e-wallet awaits...', '🎆 Digital wallet magic activated! Here are all your mobile payment options...'],
      requiresAuth: true,
      quickReplies: ['Add Money', 'Send Money', 'QR Payment', 'Transaction History']
    },
    'qr_payments': {
      patterns: ['qr', 'qr code', 'qr payment', 'scan', 'quick response', 'qr money'],
      responses: ['📱 QR Magic activated! Ready to scan or generate payment codes...', '🔲 Conjuring QR payment portal! Your instant payment magic...', '⚡ QR code wizardry in progress! Scan or create payment codes...'],
      requiresAuth: true,
      quickReplies: ['Generate QR', 'Scan QR', 'QR History']
    },
    'cryptocurrency': {
      patterns: ['crypto', 'bitcoin', 'ethereum', 'cryptocurrency', 'crypto wallet', 'digital currency'],
      responses: ['₿ Crypto crystal ball activated! Peering into your digital currency realm...', '🚀 Blockchain magic engaged! Here\'s your cryptocurrency overview...', '💎 Digital gold vault unlocked! Your crypto treasures revealed...'],
      requiresAuth: true,
      quickReplies: ['Portfolio', 'Market Prices', 'Buy Crypto', 'Crypto News']
    },
    'loyalty_points': {
      patterns: ['loyalty', 'points', 'rewards', 'cashback', 'loyalty program', 'reward points'],
      responses: ['🌟 Loyalty magic sparkles! Your reward treasures await...', '🎁 Points paradise opened! Here are all your magical rewards...', '✨ Reward spell activated! Your loyalty treasures revealed...'],
      requiresAuth: true,
      quickReplies: ['View Points', 'Redeem Rewards', 'Earning History', 'Special Offers']
    },
    'social_payments': {
      patterns: ['social', 'request money', 'social media', 'facebook pay', 'instagram pay', 'social transfer'],
      responses: ['📲 Social payment magic! Connect with friends for money transfers...', '👥 Social money spells activated! Request or send via social media...', '🌐 Social banking portal opened! Your friend-to-friend payment magic...'],
      requiresAuth: true,
      quickReplies: ['Request Money', 'Social Send', 'Split Bill', 'Contact Friends']
    },
    'contactless_payments': {
      patterns: ['contactless', 'nfc', 'tap to pay', 'touchless', 'proximity payment', 'near field'],
      responses: ['📡 Contactless magic waves activated! Tap-to-pay powers engaged...', '🔗 NFC spells conjured! Your touchless payment magic ready...', '⚡ Proximity payment portal opened! Wave your device to pay...'],
      requiresAuth: true,
      quickReplies: ['Enable NFC', 'Payment Limits', 'Transaction History', 'Security Settings']
    },
    'account_statement': {
      patterns: ['account statement', 'statement', 'bank statement', 'monthly statement', 'account summary', 'download statement', 'get statement', 'statement download'],
      responses: ['📄 Summoning your account statement scroll! Let me conjure your financial records...', '📋 Magical statement generation in progress! Your account details are being assembled...', '🧾 Abracadabra! Your account statement is materializing...'],
      requiresAuth: true,
      quickReplies: ['This Month', 'Last Month', 'Last 3 Months', 'Custom Period']
    },
    'transaction_report': {
      patterns: ['transaction report', 'transaction statement', 'spending report', 'expense report', 'transaction history', 'recent transactions', 'spending history'],
      responses: ['📊 Conjuring your transaction magic report! All your spending spells revealed...', '💳 Transaction history scroll unrolling! Your financial journey awaits...', '📈 Magical transaction analysis in progress! Every penny accounted for...'],
      requiresAuth: true,
      quickReplies: ['Last 30 Days', 'Last 90 Days', 'This Year', 'Custom Range']
    },
    'tax_statement': {
      patterns: ['tax statement', 'tax report', 'tax document', 'annual tax', 'tax summary', 'tax papers', 'tax docs', 'tax forms'],
      responses: ['🧾 Tax magic activated! Summoning your annual tax documents...', '📋 Tax scroll materializing! All your tax-related treasures compiled...', '💰 Tax statement spell casting! Your financial tax data organized...'],
      requiresAuth: true,
      quickReplies: ['Current Year', 'Previous Year', 'Last 2 Years', 'Email Statement']
    },
    'loan_statement': {
      patterns: ['loan statement', 'emi statement', 'loan report', 'mortgage statement', 'loan details', 'emi details', 'loan summary'],
      responses: ['🏠 Loan magic scroll appearing! Your EMI journey documented...', '💸 Loan statement spell activated! Every payment magically tracked...', '📊 Mortgage magic report! Your loan adventure summarized...'],
      requiresAuth: true,
      quickReplies: ['EMI History', 'Outstanding Balance', 'Payment Schedule', 'Loan Summary']
    },
    'investment_statement': {
      patterns: ['investment statement', 'portfolio statement', 'investment report', 'portfolio summary', 'investment summary', 'portfolio report'],
      responses: ['📈 Investment magic portfolio materializing! Your wealth spells revealed...', '💎 Portfolio statement conjured! Your investment treasures detailed...', '🚀 Investment report magic! Your financial growth journey mapped...'],
      requiresAuth: true,
      quickReplies: ['Portfolio Summary', 'Performance Report', 'Dividend History', 'Capital Gains']
    },
    'download_statement': {
      patterns: ['download statement', 'get statement', 'statement pdf', 'download report', 'download account statement', 'download transaction report', 'download tax statement', 'statement download'],
      responses: ['⬇️ Download magic activated! Your statement will appear in your device...', '📥 Statement download spell cast! Materializing your document...', '💾 Digital statement magic! Your PDF is being conjured...'],
      requiresAuth: true,
      quickReplies: ['Account Statement', 'Transaction Report', 'Tax Document', 'Investment Report']
    }
  };

  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private transferService: TransferService,
    private billPaymentService: BillPaymentService,
    private pdfStatementService: PdfStatementService
  ) {
    this.initializeChat();
  }

  private initializeChat(): void {
    const welcomeMessage: ChatMessage = {
      id: this.generateMessageId(),
      content: '🧞‍♂️ Welcome! I\'m BankGenie, your magical banking assistant! I can grant your wishes for account info, transfers, bill payments, and much more. What banking magic can I help you with today?',
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      quickReplies: ['Check Balance', 'Recent Transactions', 'Transfer Money', 'Pay Bills', 'Help'],
      intent: 'greeting'
    };
    
    this.messagesSubject.next([welcomeMessage]);
  }

  sendMessage(content: string): Observable<ChatMessage> {
    const userMessage: ChatMessage = {
      id: this.generateMessageId(),
      content: content,
      timestamp: new Date(),
      isFromUser: true,
      type: 'text'
    };

    // Add user message to chat
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, userMessage]);

    // Show typing indicator
    this.isTypingSubject.next(true);

    // Process message and generate response
    return this.processMessage(content).pipe(
      delay(1500) // Simulate AI thinking time
    );
  }

  private processMessage(content: string): Observable<ChatMessage> {
    const intent = this.detectIntent(content);
    const response = this.generateResponse(intent, content);

    return of(response);
  }

  private detectIntent(message: string): ChatIntent {
    const lowerMessage = message.toLowerCase();
    let bestMatch = { intent: 'unknown', confidence: 0.1, entities: {} };
    
    // First, check for exact phrase matches (highest priority)
    for (const [intentName, intentData] of Object.entries(this.bankingIntents)) {
      for (const pattern of intentData.patterns) {
        if (lowerMessage.includes(pattern)) {
          return {
            intent: intentName,
            confidence: 0.95,
            entities: this.extractEntities(message, intentName)
          };
        }
      }
    }
    
    // Second, check for key word combinations (medium priority)
    for (const [intentName, intentData] of Object.entries(this.bankingIntents)) {
      for (const pattern of intentData.patterns) {
        const patternWords = pattern.split(' ');
        
        // Skip single word patterns in this phase to avoid false matches
        if (patternWords.length === 1) continue;
        
        const messageWords = lowerMessage.split(' ');
        const matchedWords = patternWords.filter(word => 
          messageWords.some(messageWord => 
            messageWord === word || 
            (word.length > 3 && messageWord.includes(word)) ||
            (messageWord.length > 3 && word.includes(messageWord))
          )
        );
        
        const matchScore = matchedWords.length / patternWords.length;
        
        // Require at least 70% match for multi-word patterns
        if (matchScore >= 0.7 && matchScore > bestMatch.confidence) {
          bestMatch = {
            intent: intentName,
            confidence: matchScore * 0.8, // Reduce confidence for partial matches
            entities: this.extractEntities(message, intentName)
          };
        }
      }
    }

    // Third, specific keyword-based detection (lowest priority, most specific)
    if (bestMatch.confidence < 0.6) {
      // Statement-related requests (must be very specific)
      if ((lowerMessage.includes('statement') || lowerMessage.includes('download')) && 
          (lowerMessage.includes('account') || lowerMessage.includes('bank'))) {
        return { intent: 'account_statement', confidence: 0.75, entities: this.extractEntities(message, 'account_statement') };
      }
      
      if ((lowerMessage.includes('statement') || lowerMessage.includes('report')) && 
          lowerMessage.includes('transaction')) {
        return { intent: 'transaction_report', confidence: 0.75, entities: this.extractEntities(message, 'transaction_report') };
      }
      
      if (lowerMessage.includes('statement') && lowerMessage.includes('tax')) {
        return { intent: 'tax_statement', confidence: 0.75, entities: this.extractEntities(message, 'tax_statement') };
      }
      
      // Balance inquiries
      if ((lowerMessage.includes('balance') || lowerMessage.includes('money')) && 
          (lowerMessage.includes('check') || lowerMessage.includes('show') || lowerMessage.includes('how much'))) {
        return { intent: 'balance_inquiry', confidence: 0.75, entities: this.extractEntities(message, 'balance_inquiry') };
      }
      
      // Transaction history (be more specific)
      if ((lowerMessage.includes('transaction') && lowerMessage.includes('history')) ||
          (lowerMessage.includes('recent') && lowerMessage.includes('transaction'))) {
        return { intent: 'transaction_history', confidence: 0.7, entities: this.extractEntities(message, 'transaction_history') };
      }
      
      // Generic statement download (only if explicitly mentioned)
      if ((lowerMessage.includes('download') && lowerMessage.includes('statement')) ||
          (lowerMessage.includes('get') && lowerMessage.includes('statement'))) {
        return { intent: 'download_statement', confidence: 0.65, entities: this.extractEntities(message, 'download_statement') };
      }
    }

    // Return best match only if confidence is reasonable
    return bestMatch.confidence > 0.6 ? bestMatch : {
      intent: 'unknown',
      confidence: 0.1
    };
  }

  private extractEntities(message: string, intent: string): { [key: string]: any } {
    const entities: { [key: string]: any } = {};
    const lowerMessage = message.toLowerCase();

    // Extract amounts
    const amountMatch = message.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/);
    if (amountMatch) {
      entities['amount'] = parseFloat(amountMatch[1].replace(/,/g, ''));
    }

    // Extract account types
    if (lowerMessage.includes('saving')) entities['accountType'] = 'SAVINGS';
    if (lowerMessage.includes('checking')) entities['accountType'] = 'CHECKING';

    return entities;
  }

  private generateResponse(intent: ChatIntent, originalMessage: string): ChatMessage {
    const intentData = this.bankingIntents[intent.intent as keyof typeof this.bankingIntents];
    let response: ChatMessage;

    if (!intentData) {
      response = this.generateUnknownResponse(originalMessage);
    } else if ((intentData as any).requiresAuth && !this.authService.getToken()) {
      response = this.generateAuthRequiredResponse();
    } else {
      response = this.generateIntentResponse(intent, intentData);
    }

    // Add response to chat and hide typing indicator
    setTimeout(() => {
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, response]);
      this.isTypingSubject.next(false);
    }, 100);

    return response;
  }

  private generateIntentResponse(intent: ChatIntent, intentData: any): ChatMessage {
    const randomResponse = intentData.responses[Math.floor(Math.random() * intentData.responses.length)];
    
    const response: ChatMessage = {
      id: this.generateMessageId(),
      content: randomResponse,
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      intent: intent.intent,
      quickReplies: intentData.quickReplies
    };

    // Add special handling for specific intents
    switch (intent.intent) {
      case 'balance_inquiry':
        response.type = 'card';
        response.cardData = this.generateBalanceCard();
        break;
      case 'transaction_history':
        response.type = 'card';
        response.cardData = this.generateTransactionCard();
        break;
      case 'account_info':
        response.type = 'card';
        response.cardData = this.generateAccountCard();
        break;
      case 'digital_wallet':
        response.type = 'card';
        response.cardData = this.generateDigitalWalletCard();
        break;
      case 'qr_payments':
        response.type = 'card';
        response.cardData = this.generateQRPaymentCard();
        break;
      case 'cryptocurrency':
        response.type = 'card';
        response.cardData = this.generateCryptoWalletCard();
        break;
      case 'loyalty_points':
        response.type = 'card';
        response.cardData = this.generateLoyaltyPointsCard();
        break;
      case 'social_payments':
        response.type = 'card';
        response.cardData = this.generateSocialPaymentsCard();
        break;
      case 'contactless_payments':
        response.type = 'card';
        response.cardData = this.generateContactlessPaymentsCard();
        break;
      case 'account_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('account');
        break;
      case 'transaction_report':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('transaction');
        break;
      case 'tax_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('tax');
        break;
      case 'loan_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('loan');
        break;
      case 'investment_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('investment');
        break;
      case 'download_statement':
        response.type = 'card';
        response.cardData = this.generateStatementOptionsCard();
        break;
    }

    return response;
  }

  private generateBalanceCard(): any {
    // Mock account data - in real app, this would come from AccountService
    return {
      type: 'balance',
      accounts: [
        { name: 'Savings Account', number: '****4567', balance: 15750.50 },
        { name: 'Checking Account', number: '****4568', balance: 8240.25 }
      ],
      totalBalance: 23990.75
    };
  }

  private generateTransactionCard(): any {
    return {
      type: 'transactions',
      transactions: [
        { description: 'Coffee Shop', amount: -4.50, date: new Date(), category: 'Food & Dining' },
        { description: 'Salary Deposit', amount: 3500.00, date: new Date(Date.now() - 86400000), category: 'Income' },
        { description: 'Electric Bill', amount: -85.50, date: new Date(Date.now() - 172800000), category: 'Utilities' }
      ]
    };
  }

  private generateAccountCard(): any {
    return {
      type: 'accounts',
      accounts: [
        { 
          type: 'Savings', 
          number: 'ACC1001234567', 
          balance: 15750.50, 
          status: 'Active',
          openDate: '2020-01-15'
        },
        { 
          type: 'Checking', 
          number: 'ACC1001234568', 
          balance: 8240.25, 
          status: 'Active',
          openDate: '2020-01-15'
        }
      ]
    };
  }

  private generateUnknownResponse(message: string): ChatMessage {
    const responses = [
      '🤔 Hmm, that wish is beyond my magical powers! Could you try rephrasing it?',
      '🧞‍♂️ My genie magic didn\'t catch that! Can you ask about accounts, transfers, or bill payments?',
      '✨ I\'m still learning new spells! Try asking about balances, transactions, or money transfers.',
      '🔮 The crystal ball is a bit cloudy on that one! Please ask about banking topics.',
    ];

    return {
      id: this.generateMessageId(),
      content: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      quickReplies: ['Check Balance', 'Transfer Money', 'Pay Bills', 'Help'],
      intent: 'unknown'
    };
  }

  private generateAuthRequiredResponse(): ChatMessage {
    return {
      id: this.generateMessageId(),
      content: '🔐 Oops! I need you to be logged into your magical banking realm first. Please sign in to unlock my full genie powers!',
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      intent: 'auth_required'
    };
  }

  clearChat(): void {
    this.messagesSubject.next([]);
    this.initializeChat();
  }

  private generateMessageId(): string {
    return 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  getMessages(): ChatMessage[] {
    return this.messagesSubject.value;
  }

  // Modern Banking Features Card Generators
  private generateDigitalWalletCard(): any {
    return {
      type: 'digital_wallet',
      walletBalance: 1250.75,
      linkedCards: [
        { type: 'Visa', last4: '4532', isDefault: true },
        { type: 'Mastercard', last4: '8901', isDefault: false }
      ],
      recentTransactions: [
        { merchant: 'Starbucks Coffee', amount: -5.49, date: new Date(), method: 'Tap to Pay' },
        { merchant: 'Uber Ride', amount: -12.30, date: new Date(Date.now() - 3600000), method: 'Digital Wallet' },
        { merchant: 'Amazon Purchase', amount: -89.99, date: new Date(Date.now() - 7200000), method: 'Online Payment' }
      ],
      features: ['Tap to Pay', 'QR Payments', 'P2P Transfers', 'Bill Splitting']
    };
  }

  private generateQRPaymentCard(): any {
    return {
      type: 'qr_payments',
      qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGcgZmlsbD0iIzAwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48L2c+PC9zdmc+',
      paymentAmount: 0,
      merchantName: 'QuickPay QR',
      recentQRPayments: [
        { merchant: 'Local Coffee Shop', amount: 8.50, date: new Date(), success: true },
        { merchant: 'Street Food Vendor', amount: 15.75, date: new Date(Date.now() - 86400000), success: true },
        { merchant: 'Parking Meter', amount: 2.00, date: new Date(Date.now() - 172800000), success: true }
      ],
      features: ['Instant QR Generation', 'Scan & Pay', 'Merchant QR', 'P2P QR Codes']
    };
  }

  private generateCryptoWalletCard(): any {
    return {
      type: 'crypto_wallet',
      totalValue: 4567.89,
      currencies: [
        { name: 'Bitcoin', symbol: 'BTC', amount: 0.0789, value: 2845.32, change: +5.67 },
        { name: 'Ethereum', symbol: 'ETH', amount: 1.2456, value: 1432.87, change: -2.34 },
        { name: 'Cardano', symbol: 'ADA', amount: 1250.00, value: 289.70, change: +12.45 }
      ],
      features: ['View Only', 'Price Tracking', 'Portfolio Analytics', 'Market News']
    };
  }

  private generateLoyaltyPointsCard(): any {
    return {
      type: 'loyalty_points',
      totalPoints: 15750,
      cashValue: 157.50,
      tier: 'Gold Member',
      pointsToNextTier: 4250,
      recentEarnings: [
        { source: 'Credit Card Purchase', points: 125, date: new Date() },
        { source: 'Monthly Bonus', points: 500, date: new Date(Date.now() - 86400000) },
        { source: 'Referral Bonus', points: 1000, date: new Date(Date.now() - 172800000) }
      ],
      availableRewards: [
        { name: '$10 Cashback', cost: 1000, category: 'Cash' },
        { name: 'Coffee Voucher', cost: 500, category: 'Food' },
        { name: 'Movie Ticket', cost: 1500, category: 'Entertainment' }
      ]
    };
  }

  private generateSocialPaymentsCard(): any {
    return {
      type: 'social_payments',
      connectedPlatforms: ['Facebook', 'Instagram', 'WhatsApp', 'Telegram'],
      recentRequests: [
        { friend: 'John Smith', amount: 25.00, reason: 'Dinner split', status: 'pending' },
        { friend: 'Sarah Wilson', amount: 15.50, reason: 'Movie tickets', status: 'completed' },
        { friend: 'Mike Johnson', amount: 40.00, reason: 'Gas money', status: 'completed' }
      ],
      quickActions: ['Request Money', 'Send Money', 'Split Bill', 'Group Payment'],
      socialFeatures: ['Contact Integration', 'Payment Reminders', 'Social Feed', 'Group Chats']
    };
  }

  private generateContactlessPaymentsCard(): any {
    return {
      type: 'contactless_payments',
      nfcEnabled: true,
      dailyLimit: 100.00,
      dailyUsed: 23.45,
      monthlyTransactions: 47,
      recentContactless: [
        { merchant: 'Metro Transit', amount: 2.75, date: new Date(), method: 'NFC' },
        { merchant: 'Grocery Store', amount: 45.67, date: new Date(Date.now() - 3600000), method: 'Tap Card' },
        { merchant: 'Gas Station', amount: 15.00, date: new Date(Date.now() - 7200000), method: 'Mobile NFC' }
      ],
      supportedMethods: ['NFC Phone', 'Contactless Card', 'Smartwatch', 'Wearables']
    };
  }

  private generateStatementDownloadCard(statementType: string): any {
    return {
      type: 'statement_download',
      statementType: statementType,
      title: this.getStatementTitle(statementType),
      description: this.getStatementDescription(statementType),
      icon: this.getStatementIcon(statementType),
      downloadOptions: [
        { 
          period: 'This Month',
          filename: `${statementType}_statement_${new Date().getMonth() + 1}_${new Date().getFullYear()}`,
          size: '245 KB'
        },
        { 
          period: 'Last Month',
          filename: `${statementType}_statement_${new Date().getMonth()}_${new Date().getFullYear()}`,
          size: '189 KB'
        },
        { 
          period: 'Last 3 Months',
          filename: `${statementType}_statement_3months_${new Date().getFullYear()}`,
          size: '567 KB'
        },
        { 
          period: 'Custom Period',
          filename: `${statementType}_statement_custom`,
          size: 'Variable'
        }
      ],
      quickActions: [
        'Download PDF',
        'Email Statement',
        'View Online',
        'Schedule Regular Delivery'
      ]
    };
  }

  private generateStatementOptionsCard(): any {
    return {
      type: 'statement_options',
      title: '📋 Statement Magic Portal',
      description: 'Choose your preferred statement type to conjure',
      statementTypes: [
        {
          type: 'account',
          title: 'Account Statement',
          description: 'Complete account summary with all transactions',
          icon: '🏦',
          color: '#4CAF50'
        },
        {
          type: 'transaction',
          title: 'Transaction Report',
          description: 'Detailed spending and income analysis',
          icon: '📊',
          color: '#2196F3'
        },
        {
          type: 'tax',
          title: 'Tax Statement',
          description: 'Annual tax documents and summaries',
          icon: '🧾',
          color: '#FF9800'
        },
        {
          type: 'loan',
          title: 'Loan Statement',
          description: 'EMI history and outstanding balance',
          icon: '🏠',
          color: '#9C27B0'
        },
        {
          type: 'investment',
          title: 'Investment Report',
          description: 'Portfolio performance and holdings',
          icon: '📈',
          color: '#F44336'
        },
        {
          type: 'digital_wallet',
          title: 'Digital Wallet Statement',
          description: 'Mobile wallet transactions and balance',
          icon: '📱',
          color: '#00BCD4'
        }
      ]
    };
  }

  private getStatementTitle(type: string): string {
    const titles = {
      'account': '🏦 Account Statement',
      'transaction': '📊 Transaction Report',
      'tax': '🧾 Tax Statement',
      'loan': '🏠 Loan Statement',
      'investment': '📈 Investment Report',
      'digital_wallet': '📱 Digital Wallet Statement'
    };
    return titles[type as keyof typeof titles] || '📄 Statement';
  }

  private getStatementDescription(type: string): string {
    const descriptions = {
      'account': 'Complete account summary with balance and transaction history',
      'transaction': 'Detailed analysis of all your spending and income patterns',
      'tax': 'Annual tax documents with interest and investment summaries',
      'loan': 'EMI payment history and outstanding loan balance details',
      'investment': 'Portfolio performance report with gains and holdings',
      'digital_wallet': 'Mobile wallet transactions and payment history'
    };
    return descriptions[type as keyof typeof descriptions] || 'Financial statement document';
  }

  private getStatementIcon(type: string): string {
    const icons = {
      'account': '🏦',
      'transaction': '📊',
      'tax': '🧾',
      'loan': '🏠',
      'investment': '📈',
      'digital_wallet': '📱'
    };
    return icons[type as keyof typeof icons] || '📄';
  }

  // Method to handle statement download requests
  handleStatementDownload(statementType: string, period: string): void {
    const options: StatementOptions = this.createStatementOptions(statementType, period);
    
    switch (statementType) {
      case 'account':
        this.pdfStatementService.generateAccountStatement(options).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `account-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'transaction':
        this.pdfStatementService.generateTransactionHistory(options).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `transaction-report-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'tax':
        this.pdfStatementService.generateTaxStatement(new Date().getFullYear()).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `tax-statement-${new Date().getFullYear()}`);
        });
        break;
      case 'loan':
        this.pdfStatementService.generateLoanStatement('LOAN001', options).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `loan-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'investment':
        this.pdfStatementService.generateInvestmentStatement('PORTFOLIO001', options).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `investment-report-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'digital_wallet':
        this.pdfStatementService.generateDigitalWalletStatement(options).subscribe((blob: Blob) => {
          this.pdfStatementService.downloadStatement(blob, `wallet-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
    }
  }

  private createStatementOptions(statementType: string, period: string): StatementOptions {
    const now = new Date();
    let startDate: Date;
    let endDate: Date = new Date(now);

    switch (period) {
      case 'This Month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'Last Month':
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        endDate = new Date(now.getFullYear(), now.getMonth(), 0);
        break;
      case 'Last 3 Months':
        startDate = new Date(now.getFullYear(), now.getMonth() - 3, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    }

    return {
      startDate,
      endDate,
      statementType: period === 'This Month' ? 'monthly' : 'custom',
      format: 'pdf'
    };
  }
} 