import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule.forChild([]),
    AvatarModule,
    BadgeModule,
    MenubarModule,
    RippleModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [NavbarComponent]
})
export class ComponentModule { }
