import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sellerguardsGuard } from './sellerguards.guard';

describe('sellerguardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sellerguardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
