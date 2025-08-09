import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Import jsPDF - already included in package.json
declare var jsPDF: any;

export interface StatementOptions {
  accountId?: string;
  startDate: Date;
  endDate: Date;
  statementType: 'monthly' | 'quarterly' | 'yearly' | 'custom';
  includeImages?: boolean;
  format?: 'pdf' | 'csv' | 'excel';
}

@Injectable({
  providedIn: 'root'
})
export class PdfStatementService {

  constructor() {}

  /**
   * Generate Account Statement PDF
   */
  generateAccountStatement(options: StatementOptions): Observable<Blob> {
    console.log('🧞‍♂️ Generating account statement:', options);
    return this.createPdfStatement('Account Statement', options, this.getAccountStatementData()).pipe(
      delay(2000) // Simulate processing time
    );
  }

  /**
   * Generate Transaction History PDF
   */
  generateTransactionHistory(options: StatementOptions): Observable<Blob> {
    console.log('🧞‍♂️ Generating transaction history:', options);
    return this.createPdfStatement('Transaction Report', options, this.getTransactionData()).pipe(
      delay(2000)
    );
  }

  /**
   * Generate Tax Statement PDF
   */
  generateTaxStatement(year: number): Observable<Blob> {
    console.log('🧞‍♂️ Generating tax statement for year:', year);
    const options: StatementOptions = {
      startDate: new Date(year, 0, 1),
      endDate: new Date(year, 11, 31),
      statementType: 'yearly'
    };
    return this.createPdfStatement('Tax Statement', options, this.getTaxStatementData(year)).pipe(
      delay(2000)
    );
  }

  /**
   * Generate Loan Statement PDF
   */
  generateLoanStatement(loanId: string, options: StatementOptions): Observable<Blob> {
    console.log('🧞‍♂️ Generating loan statement:', loanId, options);
    return this.createPdfStatement('Loan Statement', options, this.getLoanStatementData()).pipe(
      delay(2000)
    );
  }

  /**
   * Generate Investment Statement PDF
   */
  generateInvestmentStatement(portfolioId: string, options: StatementOptions): Observable<Blob> {
    console.log('🧞‍♂️ Generating investment statement:', portfolioId, options);
    return this.createPdfStatement('Investment Report', options, this.getInvestmentData()).pipe(
      delay(2000)
    );
  }

  /**
   * Generate Digital Wallet Statement PDF
   */
  generateDigitalWalletStatement(options: StatementOptions): Observable<Blob> {
    console.log('🧞‍♂️ Generating digital wallet statement:', options);
    return this.createPdfStatement('Digital Wallet Statement', options, this.getWalletData()).pipe(
      delay(2000)
    );
  }

  /**
   * Create PDF Statement using jsPDF
   */
  private createPdfStatement(title: string, options: StatementOptions, data: any): Observable<Blob> {
    return new Observable(observer => {
      try {
        // Check if jsPDF is available from CDN
        const jsPDF = (window as any).jspdf?.jsPDF || (window as any).jsPDF;
        
        if (jsPDF) {
          console.log('✨ Creating PDF using jsPDF...');
          const pdf = new jsPDF();
          
          // Add header
          this.addPdfHeader(pdf, title);
          
          // Add statement period
          this.addStatementPeriod(pdf, options);
          
          // Add statement content based on type
          this.addStatementContent(pdf, title, data);
          
          // Add footer
          this.addPdfFooter(pdf);
          
          // Generate blob
          const pdfBlob = pdf.output('blob');
          console.log('📄 PDF generated successfully!');
          observer.next(pdfBlob);
          observer.complete();
        } else {
          // Fallback: create a properly formatted text document
          console.warn('⚠️ jsPDF not available, creating formatted text document');
          const fallbackContent = this.createDetailedTextStatement(title, options, data);
          const blob = new Blob([fallbackContent], { type: 'text/plain' });
          observer.next(blob);
          observer.complete();
        }
      } catch (error) {
        console.error('❌ Error generating PDF:', error);
        // Create fallback document
        const fallbackContent = this.createDetailedTextStatement(title, options, data);
        const blob = new Blob([fallbackContent], { type: 'text/plain' });
        observer.next(blob);
        observer.complete();
      }
    });
  }

