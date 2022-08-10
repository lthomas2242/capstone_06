import { Component, OnInit } from '@angular/core';
import { BMI, BMIResult } from 'src/app/_models/bmi';
import { BMIService } from 'src/app/_services/bmi.service';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent implements OnInit {

    public bmiData = new BMI();
    constructor(public bmiService : BMIService) {
    }

    ngOnInit(): void {
    }

    calculateBMI(){
      let bmi = this.calcBMI(this.bmiData.height,this.bmiData.weight);
      if(this.bmiData.age >2 && this.bmiData.age < 20){
        this.bmiData = this.bmiService.describeBMIChildren()
      }else{
        this.bmiData = this.bmiService.describeBMIAdult()
      }
    }

    calcBMI(height : number,weight : number){
        return weight / (height/100 * height/100);
    }
    
}
