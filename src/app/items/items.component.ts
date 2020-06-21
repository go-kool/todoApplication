import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { TodoService } from '../todo.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  todoList: Item[] = [];

  constructor(private todoService:TodoService,
              private router:Router) { }

  ngOnInit(): void {
    this.todoList = this.todoService.todoArray;
  }

  // onEdit(timeStamp:Date) {
  //   this.router.navigate(['/edit',timeStamp]);
  // }
  
  onDelete(index:any) {
    this.todoService.deleteFromList(index);
  }
}
