import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
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
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListComponent } from './_components/admin/recipe-list/recipe-list.component';
import { RecipeService } from './_services/recipe.service';
import { RandomRecipeComponent } from './_components/random-recipe/random-recipe.component';
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { UserListComponent } from './_components/admin/user-list/user-list.component';
import { RecipeApproveComponent } from './_components/admin/recipe-approve/recipe-approve.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';
import { DashboardComponent } from './_components/admin/dashboard/dashboard.component';
import { BMICalculatorComponent } from './_components/bmi-calculator/bmi-calculator.component';
import { UserEditComponent } from './_components/admin/user-edit/user-edit.component';
import { RecipeDetailsComponent } from './_components/recipe-details/recipe-details.component';
import { CustomerUsereditComponent } from './_components/customer-useredit/customer-useredit.component';


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
    RecipeSaveComponent,
    RecipeListComponent,
    RandomRecipeComponent,
    UserDetailsComponent,
    UserListComponent,
    RecipeApproveComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    BMICalculatorComponent,
    UserEditComponent,  
    RecipeDetailsComponent,
    CustomerUsereditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ToastContainerModule,
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
            path: 'user-details',
            component: UserDetailsComponent
          },
          {
            path: 'shopping-list',
            component: ShoppingListComponent
          },
          {
            path: 'random-recipe',
            component: RandomRecipeComponent
          },
          {
            path: 'about',
            component: AboutUsComponent
          },
          {
            path: 'contact',
            component: ContactUsComponent
          },
          {
            path: 'bmi',
            component: BMICalculatorComponent
          },
          {
            path: 'recipe/:recipeid',
            component: RecipeDetailsComponent
          },
          {
            path: 'customer-useredit/:id',
            component: CustomerUsereditComponent
          }
        ]
      },
      {
        path: 'admin-layout',
        component: AdminLayoutComponent,
        children:[
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'recipe',
            component: RecipeListComponent
          },
          {
            path: 'recipe-save',
            component: RecipeSaveComponent
          },
          {
            path: 'user-list',
            component: UserListComponent
          },
          {
            path: 'user-edit/:id',
            component: UserEditComponent
          }
        ]
      }
      
    ])

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
