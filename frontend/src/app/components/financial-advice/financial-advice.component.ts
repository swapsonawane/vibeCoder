// frontend/src/app/components/financial-advice/financial-advice.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancialAdviceService, FinancialAdviceRequest, FinancialAdviceResponse } from '../../services/financial-advice.service';

@Component({
  selector: 'app-financial-advice',
  templateUrl: './financial-advice.component.html',
  styleUrls: ['./financial-advice.component.css']
})
export class FinancialAdviceComponent implements OnInit {
  adviceForm: FormGroup;
  adviceResponse: FinancialAdviceResponse | null = null;
  isLoading: boolean = false;
  hasSubmitted: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private adviceService: FinancialAdviceService
  ) {
    this.adviceForm = this.fb.group({
      salary: [0, [Validators.required, Validators.min(0)]],
      expenses: this.fb.group({
        housing: [0, [Validators.min(0)]],
        groceries: [0, [Validators.min(0)]],
        transportation: [0, [Validators.min(0)]],
        utilities: [0, [Validators.min(0)]],
        entertainment: [0, [Validators.min(0)]],
        savings: [0, [Validators.min(0)]],
        other: [0, [Validators.min(0)]]
      }),
      futureGoal: ['', [Validators.maxLength(200)]]
    });
  }

  ngOnInit(): void {
    // Optional initialization logic
  }

  onSubmit() {
    this.hasSubmitted = true;
    this.errorMessage = '';
    
    if (this.adviceForm.valid) {
      this.isLoading = true;
      this.adviceResponse = null;
      
      const formData = this.adviceForm.value;
      
             // Calculate total expenses
       const totalExpenses = Object.values(formData.expenses).reduce((sum: number, expense: any) => sum + ((expense as number) || 0), 0);
      
      // Validate that expenses don't exceed salary
      if (totalExpenses > formData.salary) {
        this.errorMessage = 'Total expenses cannot exceed your salary. Please review your expense entries.';
        this.isLoading = false;
        return;
      }

      this.adviceService.getAdvice(formData).subscribe({
        next: (response: FinancialAdviceResponse) => {
          this.adviceResponse = response;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error getting financial advice:', error);
          this.errorMessage = 'Unable to generate financial advice at this time. Please try again later.';
          this.isLoading = false;
        }
      });
    }
  }

  // Helper method to get total expenses
  getTotalExpenses(): number {
    const expenses = this.adviceForm.get('expenses')?.value;
    if (!expenses) return 0;
    return Object.values(expenses).reduce((sum: number, expense: any) => sum + ((expense as number) || 0), 0);
  }

  // Helper method to get remaining amount
  getRemainingAmount(): number {
    const salary = this.adviceForm.get('salary')?.value || 0;
    return salary - this.getTotalExpenses();
  }

  // Helper method to check if form is valid
  isFormValid(): boolean {
    return this.adviceForm.valid && this.getTotalExpenses() <= (this.adviceForm.get('salary')?.value || 0);
  }

  // Helper method to get savings value with proper type casting
  getSavingsValue(): number {
    const savingsValue = this.adviceForm.get('expenses.savings')?.value;
    return (savingsValue as number) || 0;
  }

  // Reset form
  resetForm() {
    this.adviceForm.reset();
    this.adviceResponse = null;
    this.hasSubmitted = false;
    this.errorMessage = '';
    this.isLoading = false;
  }

  // Download financial report
  downloadFinancialReport() {
    if (!this.adviceResponse) {
      return;
    }

    // Create report content
    const reportContent = this.generateReportContent();
    
    // Create and download the file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `financial-advice-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  // Download report as HTML (more formatted)
  downloadReportAsHTML() {
    if (!this.adviceResponse) {
      return;
    }

    const htmlContent = this.generateHTMLReport();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `financial-advice-report-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  // Generate HTML report
  private generateHTMLReport(): string {
    const formData = this.adviceForm.value;
    const totalExpenses = this.getTotalExpenses();
    const remaining = this.getRemainingAmount();
    
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Financial Advice Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2c3e50; border-left: 4px solid #3498db; padding-left: 15px; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .summary-item { background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; }
        .summary-value { font-size: 1.5em; font-weight: bold; color: #2c3e50; }
        .expense-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .advice-item { background: #e8f5e8; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .insight-item { background: #fff3cd; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Financial Advice Report</h1>
        <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
    </div>

    <div class="section">
        <h2>Income & Expenses Summary</h2>
        <div class="summary-grid">
            <div class="summary-item">
                <div class="summary-value">$${formData.salary.toLocaleString()}</div>
                <div>Monthly Salary</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">$${totalExpenses.toLocaleString()}</div>
                <div>Total Expenses</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">$${remaining.toLocaleString()}</div>
                <div>Remaining Amount</div>
            </div>
            <div class="summary-item">
                                 <div class="summary-value">${(((formData.expenses.savings as number) || 0) / totalExpenses * 100).toFixed(1)}%</div>
                <div>Savings Rate</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Expense Breakdown</h2>
                 ${Object.entries(formData.expenses).map(([category, amount]) => {
           const amountValue = amount as number;
           if (amountValue > 0) {
             const percentage = (amountValue / totalExpenses * 100).toFixed(1);
             return `<div class="expense-item">
                 <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                 <span>$${amountValue.toLocaleString()} (${percentage}%)</span>
             </div>`;
           }
           return '';
         }).join('')}
    </div>

    ${this.adviceResponse ? `
    <div class="section">
        <h2>Personalized Advice</h2>
        ${this.adviceResponse.advice.map((advice, index) => 
          `<div class="advice-item">${index + 1}. ${advice}</div>`
        ).join('')}
    </div>

    <div class="section">
        <h2>Financial Insights</h2>
        ${this.adviceResponse.insights.map((insight, index) => 
          `<div class="insight-item">
            <strong>${insight.title}</strong><br>
            ${insight.detail}
          </div>`
        ).join('')}
    </div>
    ` : ''}

    <div class="section">
        <h2>Recommendations</h2>
        <ul>
            <li>Review your expense categories monthly</li>
            <li>Set up automatic savings transfers</li>
            <li>Track your progress toward financial goals</li>
            <li>Consider consulting with a financial advisor</li>
            <li>Review and adjust your budget quarterly</li>
        </ul>
    </div>

    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and should not be considered as financial advice. Please consult with a qualified financial professional for personalized guidance.</p>
    </div>
</body>
</html>`;
  }

  // Generate report content
  private generateReportContent(): string {
    const formData = this.adviceForm.value;
    const totalExpenses = this.getTotalExpenses();
    const remaining = this.getRemainingAmount();
    
    let report = 'FINANCIAL ADVICE REPORT\n';
    report += '========================\n\n';
    report += `Generated on: ${new Date().toLocaleDateString()}\n`;
    report += `Generated at: ${new Date().toLocaleTimeString()}\n\n`;
    
    report += 'INCOME & EXPENSES SUMMARY\n';
    report += '-------------------------\n';
    report += `Monthly Salary: $${formData.salary.toLocaleString()}\n`;
    report += `Total Expenses: $${totalExpenses.toLocaleString()}\n`;
    report += `Remaining Amount: $${remaining.toLocaleString()}\n`;
         report += `Savings Rate: ${(((formData.expenses.savings as number) || 0) / totalExpenses * 100).toFixed(1)}%\n\n`;
    
    report += 'EXPENSE BREAKDOWN\n';
    report += '-----------------\n';
         Object.entries(formData.expenses).forEach(([category, amount]) => {
       const amountValue = amount as number;
       if (amountValue > 0) {
         const percentage = (amountValue / totalExpenses * 100).toFixed(1);
         report += `${category.charAt(0).toUpperCase() + category.slice(1)}: $${amountValue.toLocaleString()} (${percentage}%)\n`;
       }
     });
    report += '\n';
    
    if (this.adviceResponse) {
      report += 'PERSONALIZED ADVICE\n';
      report += '-------------------\n';
      this.adviceResponse.advice.forEach((advice, index) => {
        report += `${index + 1}. ${advice}\n`;
      });
      report += '\n';
      
      report += 'FINANCIAL INSIGHTS\n';
      report += '------------------\n';
      this.adviceResponse.insights.forEach((insight, index) => {
        report += `${index + 1}. ${insight.title}\n`;
        report += `   ${insight.detail}\n\n`;
      });
    }
    
    report += 'RECOMMENDATIONS\n';
    report += '---------------\n';
    report += '1. Review your expense categories monthly\n';
    report += '2. Set up automatic savings transfers\n';
    report += '3. Track your progress toward financial goals\n';
    report += '4. Consider consulting with a financial advisor\n';
    report += '5. Review and adjust your budget quarterly\n\n';
    
    report += 'This report is for informational purposes only and should not be considered as financial advice.\n';
    report += 'Please consult with a qualified financial professional for personalized guidance.';
    
    return report;
  }

  // Schedule follow-up review
  scheduleFollowUpReview() {
    // Get current date and add 3 months for follow-up
    const followUpDate = new Date();
    followUpDate.setMonth(followUpDate.getMonth() + 3);
    
    // Create calendar event (for demonstration - in real app, integrate with calendar service)
    const eventDetails = {
      title: 'Financial Review Follow-up',
      description: `Follow-up review for financial advice received on ${new Date().toLocaleDateString()}`,
      startDate: followUpDate,
      endDate: new Date(followUpDate.getTime() + 60 * 60 * 1000), // 1 hour duration
      location: 'Online/Phone',
      notes: `Review progress on financial goals and adjust budget as needed. Original advice: ${this.adviceResponse?.advice.slice(0, 2).join('; ')}`
    };
    
    // Show confirmation message
    alert(`Follow-up review scheduled for ${followUpDate.toLocaleDateString()} at ${followUpDate.toLocaleTimeString()}\n\nEvent Details:\n${eventDetails.title}\n${eventDetails.description}\n\nNote: This is a demo. In a real application, this would integrate with your calendar system.`);
    
    // You could also store this in localStorage or send to a backend service
    this.saveFollowUpReminder(eventDetails);
  }

  // Save follow-up reminder
  private saveFollowUpReminder(eventDetails: any) {
    const reminders = JSON.parse(localStorage.getItem('financialFollowUps') || '[]');
    reminders.push({
      id: Date.now().toString(),
      ...eventDetails,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('financialFollowUps', JSON.stringify(reminders));
  }

  // View scheduled follow-ups
  viewScheduledFollowUps() {
    const reminders = JSON.parse(localStorage.getItem('financialFollowUps') || '[]');
    
    if (reminders.length === 0) {
      alert('No follow-up reviews scheduled yet.');
      return;
    }

    let message = 'SCHEDULED FOLLOW-UP REVIEWS:\n\n';
    reminders.forEach((reminder: any, index: number) => {
      const date = new Date(reminder.startDate).toLocaleDateString();
      const time = new Date(reminder.startDate).toLocaleTimeString();
      message += `${index + 1}. ${reminder.title}\n`;
      message += `   Date: ${date} at ${time}\n`;
      message += `   Description: ${reminder.description}\n`;
      message += `   Notes: ${reminder.notes}\n\n`;
    });

    alert(message);
  }

  // Clear all follow-up reminders
  clearFollowUpReminders() {
    if (confirm('Are you sure you want to clear all scheduled follow-up reminders?')) {
      localStorage.removeItem('financialFollowUps');
      alert('All follow-up reminders have been cleared.');
    }
  }

  // Get field error message
  getFieldError(fieldName: string): string {
    const field = this.adviceForm.get(fieldName);
    if (field?.errors && this.hasSubmitted) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['min']) return 'Value must be greater than or equal to 0';
      if (field.errors['maxlength']) return 'Maximum length exceeded';
    }
    return '';
  }
}
