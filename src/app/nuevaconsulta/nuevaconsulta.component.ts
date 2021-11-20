import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { model_Consulta } from '../model/model_Consulta';
import { Model_Medico } from '../model/model_Medico';
import { Model_Paciente } from '../model/model_Paciente';
import { ServiceAppMedicoService } from '../service/service-app-medico.service';
import { ServiceconsultaService } from '../service/serviceconsulta.service';
import { PacientesService } from '../service/servicePacientes/pacientes.service';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { model_NewConsulta } from '../model/model_NewConsulta';
import { MODEL_NEWCONSU } from '../model/MODEL_NEWCONSU';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-nuevaconsulta',
  templateUrl: './nuevaconsulta.component.html',
  styleUrls: ['./nuevaconsulta.component.css']
})
export class NuevaconsultaComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  contexto = "Consulta"
  idpaciente : string = "";
  idmedico : string = "";
  fecha=new Date();
  consultorio : string = "";
  especialidad : string = "";
  PacienteControl = new FormControl('', Validators.required);
  MedicoControl = new FormControl('', Validators.required);
  pacientedatos: Model_Paciente[] = [];
  medicodatos: Model_Medico[] = [];
  Consulta_Nueva: model_NewConsulta = new model_NewConsulta();
  ClaseEnvia: MODEL_NEWCONSU = new MODEL_NEWCONSU();


  constructor(private matDialogRef: MatDialogRef<NuevaconsultaComponent>, public serviceAppPacientesService: PacientesService,public serviceAppMedicoService: ServiceAppMedicoService,
    private ServicioConsulta:ServiceconsultaService,public datepipe: DatePipe,private router:Router) {
    
   }

  ngOnInit(): void {
    this.ConsultaPaciente();
    this.ConsultaMedicos();
  }

  agregarConsulta(){
    console.log(this.idpaciente, this.idmedico, this.datepipe.transform(this.fecha, 'yyyy-MM-dd HH:mm'), this.consultorio, this.especialidad)
    this.Consulta_Nueva.id_consulta = 3;
    this.Consulta_Nueva.fecha = this.datepipe.transform(this.fecha, 'yyyy-MM-dd hh:mm:ss');
    this.Consulta_Nueva.numConsultorio = this.consultorio;
    this.Consulta_Nueva.Especialidad.nombre = this.especialidad;
    this.Consulta_Nueva.medico.idMedico = Number(this.idmedico);
    this.Consulta_Nueva.paciente.idPaciente = this.idpaciente;
    this.ClaseEnvia.consulta = this.Consulta_Nueva;
    this.ServicioConsulta.postConsulta("consultas", this.ClaseEnvia)
    .subscribe((response: any) => {
      console.log(response)
    });

   // this.onClose();
   // location.reload();
}

  ngonDestroy() {
    this.matDialogRef.close();
  }

  onClose() {
    this.matDialogRef.close();
  }

  ConsultaPaciente(){
    this.serviceAppPacientesService.get("pacientes")
    .subscribe((response: any) => {
      this.pacientedatos = response;
    });

  }

  ConsultaMedicos(){

    this.serviceAppMedicoService.get("medicos")
    .subscribe((response: any) => {
      this.medicodatos = response;

    });

  }

}
