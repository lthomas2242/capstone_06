import { Component, OnInit } from '@angular/core';
import { Ingredients, Nutritions, Recipe } from 'src/app/_models/recipe';

@Component({
  selector: 'app-recipe-save',
  templateUrl: './recipe-save.component.html',
  styleUrls: ['./recipe-save.component.css']
})
export class RecipeSaveComponent implements OnInit {

  public recipe = new Recipe();

  constructor() { }

  ngOnInit(): void {
    this.recipe.ingredients = [new Ingredients];
    this.recipe.nutritions = new Nutritions();
  }
  addRecipe(newRecipe : Recipe){
    console.log(this.recipe);
  }
  addIngredient(){
    this.recipe.ingredients.push(new Ingredients());
  }
}
