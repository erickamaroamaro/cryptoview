import { TestBed } from '@angular/core/testing';

import { ContractsAbiCurrencyService } from './contracts-abi-currency.service';

describe('ContractsAbiCurrencyService', () => {
  let service: ContractsAbiCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractsAbiCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
