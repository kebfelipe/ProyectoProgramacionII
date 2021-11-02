
import { Component, OnInit } from '@angular/core';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';
import { Medico } from "../model/Medico";


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(public serviceAppMedicoService: ServiceAppMedicoService) {

  }

  ngOnInit(): void {
    this.serviceAppMedicoService.get("medicos")
      .subscribe((response: any) => {
        this.medicos = response;
      });
  }



}
