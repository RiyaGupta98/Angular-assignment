import { Component, Input, EventEmitter, Output } from '@angular/core'; 
import { Todo } from 'src/app/03_pipes/models/todo.interface';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  @Input()
  todoItem: Todo

  @Input()
  ChoseTodo: Todo

  @Output()
  todoSelected = new EventEmitter<Todo>();

  selectTodo(todo: Todo)
  {
    this.todoSelected.emit(todo);
    }
};


