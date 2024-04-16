import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommunicationComponent } from './communication/communication.component';



@NgModule({
  declarations: [NavbarComponent, CommunicationComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([])
  ],
  exports: [NavbarComponent,CommunicationComponent]
})
export class ComponentModule { }
