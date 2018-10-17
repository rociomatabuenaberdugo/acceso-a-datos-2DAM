import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  constructor() { }

  nombre: String;
  depende: number = 1;
  boton: String = "MOSTRAR NOMBRE";

  ngOnInit() {
  }

  muestraNombre() {
    this.nombre = "Rocío Matabuena Berdugo";
    return this.nombre;
  }

  limpiaNombre() {
    this.nombre = "";
    return this.nombre;
  }

  dependeNombre() {
    if (this.depende % 2 == 0) {
      this.boton = "MOSTRAR NOMBRE";
      this.limpiaNombre();
    } else {
      this.boton = "LIMPIAR NOMBRE";
      this.muestraNombre();
    }
    this.depende += 1;
  }

}
