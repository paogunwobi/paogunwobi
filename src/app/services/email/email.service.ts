import { Email } from './../../model/email.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseUrl = 'http://localhost:3000/api/';
  controllerName = 'email';
  constructor(
    protected https: HttpClient
  ) {
  }

  getFullUrl(): string {
    return this.baseUrl + `${this.controllerName}/`;
  }

  sendEmail(mail): Observable<any> {
    console.log(this.getFullUrl() + `sendmail`);
    console.log('Mail: ', mail);
    return this.https.post(this.getFullUrl() + `sendmail`, mail);
    // return this.http.post<Array<Email>>(this.getFullUrl() + `sendmail`, mail);
  }

}
