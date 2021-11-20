import { Model_Laboratorio } from './../model/model_Laboratorio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {

  id_lab: number = 0;
  lab_nombre: string = ""; 
  lab_descripcion: string = "";
  lab_nuevo: Model_Laboratorio = new Model_Laboratorio();

  constructor(private route:ActivatedRoute, public serviceAppMedicoService: ServiceAppMedicoService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_lab = params.idexamen == null?0:params.idexamen;

      if(this.id_lab != 0){
        this.serviceAppMedicoService.get("examenes/"+this.id_lab)
        .subscribe((response: any) => {
          console.log(response);
          
          this.lab_nuevo = response;
            this.lab_nombre = this.lab_nuevo.nombre!;
            this.lab_descripcion = this.lab_nuevo.descripcion!;
        });
      }

    })
  }

  regresar() {
    window.history.back();
  }

  esNuevo():boolean {     
    if(this.id_lab == 0) {
      return true;
    }else { 
      return false;
    } 
  }

  registarlab():void {     
    if(this.lab_nombre != "" && this.lab_descripcion != ""){
      this.lab_nuevo.idExamen = 0;
      this.lab_nuevo.nombre = this.lab_nombre;
      this.lab_nuevo.descripcion = this.lab_descripcion;
      this.serviceAppMedicoService.postMedico("examenes", this.lab_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/laboratorios']);
      });
    }
  }

  
  modificarlab():void {     
    if(this.lab_nombre != "" && this.lab_descripcion != ""){
      this.lab_nuevo.idExamen = this.id_lab;
      this.lab_nuevo.nombre = this.lab_nombre;
      this.lab_nuevo.descripcion = this.lab_descripcion;
      this.serviceAppMedicoService.postMedico("examenes", this.lab_nuevo)
      .subscribe((response: any) => {
        this.router.navigate(['/laboratorios']);
      });
    }
  }

}
