import { TestBed } from '@angular/core/testing';

import { MetamaskIntegrationService } from './metamask-integration.service';

describe('MetamaskIntegrationService', () => {
  let service: MetamaskIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetamaskIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
