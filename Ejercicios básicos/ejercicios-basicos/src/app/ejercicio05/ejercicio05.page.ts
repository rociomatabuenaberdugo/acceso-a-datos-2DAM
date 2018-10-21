import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  constructor(public alertController: AlertController) { }

  numMin: number = 0;
  numMax: number = 0;
  display: number = 0;

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El primer valor y el segundo valor no pueden ser el mismo.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  generar(a: number, b: number) {
    if (a < b) {
      this.numMax = b;
      this.numMin = a;
    }
    else if (a > b) {
      this.numMax = a;
      this.numMin = b;
    }
    console.log(this.numMin);
    console.log(this.numMax);
    this.display = +this.numMin + Math.floor(Math.random() * (this.numMax - this.numMin));
    console.log(this.display);
    return this.display;
  }

}
