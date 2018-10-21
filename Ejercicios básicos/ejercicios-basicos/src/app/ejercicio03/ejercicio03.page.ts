import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  constructor() { }

  display: number = 0;


  ngOnInit() {
    this.display = 0;
  }

  restaNumero() {
    this.display -= 1;
    return this.display;
  }

  sumaNumero() {
    this.display += 1;
    return this.display;
  }

  reseteaNumero() {
    this.display = 0;
    return this.display;
  }

}
