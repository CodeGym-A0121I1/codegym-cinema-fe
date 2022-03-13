import {Injectable} from '@angular/core';
import {AuthoricationResponse} from "../dto/login/AuthoricationResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    public setSessionStorage(authoricationResponse: AuthoricationResponse) {
        this.setToken(authoricationResponse.jwt);
        this.setRole(authoricationResponse.user.account.role);
        this.setFullName(authoricationResponse.user.fullName);
        this.setUsername(authoricationResponse.user.account.username);
        this.setIdUser(authoricationResponse.user.id);
    }

    public setLocalStorage(authoricationResponse: AuthoricationResponse) {
        localStorage.setItem("token", authoricationResponse.jwt);
        localStorage.setItem("role", authoricationResponse.user.account.role);
        localStorage.setItem("fullName", authoricationResponse.user.fullName);
        localStorage.setItem("username", authoricationResponse.user.account.username);
        localStorage.setItem("idUser", authoricationResponse.user.id);
    }

    public assignSessionStorageWithLocalStorage() {
        this.setToken(<string>localStorage.getItem('token'));
        this.setRole(<string>localStorage.getItem('role'));
        this.setFullName(<string>localStorage.getItem('fullName'));
        this.setUsername(<string>localStorage.getItem('username'));
        this.setIdUser(<string>localStorage.getItem("idUser"));
    }

    public setRole(role: string) {
        sessionStorage.setItem("role", role);
    }
    public setToken(jwt: string) {
        sessionStorage.setItem("token", jwt);
    }
    public setFullName(fullName: string) {
        sessionStorage.setItem("fullName", fullName);
    }

    public setUsername(username: string) {
        sessionStorage.setItem("username", username);
    }

    public getRole() {
        return sessionStorage.getItem("role")
    }

    public getToken() {
        return sessionStorage.getItem("token");
    }

    public getFullName() {
        return sessionStorage.getItem("fullName");
    }

    public getUsername() {
        return sessionStorage.getItem("username");
    }

    public setIdUser(idUser: string) {
        sessionStorage.setItem("idUser", idUser);
    }

    public getIdUser() {
        return sessionStorage.getItem("idUser");
    }

    public clear() {
        sessionStorage.clear();
        localStorage.clear();
    }

    public isLoggedIn() {
        return this.getRole() && this.getToken();
    }
}
