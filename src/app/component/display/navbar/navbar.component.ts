import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
        if (localStorage.getItem("token") !== null) {
            this.authService.assignSessionStorageWithLocalStorage();
        }

    }

    public isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    public logout() {
        this.authService.clear();
    }
}
