import { TestBed } from '@angular/core/testing';

import { ServiceAppMedicoService } from './service-app-medico.service';

describe('ServiceAppMedicoService', () => {
  let service: ServiceAppMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAppMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
