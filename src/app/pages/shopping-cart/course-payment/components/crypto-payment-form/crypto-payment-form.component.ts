import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CoursePaymentRequest, PaymentMethod} from "../../../../../models/payment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crypto-payment-form',
  templateUrl: './crypto-payment-form.component.html',
  styleUrl: './crypto-payment-form.component.scss'
})
export class CryptoPaymentFormComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Output() processPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentForm!: FormGroup;

  successMsg: string = 'Payment Successful';

  constructor(fb: FormBuilder) {
    this.paymentForm = fb.group({
      address: ['', [Validators.required]]
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const request: Partial<CoursePaymentRequest> = {
        extra: JSON.stringify({...this.paymentForm.value}),
        paymentMethod: "CRYPTO",
        paymentCode: this.paymentMethod.strPaymentCode
      }
      console.log(request);
      this.processPayment.emit({request, msg: this.successMsg});
    }
  }
}
