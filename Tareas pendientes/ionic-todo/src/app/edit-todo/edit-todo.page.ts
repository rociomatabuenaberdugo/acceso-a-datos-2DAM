import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.page.html',
  styleUrls: ['./edit-todo.page.scss'],
})
export class EditTodoPage implements OnInit {

  todo: Todo;
  edit = false;

  constructor(private todoService: TodoService, private navController: NavController,
    private activatedRoute: ActivatedRoute) {
    this.todo = {
      id: this.todoService.todoCounter,
      title: "",
      description: "",
      priority: []
    };
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.edit = true;
      this.todo = this.todoService.getTodoById(+id);
    }
  }

  saveTodo(t: Todo) {
    if (this.edit) {
      this.todoService.saveTodo(this.todo).then(
        () => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    } else {
      this.todoService.newTodo(this.todo).then(
        () => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    }
  }

}
