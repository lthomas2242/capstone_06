import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NutritionistService} from 'src/app/_services/nutritionist.service';

@Component({
  selector: 'app-add-nutritionist',
  templateUrl: './add-nutritionist.component.html',
  styleUrls: ['./add-nutritionist.component.css']
})
export class AddNutritionistComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private nutritionistService : NutritionistService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(4)]],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      address: ["", Validators.required],
      designation: ["", Validators.required],
      city: ["", Validators.required],
      pincode: ["", Validators.required]
    }
    );
  }
  public createUser() {
    this.submitted = true;
    console.log(this.userForm.value);
    //  // stop here if form is invalid
     if (this.userForm.invalid) {
        return;
    } else {
      this.nutritionistService.createUser(this.userForm.value);
      this.toastr.success('User registered successfully !', 'Success!');
    }
    
  }

}

