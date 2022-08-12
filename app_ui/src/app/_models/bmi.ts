export class BMI {
    age!: number;
    gender!: string;
    height!: number;
    weight!: number;
    activity!:string;
    is_calculated!:boolean;
    bmiResult:BMIResult = new BMIResult();
}

export class BMIResult {
    bmi_value!:number;
    percentile!:number;
    bmi_category!:string;
    bmi_status!:string;
    normal_min_weight!: number;
    normal_max_weight!: number;
    bmr_value!:number;
    calories!:number;
}
