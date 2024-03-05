import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManRoutingModule } from './man-routing.module';
import { MenComponent } from './components/men/men.component';
import { AddComponent } from './components/add/add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { SharedModule } from '../shared/shared.module';
import { AddManComponent } from './components/add-man/add-man.component';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';



@NgModule({
    declarations: [
        MenComponent,
        AddComponent,
        EditComponent,
        DetailsComponent,
        DeleteComponent,
        AddManComponent
    ],
    imports: [
        CommonModule,
        ManRoutingModule,
        RouterModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ],
})
export class ManModule { }
