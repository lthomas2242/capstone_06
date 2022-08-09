import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent implements OnInit {
  public recipes : Recipe[] = [];
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeService.getMyRecipes()
      .subscribe({
        next: (v) => {
          this.recipes = v;

          console.log(v);
        },
    });
  }


}
