import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  transferForm: FormGroup = new FormGroup({});
  accounts: any[] = [];
  beneficiaries: any[] = [];
  recentTransfers: any[] = [];
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
        this.transferForm.patchValue({
          fromAccount: params['fromAccount']
        });

        // Show a helpful message
        setTimeout(() => {
          alert(`Account ${params['accountNumber']} (${params['accountType']}) has been pre-selected for transfer!`);
        }, 500);
      }
    });
  }

  initializeForm(): void {
    this.transferForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      transferType: ['INTERNAL', Validators.required]
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

    this.beneficiaries = [
      {
        id: '1',
        name: 'John Doe',
        accountNumber: 'ACC2001234567',
        bankName: 'Other Bank'
      },
      {
        id: '2',
        name: 'Jane Smith',
        accountNumber: 'ACC2001234568',
        bankName: 'Another Bank'
      }
    ];

    this.recentTransfers = [
      {
        id: '1',
        description: 'Internal Transfer',
        amount: 500.00,
        status: 'COMPLETED',
        date: new Date(),
        recipientName: 'Savings Account'
      },
      {
        id: '2',
        description: 'External Transfer',
        amount: 1000.00,
        status: 'PENDING',
        date: new Date(),
        recipientName: 'John Doe'
      }
    ];

    this.loading = false;
  }

  get f() { return this.transferForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.transferForm.invalid) {
      return;
    }

    this.loading = true;

    const formData = this.transferForm.value;
    const fromAccount = this.accounts.find(acc => acc.id === formData.fromAccount);
    const toAccount = this.transferForm.value.transferType === 'INTERNAL' 
      ? this.accounts.find(acc => acc.id === formData.toAccount)
      : this.beneficiaries.find(ben => ben.id === formData.toAccount);

    // Show transfer confirmation
    const transferSummary = `
Transfer Summary:
From: ${fromAccount?.accountType} (${fromAccount?.accountNumber})
To: ${toAccount?.name || toAccount?.accountType} (${toAccount?.accountNumber})
Amount: $${formData.amount}
Description: ${formData.description}
    `;

    if (confirm(`Please confirm this transfer:\n${transferSummary}`)) {
      // Simulate API call
      setTimeout(() => {
        alert('Transfer completed successfully!');
        this.transferForm.reset();
        this.submitted = false;
        this.loading = false;
        this.loadData(); // Refresh data
        
        // If there was a pre-selected account, reset the form to that account
        if (this.preSelectedAccount) {
          this.transferForm.patchValue({
            fromAccount: this.preSelectedAccount.id
          });
        }
      }, 2000);
    } else {
      this.loading = false;
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'COMPLETED': return 'bg-success';
      case 'PENDING': return 'bg-warning';
      case 'FAILED': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  // Navigation methods for beneficiaries
  addBeneficiary(): void {
    this.router.navigate(['/beneficiaries/add']);
  }

  viewAllBeneficiaries(): void {
    this.router.navigate(['/beneficiaries']);
  }
} 