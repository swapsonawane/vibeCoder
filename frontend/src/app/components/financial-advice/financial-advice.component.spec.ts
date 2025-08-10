import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAdviceComponent } from './financial-advice.component';

describe('FinancialAdviceComponent', () => {
  let component: FinancialAdviceComponent;
  let fixture: ComponentFixture<FinancialAdviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialAdviceComponent]
    });
    fixture = TestBed.createComponent(FinancialAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
