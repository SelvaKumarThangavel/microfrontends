import { TestBed } from '@angular/core/testing';

import { AddbudgetService } from './addbudget.service';

describe('AddbudgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddbudgetService = TestBed.get(AddbudgetService);
    expect(service).toBeTruthy();
  });
});
