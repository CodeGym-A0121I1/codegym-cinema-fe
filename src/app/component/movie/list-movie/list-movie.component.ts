import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {MovieService} from "../../../service/movie.service";
import {Genre} from "../../../model/movie/Genre";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl} from "@angular/forms";


@Component({
    selector: 'app-list-movie',
    templateUrl: './list-movie.component.html',
    styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

    movieList: Array<Movie> = [];
    genreList: Array<Genre> = [];
    filteredMovie: Array<Movie> = [];
    currentGenre: number = 0;

    numberShowedMovie: number = 8;

    searchCtrl = new FormControl();

    constructor(
        private movieService: MovieService,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        this.movieService.getAllMovies().subscribe(
            data => {
                this.movieList = data
                this.filteredMovie = data;
            }
        )

        this.movieService.getAllGenre().subscribe(
            data => {
                this.genreList = data
            }
        )

        this.searchCtrl.valueChanges.subscribe(
            (name: string) => (this.search(name))
        )
    }

    listAll() {
        if (this.numberShowedMovie >= this.movieList.length) {
            this.numberShowedMovie = 8;
        } else {
            this.numberShowedMovie += 8;
        }
    }

    search(value: string) {
        let id = this.currentGenre
        if (id !== 0) {
            this.filteredMovie = this.movieList.filter(
                function (movie) {
                    for (const genre of movie.genreList) {
                        if (genre.id === id) {
                            return true;
                        }
                    }
                    return false;
                }
            )
        } else {
            this.filteredMovie = this.movieList;
        }
        this.filteredMovie = this.filteredMovie.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase()))
        if (this.filteredMovie.length == 0) {
            // this.snackBar.open("Không tìm thấy phim phù hợp", "OK")._dismissAfter(2000);
            this.filteredMovie = this.movieList;
        }
    }

    setGenre(id: number) {
        this.currentGenre = id;
        this.search(this.searchCtrl.value)
    }
}
