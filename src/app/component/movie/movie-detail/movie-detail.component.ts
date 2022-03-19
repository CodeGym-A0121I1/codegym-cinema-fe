import {Component, enableProdMode, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {MovieService} from "../../../service/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../../service/booking.service";
import {AuthService} from "../../../service/auth.service";
import {signOut} from "@angular/fire/auth";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

enableProdMode();

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    isDisplay: boolean = false;
    movie: Movie;
    directors: string = "";
    producers: string = "";
    MovieId!: string;
    video!: SafeUrl;

    constructor(private activatedRoute: ActivatedRoute,
                private movieService: MovieService,
                private bookingservice: BookingService,
                private auth: AuthService,
                private sanitizer: DomSanitizer,
                private router: Router) {
    }

    ngOnInit(): void {
        this.movieService.getById(this.activatedRoute.snapshot.params["idMovie"]).subscribe(
            data => {
                this.movie = data;
                this.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
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
        this.movie.trailer;
        console.log(this.movie.trailer)
        this.MovieId = this.movie.id;
        if (this.auth.isLoggedIn()) {
            this.isDisplay = true;
        } else {
            this.router.navigate(["/login"]);
        }
    }
}
