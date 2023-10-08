import { TestBed } from '@angular/core/testing';

import { IdeaStateService } from './idea-state.service';

describe('TaskStateService', () => {
  let service: IdeaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
