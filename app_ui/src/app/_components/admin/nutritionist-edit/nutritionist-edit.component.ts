import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/_models/nutritionist';
import { NutritionistService } from 'src/app/_services/nutritionist.service';

@Component({
  selector: 'app-nutritionist-edit',
  templateUrl: './nutritionist-edit.component.html',
  styleUrls: ['./nutritionist-edit.component.css']
})
export class NutritionistEditComponent implements OnInit {
  public nutritionistId = "";
    public nutritionist: Nutritionist = {
      _id: '',
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      designation: '',
      city: '',
      pincode: '',
    }; 

  constructor(private NutritionistService: NutritionistService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(paramMap=>{
      this.nutritionistId = paramMap['id'];  
      this.getSingleNutritionist(this.nutritionistId);
          
  });
  
 
  }
  
  public getSingleNutritionist(nutritionist_id : string){
    console.log(this.nutritionist);  
    this.NutritionistService.getSingleNutritionist(nutritionist_id).subscribe((nutritionist: Nutritionist) => {
      this.nutritionist = {
       _id: nutritionist._id,
       first_name: nutritionist.first_name,
       last_name: nutritionist.last_name,
       email: nutritionist.email,
       address:nutritionist.address,
       designation:nutritionist.designation,
       city: nutritionist.city,
       pincode: nutritionist.pincode,
     }; 
   });
  }
  public updateNutritionist(nutritionist: Nutritionist): void{ 
    this.NutritionistService.editNutritionist(nutritionist);
    console.log(nutritionist);
    window.location.href='/admin/nutritionist-list';
      }  

}
