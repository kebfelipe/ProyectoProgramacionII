import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { ConsultaComponent } from './consulta/consulta.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { NuevaconsultaComponent } from './nuevaconsulta/nuevaconsulta.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { InicioComponent } from './inicio/inicio.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ConsultaComponent,
    MedicosComponent,
    HomeComponent,
    MedicoComponent,
    NotFoundComponent,
    PacientesComponent,
    PacienteComponent,
    NuevaconsultaComponent,
    LaboratorioComponent,
    LaboratoriosComponent,
    InicioComponent,
    EspecialidadesComponent,
    EspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule,
    NgbDropdownModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
