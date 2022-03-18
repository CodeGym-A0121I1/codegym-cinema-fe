import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
    selector: 'app-sidebar-admin',
    templateUrl: './sidebar-admin.component.html',
    styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

    constructor(
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem("token") !== null) {
            this.authService.assignSessionStorageWithLocalStorage();
        }
    }


//sidebar
    public isLoggedIn() {
        return this.authService.isLoggedIn();
    }
//sidebar
    public logout() {
        this.authService.clear();
    }
}
