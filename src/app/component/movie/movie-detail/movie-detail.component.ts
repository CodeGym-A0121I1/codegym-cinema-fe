import {Component, enableProdMode, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {ShowTime} from "../../../model/booking/ShowTime";
import {MovieService} from "../../../service/movie.service";
import {ActivatedRoute} from "@angular/router";
import {ShowTimeService} from "../../../service/show-time.service";
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
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("id movie");
        this.movieService.getById(this.activatedRoute.snapshot.params['idMovie']).subscribe(data => {
                // this.movieid = data;
                // console.log(this.movieid);
                console.log("id movie");
            }
        )
            // ,
            // this.showtimeService.getAllShowTimeByMovieId(this.activatedRoute.snapshot.params['idMovie']).subscribe(
            //     datas => {
            //         this.showmovieid = datas;
            //         console.log(this.showmovieid);
            //         console.log("id shotimw");
            //     }
            // )

    }
}
