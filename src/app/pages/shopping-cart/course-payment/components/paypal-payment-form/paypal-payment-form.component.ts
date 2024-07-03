import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursePaymentRequest, PaymentMethod} from "../../../../../models/payment";

@Component({
  selector: 'app-paypal-payment-form',
  templateUrl: './paypal-payment-form.component.html',
  styleUrl: './paypal-payment-form.component.scss'
})
export class PaypalPaymentFormComponent {
  @Input() paymentMethod!: PaymentMethod;
  @Output() processPayment: EventEmitter<any> = new EventEmitter<any>();

  paymentForm: FormGroup;
  successMsg: string = 'Payment Successful';

  constructor(fb: FormBuilder) {
    this.paymentForm = fb.group({
      paypalEmail: ['', [Validators.required, Validators.email]]
    });
  }

  makePayment() {
    if (this.paymentForm.valid) {
      const request: Partial<CoursePaymentRequest> = {
        extra: {...this.paymentForm.value},
        paymentMethod: "PAYPAL",
        paymentCode: this.paymentMethod.strPaymentCode
      }
      console.log(request);
      this.processPayment.emit({request, msg: this.successMsg});
    }
  }
}
