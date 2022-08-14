import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/_services/recipe.service';
import { Recipe } from 'src/app/_models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public recipes : Recipe[] = [];
 

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes()
      .subscribe({
        next: (v) => {
          this.recipes = v;
        },
    });
  }
}
