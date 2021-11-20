import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { model_Consulta } from '../model/model_Consulta';
import { NuevaconsultaComponent } from '../nuevaconsulta/nuevaconsulta.component';
import { ServiceconsultaService } from '../service/serviceconsulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  
  crearusuario = false
  minombre = window.sessionStorage.getItem("Nombre");
  miapellido = window.sessionStorage.getItem("Apellido");
  displayedColumns: string[] = ['Fecha', 'Consultorio', 'Especialidad', 'Medico','Paciente'];
  dataSource! : MatTableDataSource<any>;
  consulta: model_Consulta[] = [];

  //MÉTODO PARA FILTRAR LA LISTA
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog,private ServicioConsulta:ServiceconsultaService) { 
    //CREANDO SESIÓN
  }


  ngOnInit(): void {
  this.getConsulta()
  }

  //ACCIÓN BOTÓN ELIMINAR
  eliminar(valor:any){
/*
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
         codigo: valor
      }
       
 
     });*/

  }

  //MÉTODO PARA ABRIR EL DIÁLOGO DEL BOTÓN EDITAR
  openDialog(elemento:any, elemtdos : any) {
   /* const dialogRef = this.dialog.open(EditarComponent, {
     data: {
        codigo: elemento,
        name : elemtdos,
        contexto : "Región"
     }
    });;*/
    
}

nuevoUsuario(){
 let dialogo = this.dialog.open(NuevaconsultaComponent )
 console.log('HOLAAAA')
}

getConsulta(){
  /*
  this.ServicioConsulta.get("consultas").subscribe(async(data:model_Consulta[] | model_Consulta) => {
    console.log(await data)
    let region:model_Consulta[] = data as model_Consulta[];
    this.dataSource = new MatTableDataSource(region);
  }, err => console.log('error al consultar info ',err)
  );*/
  
  this.ServicioConsulta.get("consultas")
  .subscribe(async (response: any) => {
    console.log(await response)
     this.consulta = response;
     
    this.dataSource = new MatTableDataSource(this.consulta);
  });
/*
  this.regionservice.consultaInformacionRegion("RR").subscribe(async(data: Region[] | Error[] ) => {
    console.log(await data)
    let region:Region[] = data as Region[];
    region[0].nombre;
    
    
    this.dataSource = new MatTableDataSource(region);
  }, err => console.log('error al consultar info ',err)
  );*/
}

}
