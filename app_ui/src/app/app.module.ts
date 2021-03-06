import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
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
import { ShoppingListComponent } from './_components/shopping-list/shopping-list.component';
import { RecipeSaveComponent } from './_components/admin/recipe-save/recipe-save.component';


@NgModule({
  declarations: [
    HomeComponent,
    FrameworkComponent,
    AppComponent,
    LoginComponent,
    CustomerLayoutComponent,
    AdminLayoutComponent,
    LandingPageComponent,
    RegisterComponent,
    ShoppingListComponent,
    RecipeSaveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'landing',
        component: LandingPageComponent
      },
      {
        path: '',
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
          },
          {
            path: 'shopping-list',
            component: ShoppingListComponent
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
          },
          {
            path: 'recipe-save',
            component: RecipeSaveComponent
          }
        ]
      }
      
    ])

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
