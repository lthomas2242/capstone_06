import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // public newTask: any;
  // public items : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // public addToList() {
  //   if (this.newTask == '') {
  //   }
  //   else {
  //       this.items.push(this.newTask);
  //       this.newTask = '';
  //   }
  // }

  // public deleteTask(index : number) {
  //     this.items.splice(index, 1);
  // }

  public title!: String;
  public item_title: any;
  public item: any;
  public tasks : any[] = [];
 
  addList() {
    this.tasks.push({item: this.item_title});
    this.item_title = '';
    this.title;
    console.log(this.tasks);
  }

  saveList() {
    console.log(this.tasks);
  }

}