  private addPdfHeader(pdf: any, title: string): void {
    // BankGenie Header
    pdf.setFontSize(20);
    pdf.setTextColor(156, 39, 176); // Purple color
    pdf.text('🧞‍♂️ BankGenie', 20, 20);
    
    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    pdf.text(title, 20, 35);
    
    // Add line
    pdf.setDrawColor(156, 39, 176);
    pdf.line(20, 40, 190, 40);
  }

  private addStatementPeriod(pdf: any, options: StatementOptions): void {
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    
    const startDate = options.startDate.toLocaleDateString();
    const endDate = options.endDate.toLocaleDateString();
    
    pdf.text(`Statement Period: ${startDate} to ${endDate}`, 20, 50);
    pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, 55);
  }

  private addStatementContent(pdf: any, title: string, data: any): void {
    let yPosition = 70;
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    
    // Add content based on statement type
    if (title.includes('Account')) {
      yPosition = this.addAccountContent(pdf, data, yPosition);
    } else if (title.includes('Transaction')) {
      yPosition = this.addTransactionContent(pdf, data, yPosition);
    } else if (title.includes('Tax')) {
      yPosition = this.addTaxContent(pdf, data, yPosition);
    } else if (title.includes('Investment')) {
      yPosition = this.addInvestmentContent(pdf, data, yPosition);
    }
  }

  private addAccountContent(pdf: any, data: any, yPosition: number): number {
    pdf.text('Account Summary', 20, yPosition);
    yPosition += 10;
    
    data.accounts.forEach((account: any) => {
      pdf.text(`${account.type}: ${account.number}`, 20, yPosition);
      pdf.text(`Balance: $${account.balance.toFixed(2)}`, 120, yPosition);
      yPosition += 8;
    });
    
    yPosition += 5;
    pdf.setFontSize(14);
    pdf.text(`Total Balance: $${data.totalBalance.toFixed(2)}`, 20, yPosition);
    
    return yPosition + 15;
  }

  private addTransactionContent(pdf: any, data: any, yPosition: number): number {
    pdf.text('Recent Transactions', 20, yPosition);
    yPosition += 10;
    
    data.transactions.forEach((transaction: any) => {
      pdf.text(transaction.description, 20, yPosition);
      pdf.text(transaction.category, 90, yPosition);
      const amount = transaction.amount >= 0 ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`;
      pdf.text(amount, 150, yPosition);
      yPosition += 8;
    });
    
    return yPosition + 10;
  }

  private addTaxContent(pdf: any, data: any, yPosition: number): number {
    pdf.text('Tax Summary', 20, yPosition);
    yPosition += 10;
    
    pdf.text(`Interest Earned: $${data.interestEarned.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    pdf.text(`Tax Deductions: $${data.taxDeductions.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    pdf.text(`Taxable Income: $${data.taxableIncome.toFixed(2)}`, 20, yPosition);
    
    return yPosition + 15;
  }

  private addInvestmentContent(pdf: any, data: any, yPosition: number): number {
    pdf.text('Investment Portfolio', 20, yPosition);
    yPosition += 10;
    
    data.investments.forEach((investment: any) => {
      pdf.text(`${investment.name}: $${investment.value.toFixed(2)}`, 20, yPosition);
      const change = investment.change >= 0 ? `+${investment.change}%` : `${investment.change}%`;
      pdf.text(change, 150, yPosition);
      yPosition += 8;
    });
    
    return yPosition + 10;
  }

  private addPdfFooter(pdf: any): void {
    const pageHeight = pdf.internal.pageSize.height;
    
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text('Generated by BankGenie - Your Magical Banking Assistant', 20, pageHeight - 20);
    pdf.text('This document contains confidential financial information', 20, pageHeight - 15);
  }

  private createDetailedTextStatement(title: string, options: StatementOptions, data: any): string {
    const startDate = options.startDate.toLocaleDateString();
    const endDate = options.endDate.toLocaleDateString();
    const generatedDate = new Date().toLocaleString();
    
    let content = `🧞‍♂️ BankGenie - ${title}\n`;
    content += `${'='.repeat(60)}\n\n`;
    content += `Statement Period: ${startDate} to ${endDate}\n`;
    content += `Generated on: ${generatedDate}\n`;
    content += `${'='.repeat(60)}\n\n`;

    // Add content based on statement type
    if (title.includes('Account')) {
      content += this.formatAccountData(data);
    } else if (title.includes('Transaction')) {
      content += this.formatTransactionData(data);
    } else if (title.includes('Tax')) {
      content += this.formatTaxData(data);
    } else if (title.includes('Investment')) {
      content += this.formatInvestmentData(data);
    } else if (title.includes('Loan')) {
      content += this.formatLoanData(data);
    } else if (title.includes('Wallet')) {
      content += this.formatWalletData(data);
    }

    content += `\n${'='.repeat(60)}\n`;
    content += `Generated by BankGenie - Your Magical Banking Assistant\n`;
    content += `This document contains confidential financial information\n`;
    content += `For support, visit our help center or contact customer service\n`;
    
    return content;
  }

  private formatAccountData(data: any): string {
    let content = `ACCOUNT SUMMARY\n`;
    content += `${'-'.repeat(30)}\n`;
    
    data.accounts.forEach((account: any) => {
      content += `${account.type}: ${account.number}\n`;
      content += `Balance: $${account.balance.toFixed(2)}\n\n`;
    });
    
    content += `${'-'.repeat(30)}\n`;
    content += `TOTAL BALANCE: $${data.totalBalance.toFixed(2)}\n`;
    
    return content;
  }

  private formatTransactionData(data: any): string {
    let content = `RECENT TRANSACTIONS\n`;
    content += `${'-'.repeat(50)}\n`;
    content += `${'Description'.padEnd(20)} ${'Category'.padEnd(15)} Amount\n`;
    content += `${'-'.repeat(50)}\n`;
    
    data.transactions.forEach((transaction: any) => {
      const amount = transaction.amount >= 0 
        ? `+$${transaction.amount.toFixed(2)}` 
        : `-$${Math.abs(transaction.amount).toFixed(2)}`;
      content += `${transaction.description.padEnd(20)} ${transaction.category.padEnd(15)} ${amount}\n`;
    });
    
    return content;
  }

  private formatTaxData(data: any): string {
    let content = `TAX SUMMARY - ${data.year}\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Interest Earned: $${data.interestEarned.toFixed(2)}\n`;
    content += `Tax Deductions: $${data.taxDeductions.toFixed(2)}\n`;
    content += `Taxable Income: $${data.taxableIncome.toFixed(2)}\n`;
    content += `Tax Withheld: $${data.taxWithheld.toFixed(2)}\n`;
    
    return content;
  }

  private formatInvestmentData(data: any): string {
    let content = `INVESTMENT PORTFOLIO\n`;
    content += `${'-'.repeat(40)}\n`;
    content += `${'Investment'.padEnd(20)} ${'Value'.padEnd(12)} Change\n`;
    content += `${'-'.repeat(40)}\n`;
    
    data.investments.forEach((investment: any) => {
      const change = investment.change >= 0 ? `+${investment.change}%` : `${investment.change}%`;
      content += `${investment.name.padEnd(20)} $${investment.value.toFixed(2).padEnd(10)} ${change}\n`;
    });
    
    content += `${'-'.repeat(40)}\n`;
    content += `TOTAL VALUE: $${data.totalValue.toFixed(2)}\n`;
    
    return content;
  }

  private formatLoanData(data: any): string {
    let content = `LOAN STATEMENT\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Loan ID: ${data.loanId}\n`;
    content += `Loan Type: ${data.loanType}\n`;
    content += `Principal Amount: $${data.principalAmount.toFixed(2)}\n`;
    content += `Outstanding Balance: $${data.outstandingBalance.toFixed(2)}\n`;
    content += `Monthly EMI: $${data.monthlyEMI.toFixed(2)}\n`;
    content += `Interest Rate: ${data.interestRate}%\n`;
    
    return content;
  }

  private formatWalletData(data: any): string {
    let content = `DIGITAL WALLET STATEMENT\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Wallet Balance: $${data.walletBalance.toFixed(2)}\n`;
    content += `Linked Cards: ${data.linkedCards}\n`;
    content += `Total Transactions: ${data.totalTransactions}\n`;
    content += `Monthly Spent: $${data.monthlySpent.toFixed(2)}\n`;
    
    return content;
  }

  /**
   * Download Statement as PDF or Text
   */
  downloadStatement(blob: Blob, filename: string): void {
    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Determine file extension based on blob type
      const fileExtension = blob.type.includes('pdf') ? '.pdf' : '.txt';
      link.download = `${filename}-${this.formatDate(new Date())}${fileExtension}`;
      
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      const fileType = fileExtension === '.pdf' ? 'PDF' : 'text document';
      console.log(`✨ Statement download completed successfully! Downloaded as ${fileType}`);
      
      // Show user notification
      if (fileExtension === '.txt') {
        console.log('💡 Note: PDF generation unavailable. Downloaded as formatted text document.');
      }
      
    } catch (error) {
      console.error('❌ Error downloading statement:', error);
      
      // Try alternative download method
      try {
        const dataUrl = URL.createObjectURL(blob);
        window.open(dataUrl, '_blank');
        console.log('📂 Statement opened in new tab as fallback');
      } catch (fallbackError) {
        console.error('❌ Fallback download also failed:', fallbackError);
        alert('Download failed. Please try again or contact support.');
      }
    }
  }

  // Mock data generators
  private getAccountStatementData(): any {
    return {
      accounts: [
        { type: 'Savings Account', number: '****4567', balance: 15750.50 },
        { type: 'Checking Account', number: '****4568', balance: 8240.25 }
      ],
      totalBalance: 23990.75
    };
  }

  private getTransactionData(): any {
    return {
      transactions: [
        { description: 'Salary Deposit', amount: 3500.00, category: 'Income', date: new Date() },
        { description: 'Grocery Store', amount: -89.45, category: 'Food & Dining', date: new Date() },
        { description: 'Electric Bill', amount: -125.50, category: 'Utilities', date: new Date() },
        { description: 'ATM Withdrawal', amount: -100.00, category: 'Cash', date: new Date() },
        { description: 'Online Purchase', amount: -45.99, category: 'Shopping', date: new Date() }
      ]
    };
  }

  private getTaxStatementData(year: number): any {
    return {
      year: year,
      interestEarned: 1245.67,
      taxDeductions: 890.50,
      taxableIncome: 45600.00,
      taxWithheld: 6840.00
    };
  }

  private getLoanStatementData(): any {
    return {
      loanId: 'LOAN001',
      loanType: 'Home Loan',
      principalAmount: 250000.00,
      outstandingBalance: 187500.00,
      monthlyEMI: 2150.00,
      interestRate: 3.75
    };
  }

  private getInvestmentData(): any {
    return {
      investments: [
        { name: 'S&P 500 Fund', value: 12500.00, change: 5.67 },
        { name: 'Tech Stocks', value: 8750.00, change: -2.34 },
        { name: 'Bonds Fund', value: 5000.00, change: 1.23 }
      ],
      totalValue: 26250.00
    };
  }

  private getWalletData(): any {
    return {
      walletBalance: 1250.75,
      linkedCards: 3,
      totalTransactions: 45,
      monthlySpent: 567.89
    };
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
} 