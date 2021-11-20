import { TestBed } from '@angular/core/testing';

import { ServiceconsultaService } from './serviceconsulta.service';

describe('ServiceconsultaService', () => {
  let service: ServiceconsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceconsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
