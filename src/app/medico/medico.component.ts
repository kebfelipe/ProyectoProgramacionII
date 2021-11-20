import { Model_Medico } from './../model/model_Medico';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  id_medico: number = 0;
  medico_nombre: string = ""; 
  medico_apellido: string = "";
  medico_cmp: string = "";
  medico_url: string = "";
  medico_nuevo: Model_Medico = new Model_Medico();

  constructor(private route:ActivatedRoute, public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_medico = params.idmedico == null?0:params.idmedico;

      if(this.id_medico != 0){
        this.serviceAppMedicoService.get("medicos/"+this.id_medico)
        .subscribe((response: any) => {
          console.log(response);
          
          this.medico_nuevo = response;

            if(this.medico_nuevo.fotoUrl == null || this.medico_nuevo.fotoUrl == ""){
              this.medico_nuevo.fotoUrl = "/assets/doctor.png"; 
            }

            this.medico_nombre = this.medico_nuevo.nombres!;
            this.medico_apellido = this.medico_nuevo.apellidos!;
            this.medico_cmp = this.medico_nuevo.cmp!;
            this.medico_url = this.medico_nuevo.fotoUrl!;
        });
      }

      if(this.medico_url == null || this.medico_url == ""){
        this.medico_url = "/assets/doctor.png"; 
      }

    })

  }

  regresar() {
    window.history.back();
  }

  esNuevo():boolean {     
    if(this.id_medico == 0) {
      return true;
    }else { 
      return false;
    } 
  }

  registarmedico():void {     
    if(this.medico_nombre != "" && this.medico_apellido != "" && this.medico_cmp != ""){
      this.medico_nuevo.idMedico = 0;
      this.medico_nuevo.nombres = this.medico_nombre;
      this.medico_nuevo.apellidos = this.medico_apellido;
      this.medico_nuevo.cmp = this.medico_cmp;
      this.medico_nuevo.fotoUrl = this.medico_url;
      this.serviceAppMedicoService.post("medicos", this.medico_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/medicos']);
      });
    }
  }

  
  modificarmedico():void {     
    if(this.medico_nombre != "" && this.medico_apellido != "" && this.medico_cmp != ""){
      this.medico_nuevo.idMedico = this.id_medico;
      this.medico_nuevo.nombres = this.medico_nombre;
      this.medico_nuevo.apellidos = this.medico_apellido;
      this.medico_nuevo.cmp = this.medico_cmp;
      this.medico_nuevo.fotoUrl = this.medico_url;
      this.serviceAppMedicoService.put("medicos", this.medico_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/medicos']);
      });
    }
  }
}
