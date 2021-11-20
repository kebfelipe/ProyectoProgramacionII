import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: '*', opacity: 0 }),
            animate('500ms ease-in-out')
          ]
        ),

      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  usuario = ""
  pass = ""
  respuesta:String="";
  
      constructor(
                  
                  private router:Router) {
    
      }
      ngOnInit(){
        sessionStorage.clear()
      }
  
      //PERMITIR EL INGRESO DE LOS USUARIOS VALIDANDO USUARIO, CONTRASEÑA Y CREANDO LAS VARIABLES DE SESION PARA 
      //SU USO POSTERIOR
      validarLogin(){
        
              this.router.navigateByUrl('/inicio');
            }
            
  
          
          
  
  
        
      
  
      


}
