import { Component, OnInit } from '@angular/core';
import { BMI } from 'src/app/_models/bmi';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent implements OnInit {

    public bmiData = new BMI();
    public bmiResult :any ={
      normal_min_weight: 0,
      normal_max_weight: 0
    };
    constructor() {
    }

    ngOnInit(): void {
    }

    calculateBMI(){
      let bmi = this.calcBMI(this.bmiData.height,this.bmiData.weight);
      if(this.bmiData.age >2 && this.bmiData.age < 20){
        this.bmiData = this.describeBMIChildren()
      }else{
        this.bmiData = this.describeBMIAdult()
      }
    }

    calcBMI(height : number,weight : number){
        return weight / (height/100 * height/100);
    }

    describeBMIAdult(){
      var bmi=((this.bmiData.weight/Math.pow((this.bmiData.height/100),2)));
      this.bmiData.bmi_value =  bmi;

      //calculate normal weight for height
      this.bmiResult.normal_min_weight = 2.2 * bmi + (3.5* bmi) * ((this.bmiData.height/100)-1.5);
      this.bmiResult.normal_max_weight = this.bmiResult.normal_min_weight + 5.5;
      if(this.bmiData.gender != "female"){
        this.bmiResult.normal_min_weight += 4;
        this.bmiResult.normal_max_weight += 4;
      }

      if(bmi > 40.0){
        this.bmiData.bmi_category="Extreme obesity";
        this.bmiData.bmi_status="danger";
      }
      else if(bmi > 35.0 && bmi < 39.9){
        this.bmiData.bmi_category="Obesity-2";
        this.bmiData.bmi_status="danger";
      }
      else if(bmi > 30.0 && bmi < 34.9){
        this.bmiData.bmi_category="Obesity";
        this.bmiData.bmi_status="danger";
      }
      else if(bmi>25 && bmi<29.99) {
        this.bmiData.bmi_category="Overweight";
        this.bmiData.bmi_status="warning";
      }
      else if(bmi>18.5 && bmi<24.99) {
        this.bmiData.bmi_category="Healthy";
        this.bmiData.bmi_status="success";
      }
      else if(bmi<18.5) {
        this.bmiData.bmi_category="Underweight";
        this.bmiData.bmi_status="warning";
      }
      this.bmiData.is_calculated = true;
      return this.bmiData;
    }

    describeBMIChildren(){
      var bmi=((this.bmiData.weight/Math.pow((this.bmiData.height/100),2)));
      let percentile= 0
      if(this.bmiData.gender == "male"){
        if(bmi>14.8 && bmi< 19.2){
          percentile =5;
        }else if(bmi>15.1 && bmi< 19.8){
          percentile = 10;
        }
        else if(bmi>15.8 && bmi< 21.2){
          percentile = 25;
        }
        else if(bmi>16.6 && bmi< 23.0){
          percentile = 50;
        }
        else if(bmi>17.6 && bmi< 25.9){
          percentile = 75;
        }
        else if(bmi>18.2 && bmi< 27.0){
          percentile = 85;
        }
        else if(bmi>18.6 && bmi< 28.4){
          percentile = 90;
        }
        else if(bmi>21.3 && bmi< 30.6){
          percentile = 95;
        }
        else if(bmi>30.6){
          percentile = 100;
        }
      }else{
        if(this.bmiData.gender == "male"){
          if(bmi>14.2 && bmi< 17.4){
            percentile =5;
          }else if(bmi>14.8 && bmi< 18.4){
            percentile = 10;
          }
          else if(bmi>15.5 && bmi< 19.8){
            percentile = 25;
          }
          else if(bmi>16.4 && bmi< 21.8){
            percentile = 50;
          }
          else if(bmi>17.4 && bmi< 24.5){
            percentile = 75;
          }
          else if(bmi>18.0 && bmi< 26.5){
            percentile = 85;
          }
          else if(bmi>18.4 && bmi< 28.3){
            percentile = 90;
          }
          else if(bmi>19.5 && bmi< 33.0){
            percentile = 97;
          }
          else if(bmi>33.0){
            percentile = 100;
          }
        }
      }
      this.bmiData.bmi_value =  bmi;
      if(percentile>95){
        this.bmiData.bmi_category="Obese";
        this.bmiData.bmi_status="danger";
      }
      else if(percentile>85 && percentile<95) {
        this.bmiData.bmi_category="Overweight";
        this.bmiData.bmi_status="danger";
      }
      else if(percentile>5 && percentile<85) {
        this.bmiData.bmi_category="Healthy";
        this.bmiData.bmi_status="success";
      }
      else if(percentile<5) {
        this.bmiData.bmi_category="Underweight";
        this.bmiData.bmi_status="warning";
      }
      this.bmiData.is_calculated = true;
      return this.bmiData;
    }
}
