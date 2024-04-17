import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';
import { NotesHightlightsComponent } from './notes-hightlights/notes-hightlights.component';



@NgModule({
  declarations: [NavbarComponent, CommunicationComponent, NotesHightlightsComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([])
  ],
  exports: [NavbarComponent,CommunicationComponent,NotesHightlightsComponent]
})
export class ComponentModule { }
