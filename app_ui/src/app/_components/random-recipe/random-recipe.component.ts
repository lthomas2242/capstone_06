import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../_models/recipe';
import { RecipeService } from '../../_services/recipe.service';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

  public allRecipes :  Recipe[] = [];
  public randomRecipe = new Recipe();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes()
      .subscribe({
        next: (v) => {
          this.allRecipes = v;
          this.getRandomRecipe();
        },
    });
  }
  getRandomRecipe(){
    this.randomRecipe = this.allRecipes[Math.floor(Math.random() * this.allRecipes.length)];
  }
}
