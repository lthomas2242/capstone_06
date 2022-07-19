import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material.module';

import { HomeComponent } from './_components/home/home.component';
import { FrameworkComponent } from './_layouts/framework/framework.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { CustomerLayoutComponent } from './_layouts/customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './_layouts/admin-layout/admin-layout.component';
import { LandingPageComponent } from './_components/landing-page/landing-page.component';
import { UserService } from './_services/user.service';
import { RegisterComponent } from './_components/register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    FrameworkComponent,
    AppComponent,
    LoginComponent,
    CustomerLayoutComponent,
    AdminLayoutComponent,
    LandingPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'cust-layout',
        component: CustomerLayoutComponent,
        children:[
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      },
      {
        path: 'admin-layout',
        component: AdminLayoutComponent,
        children:[
          {
            path: '',
            component: HomeComponent
          }
        ]
      },
    ])

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
