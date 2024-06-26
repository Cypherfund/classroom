import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SeeMoreTextComponent } from './see-more-text/see-more-text.component';



@NgModule({
  declarations: [NavbarComponent, SeeMoreTextComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([]),
    ButtonModule
  ],
  exports: [ NavbarComponent, SeeMoreTextComponent ]
})
export class ComponentModule { }
