import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoaderService {
  private loader$: Observable<boolean>;
  private loaderSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loader$ = this.loaderSubject$.asObservable().pipe(distinctUntilChanged());
  }

  turnOnLoading() {
    console.log('turning on loading');
    this.loaderSubject$.next(true);
  }

  turnOffLoading() {
    console.log('turning off loading');
    this.loaderSubject$.next(false);
  }

  getLoader(): Observable<boolean> {
    return this.loader$;
  }
}
