import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  todo: any;

  constructor(private todoService: TodoService, private navController: NavController) {
    this.todo = {
      title: "",
      description: "",
    }
   }

  ngOnInit() {
  }

  saveTodo() {
    this.todoService.saveTo(this.todo);
    this.navController.goBack(true);
  }

}
