import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerModule} from "./container/container.module";
import {HomeComponent} from "./container/home/home.component";
import {LoginComponent} from "./container/login/login.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {path:'**', component: LoginComponent },

];

@NgModule({
  imports: [ContainerModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
