import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API_USER = "http://localhost:8080/api/users"

    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    constructor(private httpClient: HttpClient) {
    }

    public getById(idUser: string): Observable<any> {
        return this.httpClient.get(this.API_USER + '/' + idUser);
    }

    public generateOtp(username: string): Observable<Boolean> {
        return this.httpClient.get<Boolean>(this.API_USER + "/account/generate/" + username, {headers: this.requestHeader});
    }

    public forgotPassword(username: string, newPassword: string, otp: string): Observable<Boolean> {
        return this.httpClient.get<Boolean>(this.API_USER + "/account/forgot-password/" + username + "/" + newPassword + "/" + otp, {headers: this.requestHeader});
    }
}
