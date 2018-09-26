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
  display: String = '0';

  public clickNumber(num: number) {
    if(this.state === 'number') {
      this.primerNum *= 10;
      this.primerNum += num;
      this.display = this.primerNum.toString();
    }

    if(this.state === 'operator') {
      this.primerNum = num;
      this.display = this.primerNum.toString();
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
      }
      this.display = this.primerNum.toString();
    }

    public clickBorrar() {
      this.primerNum = 0;
      this.display = "0";
    }

    public cambiarSigno() {
      this.primerNum *= -1;
      this.display = this.primerNum.toString();
    }

    public clickPunto() {
      //todo
    }

    public clickParentesis() {
      //todo
    }
  }

