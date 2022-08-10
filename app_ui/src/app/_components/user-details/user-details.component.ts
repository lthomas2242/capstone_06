import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id =  localStorage.getItem('id');
  first_name =  localStorage.getItem('first_name');
  last_name =  localStorage.getItem('last_name');
  email =  localStorage.getItem('email');
  height =  localStorage.getItem('height');
  weight =  localStorage.getItem('weight');
  gender =  localStorage.getItem('gender');
}
