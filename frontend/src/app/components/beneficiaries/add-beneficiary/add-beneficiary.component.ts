import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BeneficiaryService, Beneficiary } from '../../../services/beneficiary.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiaryForm: FormGroup;
  loading = false;
  saving = false;
  isPayeeMode = false; // Track if we're adding a payee or beneficiary

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private beneficiaryService: BeneficiaryService
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      nickname: [''],
      accountNumber: ['', [Validators.required, Validators.minLength(5)]],
      bankName: ['', [Validators.required]],
      routingNumber: ['', [Validators.pattern(/^\d{9}$/)]],
      type: ['EXTERNAL', [Validators.required]],
      category: ['PERSONAL', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    // Detect if we're in payee mode based on the URL
    this.isPayeeMode = this.router.url.includes('/payees');
    
    // If payee mode, set different default category
    if (this.isPayeeMode) {
      this.beneficiaryForm.patchValue({
        category: 'UTILITY',
        type: 'EXTERNAL'
      });
    }
  }

  onSubmit(): void {
    if (this.beneficiaryForm.valid) {
      this.saving = true;
      const formData = this.beneficiaryForm.value;

      this.beneficiaryService.addBeneficiary(formData).subscribe({
        next: (beneficiary) => {
          const entityType = this.isPayeeMode ? 'Payee' : 'Beneficiary';
          console.log(`${entityType} added:`, beneficiary);
          this.showSuccessMessage(`${entityType} added successfully!`);
          setTimeout(() => {
            const redirectPath = this.isPayeeMode ? '/payees' : '/beneficiaries';
            this.router.navigate([redirectPath]);
          }, 1500);
        },
        error: (error) => {
          console.error('Error adding beneficiary:', error);
          this.showErrorMessage('Failed to add beneficiary. Please try again.');
          this.saving = false;
        },
        complete: () => {
          this.saving = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.beneficiaryForm);
    }
  }

  onCancel(): void {
    const redirectPath = this.isPayeeMode ? '/payees' : '/beneficiaries';
    this.router.navigate([redirectPath]);
  }

  // Getter methods for template
  get pageTitle(): string {
    return this.isPayeeMode ? 'Add New Payee' : 'Add New Beneficiary';
  }

  get entityType(): string {
    return this.isPayeeMode ? 'Payee' : 'Beneficiary';
  }

  get backButtonText(): string {
    return this.isPayeeMode ? 'Back to Payees' : 'Back to Beneficiaries';
  }

  onTypeChange(): void {
    const type = this.beneficiaryForm.get('type')?.value;
    const routingControl = this.beneficiaryForm.get('routingNumber');
    
    if (type === 'INTERNAL') {
      routingControl?.clearValidators();
      this.beneficiaryForm.patchValue({ bankName: 'NetBanking' });
    } else {
      routingControl?.setValidators([Validators.pattern(/^\d{9}$/)]);
      if (this.beneficiaryForm.get('bankName')?.value === 'NetBanking') {
        this.beneficiaryForm.patchValue({ bankName: '' });
      }
    }
    routingControl?.updateValueAndValidity();
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.beneficiaryForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.beneficiaryForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) {
        if (fieldName === 'routingNumber') return 'Routing number must be 9 digits';
        if (fieldName === 'phone') return 'Please enter a valid phone number';
        return `Please enter a valid ${fieldName}`;
      }
    }
    return '';
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
} 