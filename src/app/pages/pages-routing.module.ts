import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

// components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'details/:id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
