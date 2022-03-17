import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {MovieService} from "../../../service/movie.service";
import {Genre} from "../../../model/movie/Genre";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
    selector: 'app-list-movie',
    templateUrl: './list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

    movieList: Array<Movie> = [];
    genreList: Array<Genre> = [];
    searchGenre: number = 0;

    numberShowedMovie: number = 6;

    constructor(
        private movieService: MovieService,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        this.movieService.getAllMovies().subscribe(
            data => {
                this.movieList = data
            }
        )

        this.movieService.getAllGenre().subscribe(
            data => {
                this.genreList = data
            }
        )
    }

    listAll() {
        if (this.numberShowedMovie >= this.movieList.length) {
            this.numberShowedMovie = 6;
        } else {
            this.numberShowedMovie += 6;
        }
    }

    setSearchGenre(id: number) {
        this.searchGenre = id;
    }

    search(value: string) {
        this.movieService.findAllByNameAndGenre(value, this.searchGenre).subscribe(
            data => {
                this.movieList = data
            },
            error => {
                this.snackBar.open("Không tìm thấy phim phù hợp")._dismissAfter(3000)
            }
        )
    }
}
