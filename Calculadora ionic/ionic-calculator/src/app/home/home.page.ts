import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private primerNum: number = 0;
  state = 'number';
  memory: number;
  operator: string;
  display: String = "0";
  //decimal: boolean = false; TODO

  public clickNumber(num: number) {
    if (this.state === 'number') {
      this.primerNum *= 10;
      this.primerNum += num;
      this.display = this.primerNum.toString();
    }

    if (this.state === 'operator') {
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
    switch (this.operator) {
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
    this.display = this.primerNum.toString();
  }

  public cambiarSigno() {
    this.primerNum *= -1;
    this.display = this.primerNum.toString();
  }
  public clickBorrar1() {
    this.primerNum = 0;
    this.display = "0";
    this.memory = 0;
  }

  public clickBorrar2() {
    this.primerNum = 0;
    this.display = this.primerNum.toString();
  }

  public clickPunto() {
    //TODO
  }
}

