import { TestBed } from '@angular/core/testing';

import { PunkbeerapiService } from './punkbeerapi.service';

describe('PunkbeerapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunkbeerapiService = TestBed.get(PunkbeerapiService);
    expect(service).toBeTruthy();
  });
});
