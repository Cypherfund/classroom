import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  enrollUrl = environment.enrollmentUrl;
  providerUrl = environment.providerUrl;
  course: any;
  
  constructor(private http: HttpClient){ }

  getProviderDetails(countryCode: String): Observable<any> {
    return this.http.get<any>(
      `${this.providerUrl}${countryCode}`
    )
  }

  enrollToCourseByMomo(userDetails: object){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.enrollUrl, userDetails).pipe(catchError(error=>throwError(error)));
  }

  getCourse(){
    return this.course
  }

  setCourse(course: any){
    this.course = course;
  }
}
