import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  nwcodcd : string = "";
  one: string = "";
  two: string = "";
  nwnomcd : string = "";
  nwcodfox: string = "";
  nwregion:string = "";
  nwptcober: string = "";
  Predeterminado : string = "";
  animalControl = new FormControl('', Validators.required);
  CoberturaControl = new FormControl('', Validators.required);
  //regiondatos: Region[] = [];
  //private filtroRegion: Array<Region> = [];
  //cobertura: Cobertura[] = [];
  //private filtroCobertura: Array<Cobertura> = [];
  //@ViewChild('multiUserSearch') multiUserSearchInput: ElementRef;
  //@ViewChild('FiltroRegion') FiltroRegionInput: ElementRef;

  constructor(private matDialogRef: MatDialogRef<NuevaconsultaComponent>) { }

  ngOnInit(): void {
    this.ConsultaRegion();
    this.ConsultaCobertura();
  }

  onInputChange(){
    /*
    const searchInput = this.multiUserSearchInput.nativeElement.value ? 
    this.multiUserSearchInput.nativeElement.value.toLowerCase(): '';
    this.cobertura = this.filtroCobertura.filter(u => {
      const nombre: string = u.codigo.toLowerCase();
      return nombre.indexOf(searchInput) > -1;
    });
  */
    }

    onFiltroRegion(){
      /*
      const filtroInput = this.FiltroRegionInput.nativeElement.value ?
      this.FiltroRegionInput.nativeElement.value.toLowerCase(): '';
      this.regiondatos = this.filtroRegion.filter(u => {
        const name: string = u.nombre.toLowerCase();
        return name.indexOf(filtroInput) > -1;
      });*/
    }

  agregarCentroDistri(){
/*
    console.log(this.nwcodcd,this.nwnomcd,this.nwcodfox,this.nwregion,this.nwptcober)
    
    this.consuCentrosDis.insertaCentroDis("ICD",this.nwcodcd,this.nwnomcd,this.nwcodfox,this.nwregion,this.nwptcober).subscribe(async(data: CentrosDis[] | Error[] ) => {
      console.log(await data)
      
      
    }, err => console.log('error al INSERTAR ',err)
    );*/

    this.onClose();
    location.reload();
}

  ngonDestroy() {
    this.matDialogRef.close();
  }

  onClose() {
    this.matDialogRef.close();
  }

  ConsultaRegion(){
/*
    this.regionservice.consultaInformacionRegion("RR").subscribe(async(data: Region[] | Error[] ) => {
      console.log(await data)
      let region:Region[] = data as Region[];
      region[0].nombre;
      this.regiondatos = region;
      this.filtroRegion = region;
    
    }, err => console.log('error al consultar info ',err)
    );*/
  }

  ConsultaCobertura(){
/*
    this.consuCentrosDis.informacionCoberturas().subscribe(async(data: Cobertura[] | Error[] ) => {
      console.log(await data)
      let datoscober:Cobertura[] = data as Cobertura[];
      this.cobertura = datoscober;
      this.filtroCobertura = datoscober;
      
    }, err => console.log('error al consultar info ',err)
    );*/
  }

}
