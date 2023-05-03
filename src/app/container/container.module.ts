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
import {PrivacyComponent} from "./privacy/privacy.component";
import { TermsComponent } from './terms/terms.component';
import { HelpComponent } from './help/help.component';
import { ForgotpComponent } from './forgotp/forgotp.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpComponent,
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
          {path: 'forget-password', component: ForgotpComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'privacy', component: PrivacyComponent},
          {path: 'terms', component: TermsComponent},
          {path: 'help', component: HelpComponent},
          {path: 'employee', component: EmployeeComponent},
          {path: 'employee/employee-details/:id', component: EmployeeDetailsComponent},
        ]),
    ]
})
export class ContainerModule { }
