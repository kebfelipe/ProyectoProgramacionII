import { model_Especialidad } from './../model/model_Especialidad';
import { Component, OnInit } from '@angular/core';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  especialidades: model_Especialidad[] = [];

  constructor(public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) {

  }

  ngOnInit(): void {
    this.serviceAppMedicoService.get("especialidades")
      .subscribe((response: any) => {
        this.especialidades = response;
      });
      
  }

  verespecialidad(idlab: any) : void{
    if(idlab == 0){
      this.router.navigate(['/especialidades']);
    }else{
      this.router.navigate(['/especialidades/' + idlab]);
    }
  }

  eliminarespecilidad(idlab: any): void{
    this.serviceAppMedicoService.delete("especialidades/"+idlab)
      .subscribe((response: any) => {
        window.location.reload();
      });
  }
}
