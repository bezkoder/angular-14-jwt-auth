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
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpComponent,
    ResetPasswordComponent,
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
    MatDialogModule,


    RouterModule.forRoot([
      {path: '', pathMatch: "full", redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'forget-password', component: ForgotpComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'privacy', component: PrivacyComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'help', component: HelpComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'employee/employee-details/:id', component: EmployeeDetailsComponent},
      {path: '**', redirectTo: 'home'} // wildcard route

    ]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class ContainerModule { }
