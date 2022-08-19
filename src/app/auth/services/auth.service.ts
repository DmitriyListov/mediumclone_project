import { Injectable } from '@angular/core';
import { IRegisterRequest } from '../types/registerReques.interface';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from '../../shared/types/curentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user));
  }
}
