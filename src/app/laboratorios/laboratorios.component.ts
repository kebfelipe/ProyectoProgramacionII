import { Model_Laboratorio } from './../model/model_Laboratorio';
import { Component, OnInit } from '@angular/core';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent implements OnInit {

  labs: Model_Laboratorio[] = [];

  constructor(public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) {

  }

  ngOnInit(): void {
    this.serviceAppMedicoService.get("examenes")
      .subscribe((response: any) => {
        this.labs = response;
      });
      
  }

  verlaboratorio(idlab: any) : void{
    if(idlab == 0){
      this.router.navigate(['/laboratorio']);
    }else{
      this.router.navigate(['/laboratorio/' + idlab]);
    }
  }

  eliminarLaboratorio(idlab: any): void{
    this.serviceAppMedicoService.delete("laboratorio/"+idlab)
      .subscribe((response: any) => {
        window.location.reload();
      });
  }
}
