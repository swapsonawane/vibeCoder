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
      const totalExpenses = Object.values(formData.expenses).reduce((sum: number, expense: any) => sum + (expense || 0), 0);
      
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
    return Object.values(expenses).reduce((sum: number, expense: any) => sum + (expense || 0), 0);
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

  // Reset form
  resetForm() {
    this.adviceForm.reset();
    this.adviceResponse = null;
    this.hasSubmitted = false;
    this.errorMessage = '';
    this.isLoading = false;
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
