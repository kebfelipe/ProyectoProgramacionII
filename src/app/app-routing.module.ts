import { NotFoundComponent } from './not-found/not-found.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'medicos', component: MedicosComponent},
  {path: 'medico', component: MedicoComponent},
  {path: 'medico/:idmedico', component: MedicoComponent},
  //Rutas Pacientes
  {path: 'pacientes', component: PacientesComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'paciente/:idpaciente', component: PacienteComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
