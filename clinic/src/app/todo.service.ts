import { Injectable } from '@angular/core';
import axios from 'axios';
import { Todo } from './models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api='https://jsonplaceholder.typicode.com/todos';;
  async getTodo() : Promise<Todo[]>{
    const response=await axios.get<Todo[]>(this.api);
    return response.data;
  }
}
