import { TestBed } from '@angular/core/testing';

import { PresTrustCoreService } from './pres-trust-core.service';

describe('PresTrustCoreService', () => {
  let service: PresTrustCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresTrustCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
