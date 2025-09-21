import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[];
  constructor(private todoService:TodoService){}
  async ngOnInit(){
      this.todos = await this.todoService.getTodo();
  }

}
