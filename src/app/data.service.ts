import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import {loginUrl, userOrderDetailsUrl} from './urls';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  userAuthentication(user: User) {
    var body = {
      email: user.email,
      password: user.password
    }
    return this.http.post(loginUrl, body, { observe: 'response' })
  }

  getUserOrderDetails() {
    const reqHeader = new HttpHeaders({
      'Auth': 'True',
    })

    return this.http.get(userOrderDetailsUrl, {
      headers: reqHeader
    })

  }
}
