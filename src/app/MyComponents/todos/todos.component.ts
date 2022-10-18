import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    this.settingSno()
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.settingSno()
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.settingSno()
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  settingSno() {
    let todolist: Array<Todo> = JSON.parse(localStorage.getItem("todos")!);
    let sno = 0
    todolist.forEach((res) => {
      res.sno = sno + 1;
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
