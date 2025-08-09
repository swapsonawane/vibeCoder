import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: any[] = [];
  selectedAccount: any = null;
  transactions: any[] = [];
  loading = false;
  downloadingPdf = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.loading = true;
    
    // Clear current data for visual feedback
    this.accounts = [];
    this.selectedAccount = null;
    this.transactions = [];
    
    // Add a small delay to show loading state  
    setTimeout(() => {
      // Mock data for demo
      this.accounts = [
      {
        id: '1',
        accountNumber: 'ACC1001234567',
        accountType: 'SAVINGS',
        balance: 15750.50,
        availableBalance: 15750.50,
        currency: 'USD',
        openedDate: new Date('2023-01-15')
      },
      {
        id: '2',
        accountNumber: 'ACC1001234568',
        accountType: 'CHECKING',
        balance: 8240.25,
        availableBalance: 8240.25,
        currency: 'USD',
        openedDate: new Date('2023-02-01')
      }
      ];

      this.loading = false;
      
      // Check for query parameter to auto-select account
      this.checkForAccountSelection();
    }, 500);
  }

  private checkForAccountSelection(): void {
    this.route.queryParams.subscribe(params => {
      const accountId = params['accountId'];
      if (accountId && this.accounts.length > 0) {
        const accountToSelect = this.accounts.find(account => account.id === accountId);
        if (accountToSelect) {
          this.selectAccount(accountToSelect);
          // Scroll to the selected account for better UX
          setTimeout(() => {
            const selectedElement = document.querySelector('.list-group-item.active');
            if (selectedElement) {
              selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 100);
        }
      }
    });
  }

  selectAccount(account: any): void {
    this.selectedAccount = account;
    this.loadTransactions(account.id);
  }

  loadTransactions(accountId: string): void {
    // Mock transaction data
    this.transactions = [
      {
        id: '1',
        type: 'CREDIT',
        amount: 2500.00,
        description: 'Salary Credit',
        date: new Date('2024-01-15'),
        status: 'COMPLETED',
        balance: 15750.50
      },
      {
        id: '2',
        type: 'DEBIT',
        amount: 120.00,
        description: 'Grocery Store',
        date: new Date('2024-01-14'),
        status: 'COMPLETED',
        balance: 13250.50
      },
      {
        id: '3',
        type: 'TRANSFER',
        amount: 500.00,
        description: 'Internal Transfer',
        date: new Date('2024-01-13'),
        status: 'COMPLETED',
        balance: 12750.50
      },
      {
        id: '4',
        type: 'DEBIT',
        amount: 75.25,
        description: 'Gas Station',
        date: new Date('2024-01-12'),
        status: 'COMPLETED',
        balance: 12250.50
      },
      {
        id: '5',
        type: 'CREDIT',
        amount: 1000.00,
        description: 'Bonus Payment',
        date: new Date('2024-01-10'),
        status: 'COMPLETED',
        balance: 11750.50
      }
    ];
  }

  // Direct PDF statement download functionality
  downloadStatement(): void {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }

    this.downloadingPdf = true;

    try {
      console.log('Starting PDF generation...');
      // Create PDF using jsPDF
      this.generatePDFStatement();
    } catch (error: any) {
      console.error('PDF generation failed:', error);
      alert('PDF generation failed: ' + (error?.message || error) + '. Downloading as text file instead.');
      this.downloadTextStatement();
    }
  }

  // Generate PDF statement using jsPDF
  private generatePDFStatement(): void {
    console.log('Creating jsPDF instance...');
    const account = this.selectedAccount;
    const doc = new jsPDF();
    
    console.log('jsPDF instance created successfully');
    
    // Set document properties
    doc.setProperties({
      title: 'Account Statement',
      subject: 'Banking Statement',
      author: 'NetBanking',
      creator: 'NetBanking System'
    });

    // Header
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204);
    doc.text('NETBANKING', 20, 25);
    
    doc.setFontSize(16);
    doc.text('Account Statement', 20, 35);
    
    // Line under header
    doc.setDrawColor(0, 102, 204);
    doc.line(20, 40, 190, 40);
    
    // Account Information
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    let yPos = 55;
    doc.text('Account Holder: Demo User', 20, yPos);
    yPos += 8;
    doc.text(`Account Number: ${account.accountNumber}`, 20, yPos);
    yPos += 8;
    doc.text(`Account Type: ${account.accountType}`, 20, yPos);
    yPos += 8;
    doc.text(`Statement Date: ${new Date().toLocaleDateString()}`, 20, yPos);
    yPos += 8;
    doc.text(`Current Balance: $${account.balance.toFixed(2)}`, 20, yPos);
    yPos += 8;
    doc.text(`Available Balance: $${account.availableBalance.toFixed(2)}`, 20, yPos);
    
    // Transaction table
    yPos += 20;
    
    const tableData = this.transactions.map(t => [
      t.date.toLocaleDateString(),
      t.description,
      t.type,
      `${t.type === 'DEBIT' ? '-' : '+'}$${t.amount.toFixed(2)}`,
      `$${t.balance.toFixed(2)}`
    ]);

    autoTable(doc, {
      head: [['Date', 'Description', 'Type', 'Amount', 'Balance']],
      body: tableData,
      startY: yPos,
      theme: 'grid',
      headStyles: { fillColor: [242, 242, 242], textColor: [0, 0, 0] },
      styles: { fontSize: 10 },
      columnStyles: {
        3: { halign: 'right' },
        4: { halign: 'right' }
      }
    });

    // Footer - get the finalY from the last autoTable
    const finalY = (doc as any).lastAutoTable?.finalY || yPos + 50;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This is a computer-generated statement and does not require a signature.', 20, finalY);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, finalY + 6);
    doc.text('Thank you for banking with NetBanking!', 20, finalY + 12);

    // Download the PDF
    const fileName = `NetBanking_Statement_${account.accountNumber}_${new Date().toISOString().split('T')[0]}.pdf`;
    console.log('Saving PDF with filename:', fileName);
    doc.save(fileName);
    
    console.log('PDF saved successfully');
    this.downloadingPdf = false;
    this.showSuccessMessage('PDF statement downloaded successfully!');
  }



  // Fallback text statement download
  private downloadTextStatement(): void {
    const statementData = this.generateTextStatementData();
    const blob = new Blob([statementData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `NetBanking_Statement_${this.selectedAccount.accountNumber}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    this.showSuccessMessage('Statement downloaded as text file (PDF generation unavailable)');
  }

  private showSuccessMessage(message: string): void {
    // Create a better success notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      ${message}
      <button type="button" class="btn-close" aria-label="Close"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
    
    // Manual close button
    const closeBtn = notification.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      });
    }
  }

  // Transfer money functionality
  transferMoney(): void {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }

    // Navigate to transfers page with pre-selected account
    this.router.navigate(['/transfers'], { 
      queryParams: { 
        fromAccount: this.selectedAccount.id,
        accountNumber: this.selectedAccount.accountNumber,
        accountType: this.selectedAccount.accountType
      } 
    });
  }

  // Pay bills functionality
  payBills(): void {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }

    // Navigate to bills page with pre-selected account
    this.router.navigate(['/bills'], { 
      queryParams: { 
        fromAccount: this.selectedAccount.id,
        accountNumber: this.selectedAccount.accountNumber,
        accountType: this.selectedAccount.accountType
      } 
    });
  }

  private generateTextStatementData(): string {
    const account = this.selectedAccount;
    const statement = `
NETBANKING ACCOUNT STATEMENT
============================

Account Holder: Demo User
Account Number: ${account.accountNumber}
Account Type: ${account.accountType}
Statement Date: ${new Date().toLocaleDateString()}
Currency: ${account.currency}

ACCOUNT SUMMARY
---------------
Current Balance: $${account.balance.toFixed(2)}
Available Balance: $${account.availableBalance.toFixed(2)}

TRANSACTION HISTORY
-------------------
Date          | Type     | Description           | Amount      | Balance
${this.transactions.map(t => 
  `${t.date.toLocaleDateString().padEnd(12)} | ${t.type.padEnd(8)} | ${t.description.padEnd(20)} | $${(t.type === 'DEBIT' ? '-' : '+') + t.amount.toFixed(2).padStart(8)} | $${t.balance.toFixed(2).padStart(10)}`
).join('\n')}

---
Thank you for banking with NetBanking!
Secure Online Banking Platform
Generated on: ${new Date().toLocaleString()}
`;
    return statement;
  }

  getAccountTypeIcon(type: string): string {
    switch (type) {
      case 'SAVINGS': return 'fas fa-piggy-bank';
      case 'CHECKING': return 'fas fa-credit-card';
      case 'BUSINESS': return 'fas fa-building';
      case 'JOINT': return 'fas fa-users';
      default: return 'fas fa-wallet';
    }
  }

  getTransactionIcon(type: string): string {
    switch (type) {
      case 'CREDIT': return 'fas fa-arrow-down text-success';
      case 'DEBIT': return 'fas fa-arrow-up text-danger';
      case 'TRANSFER': return 'fas fa-exchange-alt text-info';
      default: return 'fas fa-circle';
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
} 