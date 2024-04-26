import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-reminder-popup2',
  templateUrl: './reminder-popup2.component.html',
  styleUrl: './reminder-popup2.component.scss'
})
export class ReminderPopup2Component implements OnInit {
  reminderForm: FormGroup;
  once: boolean = true;
  daily: boolean = false;
  weekly: boolean = false;
  monthly: boolean = false;
  fiveMins:boolean = true;
  tenMins: boolean = false;
  thirtyMins: boolean = false;
  oneHour: boolean = false;
  constructor(
    private fb: FormBuilder
  ){
    this.reminderForm =  this.fb.group({
      frequency: ['', Validators.required],
      calendar: ['', Validators.required], 
      time: ['', Validators.required],      
      notificationMethod: ['', Validators.required], 
      socialMedia: ['', Validators.required]  
    })
  }
ngOnInit(): void {
    
}
  learningReminder():void{
if(this.reminderForm.valid){
  console.log('Form submitted successfully');
  
}
else{
  console.log('Form is invalid');
  
}
  }
  currentFrequency(reminderPopUp2:string):void{
this.once = reminderPopUp2 === "once"
this.daily = reminderPopUp2 === "daily"
this.weekly = reminderPopUp2 === "weekly";
this.monthly = reminderPopUp2 === "monthly"
  }
  currentTime(reminderPopUp:string):void{
    this.fiveMins = reminderPopUp === 'fiveMins';
  this.tenMins= reminderPopUp === 'tenMins';
  this.thirtyMins= reminderPopUp === 'thirtyMins';
  this.oneHour= reminderPopUp === 'oneHour';
  }
}
