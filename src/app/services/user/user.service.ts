import { Injectable } from '@angular/core';
import {UserResponse} from "../../models/user";
import {BehaviorSubject, catchError, map, Observable, of, shareReplay, tap, throwError} from 'rxjs';
import {UserApiService} from "./user-api.service";
import {LocalStorageService} from "../localstorage/local-storage.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: UserResponse = {} as UserResponse;
  private currentUser$: BehaviorSubject<UserResponse | null> = new BehaviorSubject<UserResponse | null>(null);
  private loginSubject$ = new BehaviorSubject<number>(0);
  login$: Observable<number>;
  constructor(private readonly userApiService: UserApiService,
              private readonly stoarageService: LocalStorageService) {
    this.login$ = this.loginSubject$.asObservable();
  }

  get user(): UserResponse {
    return this._user;
  }

  set user(value: UserResponse) {
    this._user = value;
    this.loginSubject$.next(1);
  }

  navigateToAuth() {
    window.location.href = environment.authUrl;
  }

  recheckToken(): Observable<any> {
    if (this.currentUser$.value) {
      return this.currentUser$.asObservable(); // Return cached user if available
    }
    const token = this.stoarageService.get('token');
    if (token) {
      return this.userApiService.verifyToken(token).pipe(
        tap(response => this.currentUser$.next(response.data)), // Cache the user data
        map(response => {
          if (response.success) {
            this.stoarageService.set('token', token); // Consider security implications
            this.user = response.data;
            return response.data; // Return user data or a relevant part of the response
          } else {
            return of ();
          }
        }),
        shareReplay(1),
        catchError(error => {
          return of ()
        })
      );
    } else {
      return of ();
    }
  }

  }
