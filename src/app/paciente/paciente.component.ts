import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model_Paciente } from '../model/model_Paciente';
import { PacientesService } from '../service/servicePacientes/pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  id_paciente: number = 0;
  paciente_nombres: string = "";
  paciente_apellidos: string = "";
  paciente_dni: number = 0;
  paciente_direccion: string = "";
  paciente_email: string = "";
  paciente_telefono: number = 0;
  paciente_nuevo: Model_Paciente = new Model_Paciente();

  constructor(
    private route:ActivatedRoute, 
    private router:Router, 
    public serviceAppPacienteService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_paciente = params.idpaciente == null?0:params.idpaciente;

      if(this.id_paciente != 0){
        this.serviceAppPacienteService.get("pacientes/"+this.id_paciente)
        .subscribe((response: any) => {
          console.log(response);
          
          this.paciente_nuevo = response;

          this.paciente_nombres = this.paciente_nuevo.nombres!;
          this.paciente_apellidos = this.paciente_nuevo.apellidos!;
          this.paciente_dni = this.paciente_nuevo.dni!;
          this.paciente_direccion = this.paciente_nuevo.direccion!;
          this.paciente_email = this.paciente_nuevo.email!;
          this.paciente_telefono = this.paciente_nuevo.telefono!;
        });
      }

    });
    
  }

  regresar() {
    window.history.back();
  }

  esNuevo():boolean {     
    if(this.id_paciente == 0) {
      return true;
    }else { 
      return false;
    } 
  }

  registrarPaciente():void {     
    this.paciente_nuevo.idPaciente = this.id_paciente;
    this.paciente_nuevo.nombres = this.paciente_nombres;
    this.paciente_nuevo.apellidos = this.paciente_apellidos;
    this.paciente_nuevo.dni = this.paciente_dni;
    this.paciente_nuevo.direccion = this.paciente_direccion;
    this.paciente_nuevo.email = this.paciente_email;
    this.paciente_nuevo.telefono = this.paciente_telefono;
    this.serviceAppPacienteService.postPaciente("pacientes", this.paciente_nuevo)
    .subscribe((response: any) => {
      this.router.navigate(['/pacientes']);
    });
  }
  
  modificarPaciente():void {     
    this.paciente_nuevo.idPaciente = this.id_paciente;
    this.paciente_nuevo.nombres = this.paciente_nombres;
    this.paciente_nuevo.apellidos = this.paciente_apellidos;
    this.paciente_nuevo.dni = this.paciente_dni;
    this.paciente_nuevo.direccion = this.paciente_direccion;
    this.paciente_nuevo.email = this.paciente_email;
    this.paciente_nuevo.telefono = this.paciente_telefono;
 
    this.serviceAppPacienteService.postPaciente("pacientes", this.paciente_nuevo)
    .subscribe((response: any) => {
      this.router.navigate(['/pacientes']);
    });
    
  }
}
