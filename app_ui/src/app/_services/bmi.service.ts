import { Injectable } from '@angular/core';
import { BMI } from '../_models/bmi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BMIService {

    public bmiData = new BMI();

  describeBMIAdult() : BMI{
    var bmi=((this.bmiData.weight/Math.pow((this.bmiData.height/100),2)));
    this.bmiData.bmiResult.bmi_value =  bmi;

    //calculate normal weight for height
    this.bmiData.bmiResult.normal_min_weight = 2.2 * bmi + (3.5* bmi) * ((this.bmiData.height/100)-1.5);
    this.bmiData.bmiResult.normal_max_weight = this.bmiData.bmiResult.normal_min_weight + 5.5;
    if(this.bmiData.gender != "female"){
      this.bmiData.bmiResult.normal_min_weight += 4;
      this.bmiData.bmiResult.normal_max_weight += 4;
    }

    if(bmi > 40.0){
      this.bmiData.bmiResult.bmi_category="Extreme obesity";
      this.bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi > 35.0 && bmi < 39.9){
      this.bmiData.bmiResult.bmi_category="Obesity-2";
      this.bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi > 30.0 && bmi < 34.9){
      this.bmiData.bmiResult.bmi_category="Obesity";
      this.bmiData.bmiResult.bmi_status="danger";
    }
    else if(bmi>25 && bmi<29.99) {
      this.bmiData.bmiResult.bmi_category="Overweight";
      this.bmiData.bmiResult.bmi_status="warning";
    }
    else if(bmi>18.5 && bmi<24.99) {
      this.bmiData.bmiResult.bmi_category="Healthy";
      this.bmiData.bmiResult.bmi_status="success";
    }
    else if(bmi<18.5) {
      this.bmiData.bmiResult.bmi_category="Underweight";
      this.bmiData.bmiResult.bmi_status="warning";
    }
    this.bmiData.is_calculated = true;
    return this.bmiData;
  }

  describeBMIChildren() : BMI{
    var bmi=((this.bmiData.weight/Math.pow((this.bmiData.height/100),2)));
    this.bmiData.bmiResult.percentile = 0
    if(this.bmiData.gender == "male"){
      if(bmi<14.8){
        this.bmiData.bmiResult.percentile =4;
      }
      else if(bmi>=14.8 && bmi<= 19.2){
        this.bmiData.bmiResult.percentile =5;
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
        this.bmiData.bmiResult.percentile = 85;
      }
      else if(bmi>18.6 && bmi< 28.4){
        this.bmiData.bmiResult.percentile = 90;
      }
      else if(bmi>21.3 && bmi< 30.6){
        this.bmiData.bmiResult.percentile = 95;
      }
      else if(bmi>30.6){
        this.bmiData.bmiResult.percentile = 100;
      }
    }else{
        if(bmi<14.2){
          this.bmiData.bmiResult.percentile =4;
        }
        else if(bmi>=14.2 && bmi<= 18.2){
          this.bmiData.bmiResult.percentile =5;
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
          this.bmiData.bmiResult.percentile = 85;
        }
        else if(bmi>18.4 && bmi< 28.3){
          this.bmiData.bmiResult.percentile = 90;
        }
        else if(bmi>19.5 && bmi< 33.0){
          this.bmiData.bmiResult.percentile = 97;
        }
        if(bmi>33.0){
          this.bmiData.bmiResult.percentile = 100;
        }
    }
    this.bmiData.bmiResult.bmi_value =  bmi;
    if(this.bmiData.bmiResult.percentile>=95){
      this.bmiData.bmiResult.bmi_category="Obese";
      this.bmiData.bmiResult.bmi_status="danger";
    }
    else if(this.bmiData.bmiResult.percentile>=85 && this.bmiData.bmiResult.percentile<95) {
      this.bmiData.bmiResult.bmi_category="Overweight";
      this.bmiData.bmiResult.bmi_status="danger";
    }
    else if(this.bmiData.bmiResult.percentile>=5 && this.bmiData.bmiResult.percentile<85) {
      this.bmiData.bmiResult.bmi_category="Healthy";
      this.bmiData.bmiResult.bmi_status="success";
    }
    else if(this.bmiData.bmiResult.percentile<5) {
      this.bmiData.bmiResult.bmi_category="Underweight";
      this.bmiData.bmiResult.bmi_status="warning";
    }
    this.bmiData.is_calculated = true;
    return this.bmiData;
  }
}
