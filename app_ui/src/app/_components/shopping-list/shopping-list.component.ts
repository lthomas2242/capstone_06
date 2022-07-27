import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';
import { item, ShoppingList } from 'src/app/_models/shoppingList';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // public newTask: any;
  // public items : string[] = [];

  public title!: String;
  public item_title: any;
  public item: any;
  public allItems : item[] = [];

  public data =  new ShoppingList;
  list: ShoppingList[] | undefined;

  constructor(private ShoppingListService : ShoppingListService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ShoppingListService
    .getList()
    .subscribe((list: ShoppingList[]) => {
      this.list = list.map(list => {
        return list;
      })
    })
  }

  showSuccess() {
    this.toastr.success('List added !', 'Sucsess!');
  }


 
  addList() {
    //this.toastr.success('List added !', 'Sucsess!');
    let newitem =  new item(); 
    newitem.item_title = this.item_title;
    this.allItems.push(newitem);
    this.item_title = '';  

    //console.log("kkk", this.allItems.splice(0, 1));
    
  }

  saveList():void { 
    
    //let arr = this.allItems.splice(0, 1).map(d=> d.item);
    this.data = {
      _id: '',
      title: this.title,
      user_id: "user888",
      items: this.allItems
    };
    //console.log("save", this.data);
    this.ShoppingListService.createList(this.data);
    //this.toastr.success('List added !', 'Sucsess!');
  }

}
