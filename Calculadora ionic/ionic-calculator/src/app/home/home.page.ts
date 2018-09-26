import { Component } from '@angular/core';

@Component({ //Decorador
  selector: 'app-home', //nombre de la etiqueta personalizada
  templateUrl: 'home.page.html', //plantilla donde modifico html
  styleUrls: ['home.page.scss'],  //plantilla donde modifico css
})
export class HomePage {
  private primerNum: number = 0;
  state = 'number';
  memory: number;
  operator: string;
  display: number = 0;

  public clickNumber(num: number) {
    if(this.state === 'number') {
      this.primerNum *= 10;
      this.primerNum += num;
      this.display = this.primerNum;
    }

    if(this.state === 'operator') {
      this.primerNum = num;
      this.display = this.primerNum;
      this.state = 'number';
    }
  }

  public clickOperator(op: string) {
    this.memory = this.primerNum;
    this.state = 'operator';
    this.operator = op;
    }

    public clickIgual() {
      switch(this.operator) {
        case '+':
          this.primerNum += this.memory;
        break; 
        case '-':
          this.primerNum = this.memory - this.primerNum;
        break;
        case '*':
          this.primerNum *= this.memory;
        break; 
        case '/':
          this.primerNum = this.memory / this.primerNum;
        break;
        case '%':
          this.primerNum = this.memory % this.primerNum;
        break;      
        default:
      }
      this.memory = this.display;
      this.display = this.primerNum;
    }

    public clickBorrar(borrar: string) {
      this.state = 'operator';
      this.operator = borrar;
      if(this.operator === 'AC'){
        this.primerNum = 0;
        this.memory = 0;
        this.display = 0;
      }
      if(this.operator === 'C'){
        this.primerNum -= this.display;
        this.memory = this.memory;
        this.display = 0;       
      }      
    }

    public cambiarSigno() {
      this.primerNum *= -1;
      this.display = this.primerNum;
    }

    public clickPunto() {
      //todo
    }

    public clickParentesis() {
      //todo
    }
  }

