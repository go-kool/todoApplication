import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //todoList: Item[] = [];
  //constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //this.todoList = this.todoService.todoArray;
  }

  title = 'app';

  
  
}

