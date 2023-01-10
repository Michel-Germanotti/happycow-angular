import { TestBed } from '@angular/core/testing';

import { SearchmapService } from './searchmap.service';

describe('SearchmapService', () => {
  let service: SearchmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
