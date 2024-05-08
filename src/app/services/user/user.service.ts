import { Injectable } from '@angular/core';
import {UserResponse} from "../../models/user";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: UserResponse = {} as UserResponse;
  private loginSubject$ = new BehaviorSubject<number>(0);
  login$: Observable<number>;
  constructor() {
    this.login$ = this.loginSubject$.asObservable();
  }

  get user(): UserResponse {
    return this._user;
  }

  set user(value: UserResponse) {
    this._user = value;
    this.loginSubject$.next(1);
  }
}
