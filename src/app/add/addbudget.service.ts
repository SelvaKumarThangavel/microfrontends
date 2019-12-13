import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AddbudgetService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  url: string = "http://localhost:8089/api/auth";

  constructor(private _http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  add(addbudget) {
    //console.log("inside add budget")
    return this._http.post<any>(`${this.url}/addbudget`, addbudget).pipe(map(add => {

      return add;
    }))
  }

}
