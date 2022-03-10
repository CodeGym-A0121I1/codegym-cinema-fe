import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticUserDTO} from "../dto/statistic/StatisticUserDTO";
import {ForgotPassword} from "../dto/user/ForgotPassword";

@Injectable({
    providedIn: 'root'
})
export class UserService {


  API_EMPLOYEE = "http://localhost:8080/api/employees";
  API_USER = "http://localhost:8080/api/users"

  private readonly STATISTIC_USER_API: string = "http://localhost:8080/api/statistic/user";

  requestHeader = new HttpHeaders(
      {"No-Auth": "True"}
  );

    constructor(private httpClient: HttpClient) {
    }

  public generateOtp(username: string): Observable<Boolean> {
    return this.httpClient.get<Boolean>(this.API_USER + "/account/generate/" + username, {headers: this.requestHeader});
  }

  public forgotPassword(forgotPassword: ForgotPassword): Observable<Boolean> {
    return this.httpClient.post<Boolean>(this.API_USER + "/account/forgot-password", forgotPassword, {headers: this.requestHeader});
  }

  public statisticTopMemberByTotalPrice(): Observable<StatisticUserDTO[]> {
    return this.httpClient.get<StatisticUserDTO[]>(`${this.STATISTIC_USER_API}`);
  }

  getAllEmployee(): Observable<any> {
    return this.httpClient.get<any>(this.API_EMPLOYEE);
  }

  getEmployeeById(id: string ): Observable<any> {
    return this.httpClient.get<any>(this.API_EMPLOYEE + '/' + id);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.httpClient.put(this.API_EMPLOYEE, employee);
  }

}
