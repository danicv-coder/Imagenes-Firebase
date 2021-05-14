import { TestBed } from '@angular/core/testing';

import { FirebaseCatalgService } from './firebase-catalg.service';

describe('FirebaseCatalgService', () => {
  let service: FirebaseCatalgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCatalgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
