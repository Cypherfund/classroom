import { Injectable } from '@angular/core';
import {UserResponse} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: UserResponse = {} as UserResponse;
  constructor() { }

  get user(): UserResponse {
    return this._user;
  }

  set user(value: UserResponse) {
    this._user = value;
  }

  setUser(user: UserResponse) {
    this._user = user;
  }
}
