import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {APIResponse, UserResponse} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  baseUrl: string = 'https://tech-ascend.com/user-api/'
  constructor(private http: HttpClient) { }


  verifyToken(token: string): Observable<APIResponse<UserResponse>>{
    return this.http.post<any>(`${this.baseUrl}users/validate-token`, token).pipe(catchError(error=>throwError(error)));
  }
}
