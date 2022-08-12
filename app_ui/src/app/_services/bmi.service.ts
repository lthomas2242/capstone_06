import { Injectable } from '@angular/core';
import { BMI, BMIResult } from '../_models/bmi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BMIService {

  calculateBMI(height :number,weight : number) : number{
    return((weight/Math.pow((height/100),2)));
  }

  describeBMIAdult(bmiData : BMI) : BMI{
    var bmi=((bmiData.weight/Math.pow((bmiData.height/100),2)));
    bmiData.bmiResult.bmi_value =  bmi;

    //calculate normal weight for height
    bmiData.bmiResult.normal_min_weight = 2.2 * bmi + (3.5* bmi) * ((bmiData.height/100)-1.5);
    bmiData.bmiResult.normal_max_weight = bmiData.bmiResult.normal_min_weight + 5.5;
    if(bmiData.gender != "female"){
      bmiData.bmiResult.normal_min_weight += 4;
      bmiData.bmiResult.normal_max_weight += 4;
    }

    if(bmi > 40.0){
      bmiData.bmiResult.bmi_category="Extreme obesity";
      bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi > 35.0 && bmi < 39.9){
      bmiData.bmiResult.bmi_category="Obesity-2";
      bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi > 30.0 && bmi < 34.9){
      bmiData.bmiResult.bmi_category="Obesity";
      bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi>25 && bmi<29.99) {
      bmiData.bmiResult.bmi_category="Overweight";
      bmiData.bmiResult.bmi_status="warning";
    }
    else if(bmi>18.5 && bmi<24.99) {
      bmiData.bmiResult.bmi_category="Healthy";
      bmiData.bmiResult.bmi_status="success";
    }
    else if(bmi<18.5) {
      bmiData.bmiResult.bmi_category="Underweight";
      bmiData.bmiResult.bmi_status="warning";
    }
    bmiData.is_calculated = true;
    return bmiData;
  }

  describeBMIChildren(bmiData : BMI) : BMI{
    var bmi=((bmiData.weight/Math.pow((bmiData.height/100),2)));
    bmiData.bmiResult.percentile = 0
    if(bmiData.gender == "male"){
      if(bmi<14.8){
        bmiData.bmiResult.percentile =4;
      }
      else if(bmi>=14.8 && bmi<= 19.2){
        bmiData.bmiResult.percentile =5;
      }
      // else if(bmi>15.1 && bmi< 19.8){
      //   percentile = 10;
      // }
      // else if(bmi>15.8 && bmi< 21.2){
      //   percentile = 25;
      // }
      // else if(bmi>16.6 && bmi< 23.0){
      //   percentile = 50;
      // }
      // else if(bmi>17.6 && bmi< 25.9){
      //   percentile = 75;
      // }
      else if(bmi>19.2 && bmi< 27.0){
        bmiData.bmiResult.percentile = 85;
      }
      else if(bmi>18.6 && bmi< 28.4){
        bmiData.bmiResult.percentile = 90;
      }
      else if(bmi>21.3 && bmi< 30.6){
        bmiData.bmiResult.percentile = 95;
      }
      else if(bmi>30.6){
        bmiData.bmiResult.percentile = 100;
      }
    }else{
        if(bmi<14.2){
          bmiData.bmiResult.percentile =4;
        }
        else if(bmi>=14.2 && bmi<= 18.2){
          bmiData.bmiResult.percentile =5;
        }
        // if(bmi>14.2 && bmi< 17.4){
        //   percentile =5;
        // }
        // else if(bmi>14.8 && bmi< 18.4){
        //   percentile = 10;
        // }
        // else if(bmi>15.5 && bmi< 19.8){
        //   percentile = 25;
        // }
        // else if(bmi>16.4 && bmi< 21.8){
        //   percentile = 50;
        // }
        // else if(bmi>17.4 && bmi< 24.5){
        //   percentile = 75;
        // }
        else if(bmi>18.2 && bmi< 26.5){
          bmiData.bmiResult.percentile = 85;
        }
        else if(bmi>18.4 && bmi< 28.3){
          bmiData.bmiResult.percentile = 90;
        }
        else if(bmi>19.5 && bmi< 33.0){
          bmiData.bmiResult.percentile = 97;
        }
        if(bmi>33.0){
          bmiData.bmiResult.percentile = 100;
        }
    }
    bmiData.bmiResult.bmi_value =  bmi;
    if(bmiData.bmiResult.percentile>=95){
      bmiData.bmiResult.bmi_category="Obese";
      bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmiData.bmiResult.percentile>=85 && bmiData.bmiResult.percentile<95) {
      bmiData.bmiResult.bmi_category="Overweight";
      bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmiData.bmiResult.percentile>=5 && bmiData.bmiResult.percentile<85) {
      bmiData.bmiResult.bmi_category="Healthy";
      bmiData.bmiResult.bmi_status="success";
    }
    else if(bmiData.bmiResult.percentile<5) {
      bmiData.bmiResult.bmi_category="Underweight";
      bmiData.bmiResult.bmi_status="warning";
    }
    bmiData.is_calculated = true;
    return bmiData;
  }

  calculateBMR(bmiData : BMI): BMI{
    if(bmiData.bmiResult == undefined){
      bmiData.bmiResult = new BMIResult();
    }
    if(bmiData.gender == "male"){
      bmiData.bmiResult.bmr_value = 66.5 + (13.75 * bmiData.weight ) + (5.003 * bmiData.height) - (6.75 * bmiData.age)
    }else if(bmiData.gender == "female"){
      bmiData.bmiResult.bmr_value = 655.1 + (9.563 * bmiData.weight) + (1.850 * bmiData.height) - (4.676 * bmiData.age)
    }
    return bmiData;
  }

  calculateCalories(bmiData : BMI): BMI{
    if(bmiData.bmiResult == undefined){
      bmiData.bmiResult = new BMIResult();
    }
    if(bmiData.activity === "sedentary"){
      bmiData.bmiResult.calories = bmiData.bmiResult.bmr_value * 1.2;
    }else if(bmiData.activity === "lightly"){
      bmiData.bmiResult.calories = bmiData.bmiResult.bmr_value * 1.375;
    }else if(bmiData.activity === "moderately"){
      bmiData.bmiResult.calories = bmiData.bmiResult.bmr_value * 1.55;
    }else if(bmiData.activity === "hard"){
      bmiData.bmiResult.calories = bmiData.bmiResult.bmr_value * 1.725;
    }else if(bmiData.activity === "extra"){
      bmiData.bmiResult.calories = bmiData.bmiResult.bmr_value * 1.9;
    }
    return bmiData;
  }
}
