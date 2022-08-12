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
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userid = localStorage.getItem("id");
    
    this.recipeService.getMyRecipes(userid)
      .subscribe({
        next: (v) => {
          this.recipes = v;

          console.log(v);
        },
    });
  }


}
