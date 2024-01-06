import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {path:'', component: MenComponent},
  {path:'add', component: AddComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ManRoutingModule { }
