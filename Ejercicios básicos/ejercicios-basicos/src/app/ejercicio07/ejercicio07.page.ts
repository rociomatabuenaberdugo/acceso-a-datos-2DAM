import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  pesetas: number;
  euros: number;

  constructor() { }

  ngOnInit() {
  }

  convertidorPesetas(){
    this.euros = this.pesetas / 166.39;
  }

  convertidorEuros(){
    this.pesetas = this.euros * 166.39;
  }
}
