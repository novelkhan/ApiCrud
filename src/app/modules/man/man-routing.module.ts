import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './components/men/men.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddManComponent } from './components/add-man/add-man.component';


const routes: Routes = [
  {path:'', component: MenComponent},
  {path:'add', component: AddManComponent},
  {path:'add-man', component: AddComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'details/:id', component: DetailsComponent},
  {path:'delete/:id', component: DeleteComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ManRoutingModule { }
