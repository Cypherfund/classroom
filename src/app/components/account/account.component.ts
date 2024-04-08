import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-amount',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
    accountForm: FormGroup;
    showError: boolean = false;
  
   constructor(
    private fb: FormBuilder,
    private router :Router
   ) {
    this.showError = false;
    const pattern= /^(?=[^A-Z]*[A-Z])(?=[a-z]*[a-z])(?=\D*\d).{8,}$/;
    this.accountForm =  this.fb.group({
      fullName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      timeZone:['', Validators.required],
      language: ['', Validators.required],
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern(pattern)]],
      retryPassword: ['', Validators.required],
      
    })
   }

ngOnInit(): void {}
 
  //  get fullName () {
  //   return this.accountForm.controls['fullName']
  // }
  // get email () {
  //   return this.accountForm.controls['email']
  // }
  // get timeZone () {
  //   return this.accountForm.controls['timeZone']
  // }
  // get language () {
  //   return this.accountForm.controls['language']
  // }
  get currentPassword () {
    return this.accountForm.controls['currentPassword']
  }
  get newPassword () {
    return this.accountForm.controls['newPassword']
  }
  get retryPassword () {
    return this.accountForm.controls['retryPassword']
  }

onSave(): void {
  if(this.accountForm.valid){
     // Form is valid, proceed with saving data
    console.log('Form data:', this.accountForm.value);
    this.showError = false;
  }
  //Form is invalid, display error messages
  else{
    console.log('Form is invalid');
    this.showError = true;
    this.accountForm.markAllAsTouched();
  }
}
onVerifyName(): void{
console.log('Verifying Name...');

}
onChangePassword(): void{
  console.log('Changing Password...');
  
}
}
