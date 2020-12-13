import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUpUser(data): any {
    return this.http.post(`${environment.url}/sign_up`, data).pipe(
      map(res => true),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  signInUser(data): any {
    return this.http.post(`${environment.url}/login`, data).pipe(
      map(res => res),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
