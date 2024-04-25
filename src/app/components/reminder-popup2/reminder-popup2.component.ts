import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-reminder-popup2',
  templateUrl: './reminder-popup2.component.html',
  styleUrl: './reminder-popup2.component.scss'
})
export class ReminderPopup2Component implements OnInit {
  reminderForm: FormGroup;
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
}
