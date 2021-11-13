
import { Component, OnInit } from '@angular/core';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';
import { Model_Medico } from "../model/model_Medico";
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Model_Medico[] = [];

  constructor(public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) {

  }

  ngOnInit(): void {
    this.serviceAppMedicoService.get("medicos")
      .subscribe((response: any) => {
        this.medicos = response;
        for(let x = 0; x < this.medicos.length; x++){
          if(this.medicos[x].fotoUrl == null || this.medicos[x].fotoUrl == ""){
            this.medicos[x].fotoUrl = "/assets/doctor.png" 
          }
        }
      });
      
  }

  regresar() {
    window.history.back();
  }

  vermedico(idmedico: any) : void{
    if(idmedico == 0){
      this.router.navigate(['/medico']);
    }else{
      this.router.navigate(['/medico/' + idmedico]);
    }
  }

  eliminarMedico(idmedico: any): void{
    console.log(idmedico);
    
    this.serviceAppMedicoService.delete("medicos/"+idmedico)
      .subscribe((response: any) => {
        window.location.reload();
      });
  }
}
