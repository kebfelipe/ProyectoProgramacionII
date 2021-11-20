import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'consultas', component:ConsultaComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: "", component: HomeComponent},

  //medicos
  {path: 'medicos', component: MedicosComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'medico', component: MedicoComponent},
  {path: 'medico/:idmedico', component: MedicoComponent},
  //Rutas Pacientes
  {path: 'pacientes', component: PacientesComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'paciente/:idpaciente', component: PacienteComponent},
  //Laboratorios
  {path: 'laboratorios', component: LaboratoriosComponent},
  {path: 'laboratorio', component: LaboratorioComponent},
  {path: 'laboratorio/:idexamen', component: LaboratorioComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
