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
import { RecipeDataComponent } from './_components/recipe-data/recipe-data.component';
import { AddRecipeComponent } from './_components/add-recipe/add-recipe.component';
import { MyRecipeComponent } from './_components/my-recipe/my-recipe.component';
import { RecipeDataListComponent } from './_components/recipe-data-list/recipe-data-list.component';
import { AddNutritionistComponent } from './_components/admin/add-nutritionist/add-nutritionist.component';
import { NutritionistListComponent } from './_components/admin/nutritionist-list/nutritionist-list.component';
import { MyRecipeEditComponent } from './_components/my-recipe-edit/my-recipe-edit.component';
import { ListNutritionistComponent } from './_components/list-nutritionist/list-nutritionist.component';
import { NutritionistEditComponent } from './_components/admin/nutritionist-edit/nutritionist-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
    CustomerUsereditComponent,
    RecipeDataComponent,
    AddRecipeComponent,
     MyRecipeComponent, 
     RecipeDataListComponent,
     AddNutritionistComponent,
     NutritionistListComponent,
      MyRecipeEditComponent,
      ListNutritionistComponent,
      NutritionistEditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
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
        path: 'user',
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
          },{

             path: 'recipe-list',
            component: RecipeDataComponent
          },
          {
            path: 'recipe-add',
            component: AddRecipeComponent
          },
          {
            path: 'my-recipes',
            component: MyRecipeComponent
          },
          {
            path: 'my-recipe-edit/:id',
            component: MyRecipeEditComponent
          },
          {
            path: 'nutritionists',
            component: ListNutritionistComponent
          }
        ]
      },
      {
        path: 'admin',
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
          },
          {
            path: 'add-nutritionist',
            component: AddNutritionistComponent
          },
          {
            path: 'nutritionist-list',
            component: NutritionistListComponent
          },
          {
            path: 'nutritionist-edit/:id',
            component: NutritionistEditComponent
          }
        ]
      }
      
    ])

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
