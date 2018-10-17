import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  constructor() { }

  numMin: number = 0;
  numMax: number = 0;
  display: number = 0;
  
  ngOnInit() {
  }

  generar(a: number, b: number){
    if (a < b){
      this.numMax = b;
      this.numMin = a;
    }
    else if (a > b) {
      this.numMax = a;
      this.numMin = b;
    }
    else{
      this.numMin = a;
      this.numMax = b;
    }
    return this.display = Math.floor(Math.random()*this.numMax)+this.numMin+1;
  }

}
