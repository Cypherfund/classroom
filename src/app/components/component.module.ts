import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunicationComponent } from './communication/communication.component';
import { NotesHightlightsComponent } from './notes-hightlights/notes-hightlights.component';
import { CalendarSyncComponent } from './calendar-sync/calendar-sync.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { LearningRemindersComponent } from './learning-reminders/learning-reminders.component';
import { ReminderPopup1Component } from './reminder-popup1/reminder-popup1.component';
import { ReminderPopup2Component } from './reminder-popup2/reminder-popup2.component';
import { LearningScheduleComponent } from './learning-schedule/learning-schedule.component';



@NgModule({
  declarations: [NavbarComponent, CommunicationComponent, NotesHightlightsComponent, CalendarSyncComponent, PaymentOptionComponent,LearningRemindersComponent,  ReminderPopup1Component, ReminderPopup2Component, LearningScheduleComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([]),
    ReactiveFormsModule 
  ],
  exports: [NavbarComponent,CommunicationComponent,NotesHightlightsComponent,CalendarSyncComponent, PaymentOptionComponent,LearningRemindersComponent,  ReminderPopup1Component, ReminderPopup2Component,  LearningScheduleComponent]
})
export class ComponentModule { }
