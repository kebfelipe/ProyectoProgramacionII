import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HomeComponent } from './home/home.component';
import { MedicoComponent } from './medico/medico.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './paciente/paciente.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HomeComponent,
    MedicoComponent,
    NotFoundComponent,
    PacientesComponent,
    PacienteComponent,
    LaboratoriosComponent,
    LaboratorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
