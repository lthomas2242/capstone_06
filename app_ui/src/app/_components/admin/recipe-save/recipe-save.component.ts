import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredients, Nutritions, Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-save',
  templateUrl: './recipe-save.component.html',
  styleUrls: ['./recipe-save.component.css']
})
export class RecipeSaveComponent implements OnInit {

  public recipe = new Recipe();

  constructor(private recipeService : RecipeService,
    public router: Router) { }

  ngOnInit(): void {
    this.recipe.ingredients =  [];
    this.recipe.nutritions = new Nutritions();
    this.recipe.directions=[];
  }
  addRecipe(newRecipe : Recipe){
    console.log(newRecipe);
    this.recipeService.createRecipe(newRecipe)
    .subscribe({
      next: (v) => {
        console.log(v);
      },
  });
  }
  addIngredient(){
    this.recipe.ingredients.push(new Ingredients());
  }
  addDirection(){
    this.recipe.directions.push(new String());
  }
}
