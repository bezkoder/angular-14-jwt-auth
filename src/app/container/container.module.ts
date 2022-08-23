import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeComponent} from "./employee/employee.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
  ],

  imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,

        RouterModule.forRoot([
          { path: '', pathMatch: "full", redirectTo: 'home' },
          {path: 'home', component: HomeComponent},
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'employee', component: EmployeeComponent},
          {path: 'employee/employee-details/:id', component: EmployeeDetailsComponent},
        ]),
    ]
})
export class ContainerModule { }
