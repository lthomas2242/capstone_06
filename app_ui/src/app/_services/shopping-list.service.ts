import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingList } from '../_models/shoppingList';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/api/list';

  constructor(private http: HttpClient, private router: Router,  private toastr: ToastrService) { }

  createList(list: ShoppingList) {
    return this.http.post<ShoppingList>(this.apiUrl+'/store', list)
  }

  updateList(list: ShoppingList) {
    console.log("sserv", list._id);
    return this.http.put<ShoppingList>(this.apiUrl+'/'+list._id, list)
  }

  getList() {
    return this.http.get<ShoppingList[]>(this.apiUrl);  
  }

  deleteList(id: String) {
    return this.http.delete(this.apiUrl+'/delete/'+id);
        // .subscribe(() => {
        //   this.router.navigate(['/cust-layout/home']);
        // });
  }

  getListById(listId: string) {
    console.log("service list", this.apiUrl+'/single/'+listId);
    return this.http.get<ShoppingList>(this.apiUrl+'/single/'+listId);
  }
}
