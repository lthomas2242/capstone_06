import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';
import { item, ShoppingList } from 'src/app/_models/shoppingList';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  editForm!: FormGroup;
  editModal:any;
  selectedList: any;

  constructor(private ShoppingListService : ShoppingListService, private toastr: ToastrService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    
    // this.ShoppingListService
    // .getList()
    // .subscribe((list: ShoppingList[]) => {
    //   this.list = list.map(list => {
    //     return list;
    //   })
    // })
    this.getList();
    this.editModal = new window.bootstrap.Modal(
      document.getElementById('create-list')
    );
  }

  getList() {
    this.ShoppingListService
    .getList()
    .subscribe({
      next: (v) => {
        this.list = v;
      },
    })
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
    this.ShoppingListService.deleteList(id)
        .subscribe({
          next: (v) => {
            this.getList();
            this.toastr.success("List Deleted Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-top-right' 
            });
          }
        });
  }

  saveList():void { 
    let isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (isLoggedIn == "true") {
      let userId = localStorage.getItem("id");
      this.data = {
        _id: '',
        title: this.title,
        user_id: userId,
        items: this.allItems
      };

      this.ShoppingListService.createList(this.data) 
        .subscribe({
          next: (v) => {
            this.getList();
            this.toastr.success("List Added Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-top-right' 
            });
          }
        });
    } else {
      this.toastr.error('User is not loggedin !', 'Error!');
    }
    
  }

  get editFormData() {
    return this.editForm.controls;
  }

  editListBtn(selectedItem:ShoppingList, listId : any){
    this.title = selectedItem.title[0];
    this.allItems = selectedItem.items;
    this.editModal.show();
  }

}
