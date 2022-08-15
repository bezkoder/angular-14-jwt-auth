import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerModule} from "./container/container.module";

const routes: Routes = [
  // { path: '**', component: HomeComponent },
  // { path: '**', redirectTo: 'home' }

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ContainerModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
