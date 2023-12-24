import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserFormData } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserformService {

  constructor(public http: HttpClient) { }

  public sendTempalteFormDataDetails(formData: IUserFormData): Observable<IUserFormData> {
    return this.http.post<IUserFormData>('http://localhost:3000/template-form', formData);
  }

  public sendReactiveFormDataDetails(formData: IUserFormData): Observable<IUserFormData> {
    return this.http.post<IUserFormData>('http://localhost:3000/reactive-form', formData);
  }
}
