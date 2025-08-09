import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit {
  billPaymentForm: FormGroup = new FormGroup({});
  accounts: any[] = [];
  payees: any[] = [];
  upcomingBills: any[] = [];
  recentPayments: any[] = [];
  loading = false;
  submitted = false;
  preSelectedAccount: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadData();
    this.checkQueryParams();
  }

  checkQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      if (params['fromAccount']) {
        this.preSelectedAccount = {
          id: params['fromAccount'],
          accountNumber: params['accountNumber'],
          accountType: params['accountType']
        };
        
        // Pre-select the account in the form
        this.billPaymentForm.patchValue({
          account: params['fromAccount']
        });

        // Show a helpful message
        setTimeout(() => {
          alert(`Account ${params['accountNumber']} (${params['accountType']}) has been pre-selected for bill payment!`);
        }, 500);
      }
    });
  }

  initializeForm(): void {
    this.billPaymentForm = this.formBuilder.group({
      account: ['', Validators.required],
      payee: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      dueDate: ['', Validators.required],
      description: ['', Validators.required],
      isRecurring: [false]
    });
  }

  loadData(): void {
    this.loading = true;
    
    // Mock data
    this.accounts = [
      {
        id: '1',
        accountNumber: 'ACC1001234567',
        accountType: 'SAVINGS',
        balance: 15750.50
      },
      {
        id: '2',
        accountNumber: 'ACC1001234568',
        accountType: 'CHECKING',
        balance: 8240.25
      }
    ];

    this.payees = [
      {
        id: '1',
        name: 'Electric Company',
        category: 'UTILITY',
        accountNumber: 'ELEC123456'
      },
      {
        id: '2',
        name: 'Internet Provider',
        category: 'TELECOM',
        accountNumber: 'INT789012'
      },
      {
        id: '3',
        name: 'Credit Card',
        category: 'CREDIT_CARD',
        accountNumber: 'CC456789'
      }
    ];

    this.upcomingBills = [
      {
        id: '1',
        payeeName: 'Electric Company',
        amount: 85.50,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        status: 'SCHEDULED'
      },
      {
        id: '2',
        payeeName: 'Internet Provider',
        amount: 59.99,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'SCHEDULED'
      }
    ];

    this.recentPayments = [
      {
        id: '1',
        payeeName: 'Electric Company',
        amount: 82.30,
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: 'COMPLETED'
      }
    ];

    this.loading = false;
  }

  get f() { return this.billPaymentForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.billPaymentForm.invalid) {
      return;
    }

    this.loading = true;

    const formData = this.billPaymentForm.value;
    const account = this.accounts.find(acc => acc.id === formData.account);
    const payee = this.payees.find(p => p.id === formData.payee);

    // Show payment confirmation
    const paymentSummary = `
Bill Payment Summary:
From Account: ${account?.accountType} (${account?.accountNumber})
Payee: ${payee?.name}
Amount: $${formData.amount}
Due Date: ${new Date(formData.dueDate).toDateString()}
Description: ${formData.description}
Recurring: ${formData.isRecurring ? 'Yes' : 'No'}
    `;

    if (confirm(`Please confirm this bill payment:\n${paymentSummary}`)) {
      // Simulate API call
      setTimeout(() => {
        alert('Bill payment scheduled successfully!');
        this.billPaymentForm.reset();
        this.submitted = false;
        this.loading = false;
        this.loadData(); // Refresh data
        
        // If there was a pre-selected account, reset the form to that account
        if (this.preSelectedAccount) {
          this.billPaymentForm.patchValue({
            account: this.preSelectedAccount.id
          });
        }
      }, 2000);
    } else {
      this.loading = false;
    }
  }

  // Quick pay functionality for upcoming bills
  quickPayBill(bill: any): void {
    if (confirm(`Pay ${bill.payeeName} bill of $${bill.amount}?`)) {
      alert(`Payment of $${bill.amount} to ${bill.payeeName} has been processed!`);
      // Remove from upcoming bills
      this.upcomingBills = this.upcomingBills.filter(b => b.id !== bill.id);
      // Add to recent payments
      this.recentPayments.unshift({
        id: Date.now().toString(),
        payeeName: bill.payeeName,
        amount: bill.amount,
        date: new Date(),
        status: 'COMPLETED'
      });
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  getPayeeCategoryIcon(category: string): string {
    switch (category) {
      case 'UTILITY': return 'fas fa-bolt';
      case 'TELECOM': return 'fas fa-wifi';
      case 'CREDIT_CARD': return 'fas fa-credit-card';
      case 'INSURANCE': return 'fas fa-shield-alt';
      default: return 'fas fa-file-invoice';
    }
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'COMPLETED': return 'bg-success';
      case 'SCHEDULED': return 'bg-warning';
      case 'FAILED': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getDaysUntilDue(dueDate: Date): number {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Payee management methods
  addPayee(): void {
    this.router.navigate(['/payees/add']);
  }

  payPayee(payee: any): void {
    // Pre-select the payee in the form
    this.billPaymentForm.patchValue({
      payee: payee.id,
      amount: '',
      description: `Payment to ${payee.name}`
    });
    
    // Scroll to the form
    setTimeout(() => {
      const formElement = document.querySelector('.card-body form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  editPayee(payee: any): void {
    this.router.navigate(['/payees/edit', payee.id]);
  }
} 