import { Component, OnInit } from '@angular/core';
import { FinancialAdviceService, FinancialAdviceRequest, FinancialAdviceResponse } from '../../services/financial-advice.service';

@Component({
  selector: 'app-financial-advice',
  templateUrl: './financial-advice.component.html',
  styleUrls: ['./financial-advice.component.css']
})
export class FinancialAdviceComponent implements OnInit {
  salary = 0;
  expenses = 0;
  futureGoal = '';
  response?: FinancialAdviceResponse;

  constructor(private adviceService: FinancialAdviceService) {}

  ngOnInit(): void {}

  submit() {
    const req: FinancialAdviceRequest = {
        salary: this.salary,
        expenses: this.expenses,
        futureGoal: this.futureGoal
    };
    this.adviceService.getAdvice(req).subscribe((res: FinancialAdviceResponse) => this.response = res);
  }
}