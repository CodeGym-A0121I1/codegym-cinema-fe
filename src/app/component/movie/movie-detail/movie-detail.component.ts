import {Component, enableProdMode, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {ShowTime} from "../../../model/booking/ShowTime";
import {MovieService} from "../../../service/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShowTimeService} from "../../../service/show-time.service";
import {BookingService} from "../../../service/booking.service";
import {AuthService} from "../../../service/auth.service";

enableProdMode();

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    isDisplay: boolean = false;
    movie: Movie | any;
    directors: string = "";
    producers: string = "";
    MovieId!: string;

    constructor(private activatedRoute: ActivatedRoute,
                private movieService: MovieService,
                private bookingservice: BookingService,
                private auth: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.movieService.getById(this.activatedRoute.snapshot.params["idMovie"]).subscribe(
            data => {
                this.movie = data;
                for (const director of this.movie?.directorList) {
                    this.directors += director.name + ", ";
                }
                for (const producer of this.movie?.producerList) {
                    this.producers += producer.name + ", ";
                }
                this.MovieId = this.movie.id;
            }
        )
    }

    test() {
        this.MovieId = this.movie.id;
        if (this.auth.isLoggedIn()) {
            this.isDisplay = true;
        } else {
            this.router.navigate(["/login"]);
        }
    }
}
