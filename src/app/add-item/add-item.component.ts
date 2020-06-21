import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private toDoService: TodoService, private route: Router, private router: ActivatedRoute) { }

  public title = "";
  public description = "";

  ngOnInit(): void {
    if (this.route.url.includes("edit")) {
      const index = this.router.snapshot.paramMap.get('index');
      this.title = this.toDoService.todoArray[index].title;
      this.description = this.toDoService.todoArray[index].discription;
    }
  }

  addToList() {
    if (this.route.url.includes("edit")) {
      this.editList();
    } else {
      this.toDoService.addToList(this.title, this.description)
    }
    this.title = "";
    this.description = "";
    this.route.navigate(['/viewItems']);
    console.log(this.toDoService.todoArray);
  }

  editList() {
    const index = this.router.snapshot.paramMap.get('index');
    this.toDoService.editList(this.title, this.description, index);
  }
}
