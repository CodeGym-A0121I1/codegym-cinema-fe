import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticUserDTO} from "../dto/statistic/StatisticUserDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_USER = "http://localhost:8080/api/users"

  private readonly STATISTIC_USER_API: string = "http://localhost:8080/api/statistic/user";

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

  public statisticTopMemberByTotalPrice(): Observable<StatisticUserDTO[]> {
    return this.httpClient.get<StatisticUserDTO[]>(`${this.STATISTIC_USER_API}`);
  }
}
