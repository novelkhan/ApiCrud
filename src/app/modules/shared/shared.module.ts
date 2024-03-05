import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    ValidationMessagesComponent
  ],
  providers: [BsModalService]
})
export class SharedModule {
 }
