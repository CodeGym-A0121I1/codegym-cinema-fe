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

    movieid: Movie | any;
    id_movie: string | any;
    showmovieid?: Array<ShowTime>;


    constructor(
        private movieService: MovieService,
        private showtimeService: ShowTimeService,
        private bookingservice: BookingService,
        private auth: AuthService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(
            (paramap) => {
                this.id_movie = paramap.get("idMovie");
                this.movieService.getById(this.id_movie).subscribe(data => {
                        this.movieid = data;
                        console.log(this.movieid);
                    }
                )
                this.showtimeService.getAllShowTimeByMovieId(this.id_movie).subscribe(
                    datas => {
                        this.showmovieid = datas;
                        console.log(this.showmovieid);
                    }
                )
            }
        )
    }

    test() {
        if (this.auth.isLoggedIn()) {
            this.bookingservice.getBookingById("M2").subscribe(
                (data) => {
                    console.log(data);
                },
            );
        } else {
            this.router.navigate(["/login"]);
        }
    }
}
