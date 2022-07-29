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
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { RecipeApproveComponent } from './_components/admin/recipe-approve/recipe-approve.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { ContactUsComponent } from './_components/contact-us/contact-us.component';


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
    UserDetailsComponent,
    RecipeApproveComponent,
    AboutUsComponent,
    ContactUsComponent
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
          }
        ]
      },
      {
        path: 'admin-layout',
        component: AdminLayoutComponent,
        children:[
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'recipe',
            component: RecipeListComponent
          },
          {
            path: 'recipe-save',
            component: RecipeSaveComponent
          }
        ]
      }
      
    ])

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
