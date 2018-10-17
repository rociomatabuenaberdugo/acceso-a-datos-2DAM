import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre: String;

  muestraNombre() {
    this.nombre = "Rocío Matabuena Berdugo";
    return this.nombre;
  }

  limpiaNombre() {
    this.nombre = "";
    return this.nombre;
  }

}
