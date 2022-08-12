import { Component, OnInit } from '@angular/core';
import { Nutritionist } from 'src/app/_models/nutritionist';
import { NutritionistService } from 'src/app/_services/nutritionist.service';

@Component({
  selector: 'app-list-nutritionist',
  templateUrl: './list-nutritionist.component.html',
  styleUrls: ['./list-nutritionist.component.css'],
  providers: [NutritionistService],
})
export class ListNutritionistComponent implements OnInit {
  public nutritionists: Nutritionist[] = [];
  current_page: number = 1;
  count: number = 6;
  searchText: any;

  constructor(private NutritionistService: NutritionistService) { }

  ngOnInit(): void {
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
