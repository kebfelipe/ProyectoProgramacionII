import { model_Especialidad } from './../model/model_Especialidad';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  id_especialidad: number = 0;
  especialidad_nombre: string = ""; 
  lab_nuevo: model_Especialidad = new model_Especialidad();

  constructor(private route:ActivatedRoute, public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_especialidad = params.idespecialidad == null?0:params.idespecialidad;

      if(this.id_especialidad != 0){
        this.serviceAppMedicoService.get("especilidades/"+this.id_especialidad)
        .subscribe((response: any) => {
          console.log(response);
          
          this.lab_nuevo = response;
            this.especialidad_nombre = this.lab_nuevo.nombre!;
        });
      }

    })
  }

  regresar() {
    window.history.back();
  }

  esNuevo():boolean {     
    if(this.id_especialidad == 0) {
      return true;
    }else { 
      return false;
    } 
  }

  registarespecialidad():void {     
    if(this.especialidad_nombre != ""){
      this.lab_nuevo.idEspecialidad = 0;
      this.lab_nuevo.nombre = this.especialidad_nombre;
      this.serviceAppMedicoService.post("especialidades", this.lab_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/especialidades']);
      });
    }
  }

  
  modificarespecialidad():void {     
    if(this.especialidad_nombre != ""){
      this.lab_nuevo.idEspecialidad = this.id_especialidad;
      this.lab_nuevo.nombre = this.especialidad_nombre;
      this.serviceAppMedicoService.put("especialidades", this.lab_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/especialidades']);
      });
    }
  }

}
