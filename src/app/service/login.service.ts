import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthoricationRequest} from "../dto/login/AuthoricationRequest";
import {Observable} from "rxjs";
import {AuthoricationResponse} from "../dto/login/AuthoricationResponse";
import {AuthService} from "./auth.service";
import {TokenDTO} from "../dto/login/TokenDTO";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    API_LOGIN = "http://localhost:8080/api/login"

    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    constructor(private httpClient: HttpClient,
                private authService: AuthService) {
    }

    public login(authoricationRequest: AuthoricationRequest): Observable<AuthoricationResponse> {
        return this.httpClient.post<AuthoricationResponse>(this.API_LOGIN, authoricationRequest, {headers: this.requestHeader});
    }

    public roleMatch(allowedRole: string[]): boolean {
        let isMatch = true;
        const role = this.authService.getRole();

        if (role !== null) {
            for (let i = 0; i < allowedRole.length; i++) {
                if (role == allowedRole[i]) {
                    return true;
                } else {
                    isMatch = false;
                }
            }
        }
        return isMatch;
    }

    public loginWithFacebook(token: TokenDTO): Observable<AuthoricationResponse> {
        return this.httpClient.post<AuthoricationResponse>(this.API_LOGIN + "/facebook", token, {headers: this.requestHeader})
    }

    public loginWithGoogle(token: TokenDTO): Observable<AuthoricationResponse> {
        return this.httpClient.post<AuthoricationResponse>(this.API_LOGIN + "/google", token, {headers: this.requestHeader})
    }

}
