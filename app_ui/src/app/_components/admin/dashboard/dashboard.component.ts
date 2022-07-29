import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/_services/recipe.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public allRecipesCount = 0;
  public approvedRecipesCount = 0;
  public allUsersCount = 0;
  constructor(private recipeService : RecipeService,private userService : UserService) { }

  ngOnInit(): void {
    this.getAllRecipesCount();
    this.getApprovedRecipesCount();
    this.getAllUserCount();
  }

  getAllRecipesCount(){
      this.recipeService.getAllRecipesCount()
      .subscribe({
        next: (v) => {
          this.allRecipesCount = v;
        },
    });
  }

  getApprovedRecipesCount(){
      this.recipeService.getApprovedRecipesCount()
      .subscribe({
        next: (v) => {
          this.approvedRecipesCount = v;
        },
    });
  }

  getAllUserCount(){
    this.userService.getAllUsersCount()
    .subscribe({
      next: (v) => {
        this.allUsersCount = v;
      },
  });
}
}
