import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryService, Beneficiary } from '../../services/beneficiary.service';

@Component({
  selector: 'app-my-payees',
  templateUrl: './my-payees.component.html',
  styleUrls: ['./my-payees.component.css']
})
export class MyPayeesComponent implements OnInit {
  recentPayees: Beneficiary[] = [];
  frequentPayees: Beneficiary[] = [];
  allBeneficiaries: Beneficiary[] = [];
  loading = false;
  searchQuery = '';
  filteredPayees: Beneficiary[] = [];

  constructor(
    private beneficiaryService: BeneficiaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPayeesData();
  }

  private loadPayeesData(): void {
    this.loading = true;

    // Load recent payees
    this.beneficiaryService.getRecentPayees(10).subscribe({
      next: (recent) => {
        this.recentPayees = recent;
      }
    });

    // Load all beneficiaries to show frequent ones
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: (beneficiaries) => {
        this.allBeneficiaries = beneficiaries;
        this.frequentPayees = beneficiaries
          .filter(b => b.lastUsed)
          .sort((a, b) => {
            // Sort by frequency of use (mock - could be based on usage count)
            const aLastUsed = a.lastUsed?.getTime() || 0;
            const bLastUsed = b.lastUsed?.getTime() || 0;
            return bLastUsed - aLastUsed;
          })
          .slice(0, 8);
        
        this.filteredPayees = [...this.allBeneficiaries];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading payees:', error);
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.beneficiaryService.searchBeneficiaries(this.searchQuery).subscribe({
        next: (results) => {
          this.filteredPayees = results;
        }
      });
    } else {
      this.filteredPayees = [...this.allBeneficiaries];
    }
  }

  makePayment(payee: Beneficiary): void {
    // Navigate to transfers with selected payee
    this.router.navigate(['/transfers'], { 
      queryParams: { 
        beneficiaryId: payee.id,
        payeeName: payee.name,
        accountNumber: payee.accountNumber 
      } 
    });
  }

  payBill(payee: Beneficiary): void {
    // Navigate to bill payment with selected payee
    this.router.navigate(['/bills'], { 
      queryParams: { 
        payeeId: payee.id,
        payeeName: payee.name 
      } 
    });
  }

  addNewPayee(): void {
    this.router.navigate(['/payees/add']);
  }

  viewAllBeneficiaries(): void {
    this.router.navigate(['/beneficiaries']);
  }

  editPayee(payee: Beneficiary): void {
    this.router.navigate(['/payees/edit', payee.id]);
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'PERSONAL': return 'fas fa-user';
      case 'BUSINESS': return 'fas fa-building';
      case 'UTILITY': return 'fas fa-bolt';
      default: return 'fas fa-circle';
    }
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case 'PERSONAL': return 'text-primary';
      case 'BUSINESS': return 'text-success';
      case 'UTILITY': return 'text-warning';
      default: return 'text-secondary';
    }
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'INTERNAL': return 'fas fa-home';
      case 'EXTERNAL': return 'fas fa-external-link-alt';
      default: return 'fas fa-circle';
    }
  }

  formatLastUsed(date: Date | undefined): string {
    if (!date) return 'Never used';
    
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    
    return date.toLocaleDateString();
  }

  private showSuccessMessage(message: string): void {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
} 