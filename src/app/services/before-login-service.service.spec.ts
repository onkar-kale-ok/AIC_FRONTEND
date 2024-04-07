import { TestBed } from '@angular/core/testing';

import { BeforeLoginServiceService } from './before-login-service.service';

describe('BeforeLoginServiceService', () => {
  let service: BeforeLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeforeLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
