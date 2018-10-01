import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  todoCounter: number = 2;

  constructor() {
    this.todos = [
      {
        id: 0,
        title: "Aprender servicios",
        description: "Aprender servicios en Ionic para acceder a los datos."
      },
      {
        id: 1,
        title: "Aprender Phaser",
        description: "Hacer videojuegos con Javascript."
      }      
    ];
   }

   getTodos(): Todo [] {
     return this.todos;
   }

   saveTo(t) {
    t.id = this.todoCounter;
    this.todos.push(t);
    this.todoCounter++;
   }

}
