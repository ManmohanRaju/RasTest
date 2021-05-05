import { TestBed } from '@angular/core/testing';

import { OstfAppSignatureService } from './ostf-app-signature.service';

describe('OstfAppSignatureService', () => {
  let service: OstfAppSignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OstfAppSignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
