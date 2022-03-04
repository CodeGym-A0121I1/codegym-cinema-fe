import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Genre} from "../model/movie/Genre";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    genreList: Array<Genre> = [];

    constructor(
        private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        this.movieService.getAllGenre().subscribe(
            data => {
                console.log(data)
                this.genreList = data
            }
        )
    }

}
