import { TestBed } from '@angular/core/testing';

import { AuthAdminGuard } from './auth-admin-guard.service';

describe('AuthAdminGuardService', () => {
  let service: AuthAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdminGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
