import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../interfaces/todo';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: Todo[] = [];
  myIcon: String;
  iconNames: Array<String> = ['star-outline', 'star'];
  constructor(
    private alertController: AlertController,
    private todoService: TodoService,
    private navController: NavController
  ) { this.myIcon = this.iconNames[Math.floor(Math.random() *
    this.iconNames.length)]; }

  ngOnInit() { }

  ionViewWillEnter() {
    this.todoService.getTodos().then(
      data => this.todos = data
    );
  }

  private like = false;

  setStar(h: boolean) {
    this.like = h;
  }

  async deleteDialog(title: String, id: number) {
    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: '¿Estás seguro de que deseas <strong>borrar</strong> la tarea <strong> ' + title + '</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelando...');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.todoService.deleteTodo(id).then(
              () => this.todoService.getTodos().then(
                (data) => this.todos = data
              )
            );
          }
        }
      ]
    });

    await alert.present();
  }

  editTodo(id: number) {
    this.navController.navigateForward('/edit/' + id);
  }
}

