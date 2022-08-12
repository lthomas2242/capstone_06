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


  getAllRecipes() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl);
  }

  getRecipeById(recipe_id : any)  : Observable<any> {
    return this.http.get<Recipe>(this.recipeUrl+"/"+recipe_id);
  }

  createRecipe(recipe: Recipe) : Observable<any>{
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  updateRecipe(recipe: Recipe) : Observable<any>{
    return this.http.put<Recipe>(this.recipeUrl+"/"+recipe._id, recipe);
  }

  deleteRecipe(recipe_id: any) : Observable<any>{
    return this.http.delete<Recipe>(this.recipeUrl+"/"+recipe_id);
  }

  getAllRecipeIds() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/ids");
  }

  getAllRecipesCount() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/count/all");
  }

  getApprovedRecipesCount() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/count/approved");
  }


  getMyRecipes(userid: any) : Observable<any>{ 
    console.log("service");

    return this.http.get<Recipe>(this.recipeUrl+"/byusers/"+userid);
  }
  getRecipesByFilters() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/filters");
  }

  getAllApprovedRecipes() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/approved");
  }
}
