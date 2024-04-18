import { Component,OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from "@angular/forms";
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})



export class SettingsComponent implements OnInit {
  account: boolean = true;
  payment:boolean = false;
 communication:boolean = false;
 notesHighlights:boolean = false
 calendarSync: boolean = false;
 transaction:boolean = false;

ngOnInit(): void {}


renderSetting(setting:string):void{
  this.account = setting === 'account'
  this.payment= setting === 'payment'
  this.communication = setting === 'communication'
  this.notesHighlights = setting === 'notesHighlights'
  this.calendarSync = setting === 'calendarSync'
  this.transaction = setting === 'transaction'
 }
}
