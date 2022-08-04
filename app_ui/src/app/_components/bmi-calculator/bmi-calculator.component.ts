import { Component, OnInit } from '@angular/core';
import { BMI } from 'src/app/_models/bmi';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BMICalculatorComponent implements OnInit {

    public bmiData = new BMI();

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
      this.bmiData.bmi_value =  bmi;
      if(bmi>30){
        this.bmiData.bmi_category="obese";
        this.bmiData.bmi_status="danger";
      }
      else if(bmi>25 && bmi<29.99) {
        this.bmiData.bmi_category="overweight";
        this.bmiData.bmi_status="danger";
      }
      else if(bmi>18.5 && bmi<24.99) {
        this.bmiData.bmi_category="healthy";
        this.bmiData.bmi_status="success";
      }
      else if(bmi<18.5) {
        this.bmiData.bmi_category="underweight";
        this.bmiData.bmi_status="warning";
      }
      this.bmiData.is_calculated = true;
      return this.bmiData;
    }
}
