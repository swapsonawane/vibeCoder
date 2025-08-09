import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryService, Beneficiary } from '../../../services/beneficiary.service';

@Component({
  selector: 'app-view-beneficiaries',
  templateUrl: './view-beneficiaries.component.html',
  styleUrls: ['./view-beneficiaries.component.css']
})
export class ViewBeneficiariesComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  filteredBeneficiaries: Beneficiary[] = [];
  searchQuery = '';
  selectedCategory = 'ALL';
  selectedType = 'ALL';
  loading = false;
  deleting = false;

  categories = [
    { value: 'ALL', label: 'All Categories' },
    { value: 'PERSONAL', label: 'Personal' },
    { value: 'BUSINESS', label: 'Business' },
    { value: 'UTILITY', label: 'Utility' }
  ];

  types = [
    { value: 'ALL', label: 'All Types' },
    { value: 'INTERNAL', label: 'Internal' },
    { value: 'EXTERNAL', label: 'External' }
  ];

  constructor(
    private beneficiaryService: BeneficiaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBeneficiaries();
  }

  private loadBeneficiaries(): void {
    this.loading = true;
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: (beneficiaries) => {
        this.beneficiaries = beneficiaries;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading beneficiaries:', error);
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onTypeChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.beneficiaries];

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(query) ||
        b.accountNumber.toLowerCase().includes(query) ||
        b.bankName.toLowerCase().includes(query) ||
        (b.nickname && b.nickname.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (this.selectedCategory !== 'ALL') {
      filtered = filtered.filter(b => b.category === this.selectedCategory);
    }

    // Apply type filter
    if (this.selectedType !== 'ALL') {
      filtered = filtered.filter(b => b.type === this.selectedType);
    }

    this.filteredBeneficiaries = filtered;
  }

  addBeneficiary(): void {
    this.router.navigate(['/beneficiaries/add']);
  }

  editBeneficiary(beneficiary: Beneficiary): void {
    // Navigate to edit form (could be same as add with different mode)
    this.router.navigate(['/beneficiaries/edit', beneficiary.id]);
  }

  deleteBeneficiary(beneficiary: Beneficiary): void {
    if (confirm(`Are you sure you want to delete "${beneficiary.name}" from your beneficiaries?`)) {
      this.deleting = true;
      this.beneficiaryService.deleteBeneficiary(beneficiary.id).subscribe({
        next: (success) => {
          if (success) {
            this.showSuccessMessage(`${beneficiary.name} has been removed from your beneficiaries.`);
            this.loadBeneficiaries();
          } else {
            this.showErrorMessage('Failed to delete beneficiary. Please try again.');
          }
          this.deleting = false;
        },
        error: (error) => {
          console.error('Error deleting beneficiary:', error);
          this.showErrorMessage('Failed to delete beneficiary. Please try again.');
          this.deleting = false;
        }
      });
    }
  }

  toggleStatus(beneficiary: Beneficiary): void {
    const newStatus = !beneficiary.isActive;
    this.beneficiaryService.updateBeneficiary(beneficiary.id, { isActive: newStatus }).subscribe({
      next: (updated) => {
        if (updated) {
          beneficiary.isActive = newStatus;
          this.showSuccessMessage(`${beneficiary.name} has been ${newStatus ? 'activated' : 'deactivated'}.`);
        }
      },
      error: (error) => {
        console.error('Error updating beneficiary status:', error);
        this.showErrorMessage('Failed to update beneficiary status.');
      }
    });
  }

  makeTransfer(beneficiary: Beneficiary): void {
    // Navigate to transfers with pre-selected beneficiary
    this.router.navigate(['/transfers'], { queryParams: { beneficiaryId: beneficiary.id } });
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'PERSONAL': return 'fas fa-user';
      case 'BUSINESS': return 'fas fa-building';
      case 'UTILITY': return 'fas fa-bolt';
      default: return 'fas fa-circle';
    }
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'INTERNAL': return 'fas fa-home';
      case 'EXTERNAL': return 'fas fa-external-link-alt';
      default: return 'fas fa-circle';
    }
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

  private showErrorMessage(message: string): void {
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 4000);
  }

  getActiveBeneficiariesCount(): number {
    return this.beneficiaries.filter(b => b.isActive).length || 0;
  }

  getInternalBeneficiariesCount(): number {
    return this.beneficiaries.filter(b => b.type === 'INTERNAL').length || 0;
  }

  getExternalBeneficiariesCount(): number {
    return this.beneficiaries.filter(b => b.type === 'EXTERNAL').length || 0;
  }
} 