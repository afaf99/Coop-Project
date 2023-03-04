import { TestBed } from '@angular/core/testing';

import { TrainingRegistrationDataService } from './training-registration-data.service';

describe('TrainingRegistrationDataService', () => {
  let service: TrainingRegistrationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingRegistrationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
