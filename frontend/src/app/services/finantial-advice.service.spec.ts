import { TestBed } from '@angular/core/testing';

import { FinantialAdviceService } from './finantial-advice.service';

describe('FinantialAdviceService', () => {
  let service: FinantialAdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinantialAdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
