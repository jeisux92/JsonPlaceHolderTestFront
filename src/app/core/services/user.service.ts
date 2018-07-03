import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${environment.url}/users`)
  }

  getUser(id: number) {
    return this.httpClient.get(`${environment.url}/users/${id}`)
  }
}
