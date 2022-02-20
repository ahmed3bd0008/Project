import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendEmailsComponent } from './sendEmails.component';
import { AddMessageComponent } from './addMessage/addMessage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMessageComponent } from './List-Message/List-Message.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MessageComponent } from './List-Message/Message/Message.component';
import { SendMessageEmailsComponent } from './Send-message-emails/Send-message-emails.component';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
   declarations: [
    SendEmailsComponent,
    AddMessageComponent,
    ListMessageComponent,
    MessageComponent,
    SendMessageEmailsComponent
  ],
  exports: [SendEmailsComponent]

})
export class SendEmailsModule { }
