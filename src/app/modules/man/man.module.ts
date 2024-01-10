import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { MenComponent } from './components/men/men.component';
import { AddComponent } from './components/add/add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [
    MenComponent,
    AddComponent,
    EditComponent,
    DetailsComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ManModule { }
