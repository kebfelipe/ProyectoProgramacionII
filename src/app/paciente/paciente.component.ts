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

  //declaramos las variables de cada input que obtenemos del formulario de registro
  id_paciente: number = 0;
  paciente_nombres: string = "";
  paciente_apellidos: string = "";
  paciente_dni: number = 0;
  paciente_direccion: string = "";
  paciente_email: string = "";
  paciente_telefono: number = 0;
  paciente_nuevo: Model_Paciente = new Model_Paciente();

  //declaramos las variables de rutas para tener acceso a las rutas y del service, para tener la información del service
  constructor(
    private route:ActivatedRoute, 
    private router:Router, 
    public serviceAppPacienteService: PacientesService,
  ) { }

  ngOnInit(): void {
    //Aqui guardamos al paciente si es nuevo, de lo contrario se edita
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap;
      this.id_paciente = params.idpaciente == null?0:params.idpaciente;
      //Esta función se encarga de traer la información del paciente que se va a editar
      if(this.id_paciente != 0){
        this.serviceAppPacienteService.get("pacientes/"+this.id_paciente)
        .subscribe((response: any) => {
          console.log(response);
          //asignamos a los inputs del formulario la informacion que estamos obteniendo del paciente a editar
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

  //Este boton es para regresar a la pagina donde se muestran todos los pacientes
  regresar() {
    window.history.back();
  }

  //Esta funcíon se encarga de verificar si el paciente que vamos a ingresar es nuevo, o si se va a editar a uno
  esNuevo():boolean {     
    if(this.id_paciente == 0) {
      return true;
    }else { 
      return false;
    } 
  }

  //guardamos la información del paciente en la base de datos
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
  
  //Modificamos la información del paciente que se está modificando
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
