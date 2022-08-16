import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ToastrService } from 'ngx-toastr';

declare var window: any;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes : Recipe[] = [];
  saveModal:any;
  selected_recipe_id =0;
  current_page: number = 1;
  count: number = 10;

  constructor(private recipeService : RecipeService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllRecipes();
    this.saveModal = new window.bootstrap.Modal(
      document.getElementById('add-recipe')
    );
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes()
      .subscribe({
        next: (v) => {
          this.recipes = v;
        },
    });
  }

  addNewRecipeBtn(){
    this.selected_recipe_id= 0;
    this.saveModal.show();
  }
  
  editRecipeBtn(recipe_id : any){
    this.selected_recipe_id= recipe_id;
    this.saveModal.show();
  }

  refreshList(isSaved: boolean) {
    if(isSaved){
      this.getAllRecipes();
      this.saveModal.hide();
    }
  }

  deleteRecipe(recipe_id : any){
    this.recipeService.deleteRecipe(recipe_id)
        .subscribe({
          next: (v) => {
            this.getAllRecipes();
            this.toastr.success("Recipe Deleted Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
          },
          error: (e) => {
            this.toastr.error(e.error.message, 'Error', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
          }
      });
  }

  closeModal(close: boolean) {
    if(close){
      this.saveModal.hide();
    }
  }
}
