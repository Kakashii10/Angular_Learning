import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Console } from 'console';
@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    console.log(this.newTodo);
    this.todos.push(this.newTodo);
    this.newTodo ='';
    console.log(this.todos);
  }
  deleteTodo(index: number){
    console.log(index);
   this.todos.splice(index,1);
   console.log(this.todos);
  }
}
