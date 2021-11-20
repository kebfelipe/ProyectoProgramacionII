import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  medicos() {
    this.router.navigate(['/medicos'])
  }

  especialidades(){
    this.router.navigate(['/especialidades'])
  }
  
  pacientes(){
    this.router.navigate(['/pacientes'])
  }

  consultas(){
    this.router.navigate(['/consultas'])
  }

  laboratorios(){
    this.router.navigate(['/laboratorios'])
  }
}
