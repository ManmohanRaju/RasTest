import { TestBed } from '@angular/core/testing';

import { OstfService } from './ostf.service';

describe('OstfService', () => {
  let service: OstfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OstfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
