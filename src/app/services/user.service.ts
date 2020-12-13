import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(email): any {
    return this.http.get(`${environment.url}/user?email_id=${email}`).pipe(
      map(res => res),
      catchError((err) => {
        return throwError(err);
      })
    )
  }

  getUserHistory(email): any {
    return this.http.get(`${environment.url}/user_job_history?email_id=${email}`).pipe(
      map(res => res['past_jobs']),
      catchError((err) => {
        return throwError(err);
      })
    )
  }
}
