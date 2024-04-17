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
 transaction:boolean = false;

ngOnInit(): void {}

renderSetting(setting:string):void{
 if(setting == 'account'){
  this.account = true
  this.payment= false
  this.communication = false
  this.notesHighlights = false
  this.transaction = false
 }
 else if(setting == 'payment'){
  this.payment= true
  this.account = false
  this.communication = false
  this.notesHighlights = false
  this.transaction = false
 } 
 else if(setting == 'communication'){
  this.communication = true
  this.account = false
  this.payment= false
  this.notesHighlights = false
  this.transaction = false
 } 
 else if(setting == 'notesHighlights'){
  this.notesHighlights = true
  this.account = false
  this.payment= false
  this.communication = false
  this.transaction = false
 } 
 else if(setting == 'transaction'){
  this.transaction = true
  this.account = false
  this.payment= false
  this.communication = false
  this.notesHighlights = false
 } 
}
}

