import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBuilderPageComponent } from './form-builder-page/form-builder-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'formBuilder', component: FormBuilderPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
