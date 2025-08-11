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

  constructor(
    private fb: FormBuilder,
    private adviceService: FinancialAdviceService
  ) {
    this.adviceForm = this.fb.group({
      salary: [0, Validators.required],
      expenses: this.fb.group({
        housing: [0, Validators.min(0)],
        groceries: [0, Validators.min(0)],
        transportation: [0, Validators.min(0)],
        utilities: [0, Validators.min(0)],
        entertainment: [0, Validators.min(0)],
        savings: [0, Validators.min(0)],
        other: [0, Validators.min(0)]
      }),
      futureGoal: ['']
    });
  }

  ngOnInit(): void {
    // Optional initialization logic
  }

  onSubmit() {
    if (this.adviceForm.valid) {
      this.adviceService.getAdvice(this.adviceForm.value).subscribe((response: FinancialAdviceResponse) => {
        this.adviceResponse = response;
      });
    }
  }
}
