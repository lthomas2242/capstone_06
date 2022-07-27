import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

   // url to server
   private recipeUrl = 'http://localhost:3000/api/recipe';

  constructor(private http: HttpClient, private router: Router) { }


  createRecipe(recipe: Recipe) : Observable<any>{
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }
}
