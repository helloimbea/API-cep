import { TestBed } from '@angular/core/testing';

import { MalhaService } from './malha.service';

describe('MalhaService', () => {
  let service: MalhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
