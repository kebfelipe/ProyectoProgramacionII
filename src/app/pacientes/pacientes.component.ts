import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model_Paciente } from '../model/model_Paciente';
import { PacientesService } from '../service/servicePacientes/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Model_Paciente[] = [];
  constructor(
    private router:Router,
    public serviceAppPacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
    this.serviceAppPacientesService.get("pacientes")
      .subscribe((response: any) => {
        this.pacientes = response;
      });
  }

  verPaciente(idPaciente: any) : void{
    if(idPaciente == 0){
      this.router.navigate(['/paciente']);
    }else{
      this.router.navigate(['/paciente/' + idPaciente]);
    }
  }

  regresar() {
    window.history.back();
  }

  eliminarPaciente(idPaciente: any): void{
    console.log(idPaciente);
    
    this.serviceAppPacientesService.delete("pacientes/"+idPaciente)
      .subscribe((response: any) => {
        window.location.reload();
      });
  }


}
