import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }


  todoArray: Item[] = [];

   addToList(title:string,discription:string) {
    this.todoArray.push(new Item(title,discription))
  }

  deleteFromList(index:any)
  {
      this.todoArray.splice(index,1);
  }

  editList(title:string,discription:string,index:any) {
    this.todoArray[index] = new Item(title,discription);
  }
  
}
