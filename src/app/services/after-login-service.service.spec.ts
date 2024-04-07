import { TestBed } from '@angular/core/testing';

import { AfterLoginServiceService } from './after-login-service.service';

describe('AfterLoginServiceService', () => {
  let service: AfterLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
