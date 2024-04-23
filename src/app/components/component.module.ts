import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { NotesHightlightsComponent } from './notes-hightlights/notes-hightlights.component';
import { CalendarSyncComponent } from './calendar-sync/calendar-sync.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { LearningRemindersComponent } from './learning-reminders/learning-reminders.component';
import { ReminderPopup1Component } from './reminder-popup1/reminder-popup1.component';
import { ReminderPopup2Component } from './reminder-popup2/reminder-popup2.component';



@NgModule({
  declarations: [NavbarComponent, CommunicationComponent, NotesHightlightsComponent, CalendarSyncComponent, PaymentOptionComponent, LearningRemindersComponent, ReminderPopup1Component, ReminderPopup2Component],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([])
  ],
  exports: [NavbarComponent,CommunicationComponent,NotesHightlightsComponent,CalendarSyncComponent, PaymentOptionComponent]
})
export class ComponentModule { }
