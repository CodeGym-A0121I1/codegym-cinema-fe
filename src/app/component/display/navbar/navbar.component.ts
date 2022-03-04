import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {MovieService} from "../../../service/movie.service";
import {Genre} from "../../../model/movie/Genre";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    genreList: Array<Genre> = [];

    constructor(public authService: AuthService,
                private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        if (localStorage.getItem("token") !== null) {
            this.authService.assignSessionStorageWithLocalStorage();
        }
        this.movieService.getAllGenre().subscribe(
            data => {
                console.log(data)
                this.genreList = data
            }
        )
    }

    public isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    public logout() {
        this.authService.clear();
    }
}
