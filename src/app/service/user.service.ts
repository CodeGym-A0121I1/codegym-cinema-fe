import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";





@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_USER = "http://localhost:8080/api/users"

  requestHeader = new HttpHeaders(
      {"No-Auth": "True"}
  );

  constructor(private httpClient: HttpClient) { }

  public generateOtp(username: string): Observable<Boolean> {
    return this.httpClient.get<Boolean>(this.API_USER + "/account/generate/" + username, {headers: this.requestHeader});
  }

  public forgotPassword(username: string, newPassword: string, otp: string): Observable<Boolean> {
    return this.httpClient.get<Boolean>(this.API_USER + "/account/forgot-password/" + username + "/" + newPassword + "/" + otp, {headers: this.requestHeader});

  }

  public getListMember(){
    return this.httpClient.get(this.API_USER + "/list-member");
  }

  public getByIdMember(id: string){
    return this.httpClient.get<any>(this.API_USER + "/member/" + id);
  }

  public editMember(user: User): Observable<any>{

    return this.httpClient.put(this.API_USER + "/update/" + user.id, user);
  }
}
