import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';
import { item, ShoppingList } from 'src/app/_models/shoppingList';
import { ToastrService } from 'ngx-toastr';
declare var window: any;

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public title!: String;
  public item_title: any;
  public item: any;
  public allItems : item[] = [];

  public data =  new ShoppingList;
  list: ShoppingList[] | undefined;

  editModal:any;
  selected_list_id = 0;

  constructor(private ShoppingListService : ShoppingListService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.ShoppingListService
    .getList()
    .subscribe((list: ShoppingList[]) => {
      this.list = list.map(list => {
        return list;
      })
    })

    this.editModal = new window.bootstrap.Modal(
      document.getElementById('edit-list')
    );
  }

  showSuccess() {
    this.toastr.success('List added !', 'Sucsess!');
  }


 
  addList() {
    let newitem =  new item(); 
    newitem.item_title = this.item_title;
    this.allItems.push(newitem);
    this.item_title = '';     
  }

  deleteList(id: String) {
    this.toastr.success('Deleted successfully !', 'Sucsess!');
    this.ShoppingListService.deleteList(id);
  }

  saveList():void { 
    // var userId = "userID";
    let isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (isLoggedIn == "true") {
      let userId = localStorage.getItem("id");
      this.data = {
        _id: '',
        title: this.title,
        user_id: userId,
        items: this.allItems
      };

      this.ShoppingListService.createList(this.data);
    } else {
      this.toastr.error('User is not loggedin !', 'Error!');
    }
    
  }

  editListBtn(listId : any){
    this.selected_list_id= listId;
    this.editModal.show();
  }

}
