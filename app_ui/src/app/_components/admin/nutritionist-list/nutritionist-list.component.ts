import { Component, OnInit } from '@angular/core';
import { Nutritionist } from 'src/app/_models/nutritionist';
import { NutritionistService } from 'src/app/_services/nutritionist.service';

@Component({
  selector: 'app-nutritionist-list',
  templateUrl: './nutritionist-list.component.html',
  styleUrls: ['./nutritionist-list.component.css'],
  providers: [NutritionistService],
})
export class NutritionistListComponent implements OnInit {

  public nutritionists: Nutritionist[] = [];
  constructor(private NutritionistService: NutritionistService) { }

  ngOnInit(): void {
    this.getAllNutritionists();
  }
  deleteNutritionist(nutritionistId:string){
    this.NutritionistService.DeleteNutritionist(nutritionistId);  
    this.getAllNutritionists();
  }
  getAllNutritionists(){
    this.NutritionistService
    .getNutritionists()
    .subscribe((nutritionists: Nutritionist[]) => {
      this.nutritionists = nutritionists.map(nutritionist => {
        return nutritionist;
      })
    })
  }

}
