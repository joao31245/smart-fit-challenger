import { TestBed } from '@angular/core/testing';

import { GetUnidadesService } from './get-unidades.service';

describe('GetUnidadesService', () => {
  let service: GetUnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
