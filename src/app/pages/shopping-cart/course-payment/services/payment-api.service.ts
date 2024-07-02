import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {APIResponse} from "../../../../models/user";
import {environment} from "../../../../../environments/environment";
import {CoursePaymentRequest, PaymentMethod} from "../../../../models/payment";

@Injectable()
export class PaymentApiService {
  baseUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) { }


  getPaymentProviders(): Observable<APIResponse<PaymentMethod[]>>{
    return this.http.get<any>(`${this.baseUrl}/payment-api/payment/providers/cmr`).pipe(catchError(error=>throwError(error)));
  }

  makeCoursePayment(enrollmentRequest: CoursePaymentRequest) {
      return this.http.post(`${this.baseUrl}/course-api/enrollments`, enrollmentRequest);
  }

}
