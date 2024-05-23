import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userguardsGuard } from './userguards.guard';

describe('userguardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userguardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
