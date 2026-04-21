import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { inventoryItemResolver } from './inventory-item.resolver';

describe('inventoryItemResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => inventoryItemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
