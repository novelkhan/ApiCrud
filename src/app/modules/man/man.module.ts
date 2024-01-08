import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { MenComponent } from './components/men/men.component';
import { AddComponent } from './components/add/add.component';



@NgModule({
  declarations: [
    MenComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule
  ]
})
export class ManModule { }
