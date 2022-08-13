import { Component, OnInit } from '@angular/core';
import { BMI, BMIResult } from 'src/app/_models/bmi';
import { BMIService } from 'src/app/_services/bmi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent implements OnInit {

    public bmiData = new BMI();
    public activities : any =[];

    constructor(public bmiService : BMIService,public router: Router) {
    }

    ngOnInit(): void {
    }

    calculateBMI(){
      let bmi = this.calcBMI(this.bmiData.height,this.bmiData.weight);
      if(this.bmiData.age >2 && this.bmiData.age < 20){
        this.bmiData = this.bmiService.describeBMIChildren( this.bmiData);
      }else{
        this.bmiData = this.bmiService.describeBMIAdult( this.bmiData);
        if(this.bmiData.bmiResult != undefined){
          this.bmiData = this.bmiService.calculateBMR( this.bmiData);
          this.bmiData = this.bmiService.calculateCalories( this.bmiData);
        }
      }
    }

    calcBMI(height : number,weight : number){
        return weight / (height/100 * height/100);
    }

    getRecipesByBMI(){
      localStorage.setItem("bmi",this.bmiData.bmiResult.calories.toString());
      this.router.navigate(['/user/recipe-list']);
    }
}
