import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShowTime} from "../../../model/booking/ShowTime";
import {MovieDTO} from "../../../dto/showtime/MovieDTO";
import {ShowTimeService} from "../../../service/show-time.service";
import {ActivatedRoute} from "@angular/router";
import {Time} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-selected-movie-show-time',
    templateUrl: './selected-movie-show-time.component.html',
    styleUrls: ['./selected-movie-show-time.component.css']
})
export class SelectedMovieShowTimeComponent implements OnInit {
    listMovies: Array<ShowTime> = [];
    listDates: Array<Date> = [];
    countDate: number = 0;
    startDate?: Date;
    startTime?: Time;
    isDisplay = false;
errors:boolean=false;
    movieDTOTG!: any;

    constructor(private showTimeSevice: ShowTimeService, private activeRoute: ActivatedRoute, private matSnackBar: MatSnackBar,) {
    }

    @Output() movieDTo: EventEmitter<MovieDTO> = new EventEmitter();

    ngOnInit(): void {
        this.showTimeSevice.getAllShowTimeByMovieId(this.activeRoute.snapshot.params["id"]).subscribe(data => {
            const start = new Date(data[0].startDate);
            const end = new Date(data[0].movie.endDay);

            this.listMovies = data;
            let loop = new Date(start);
            while (loop < new Date(Date.now())) {
                loop = new Date(Date.now());
                break
            }
            this.startDate=loop;
            while (loop <= end) {
                this.listDates.push(loop)
                let newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }
            this.countDate = this.listDates.length;
        }, error => {
            this.errors=true;
        });
    }


    takeData(item: Date) {
        this.startDate = item;
    }

    takeTime(s: Time) {
        this.startTime = s;
        let itemDate = this.startDate;
        itemDate?.setDate(itemDate?.getDate() - 1)
        const movieDTOTG1: MovieDTO = {
            movie: this.listMovies[0].movie,
            timeSelected: this.startTime,
            dateStart: itemDate,
            price: this.listMovies[0].price,
            theater: this.listMovies[0].theater
        };
        this.movieDTOTG = movieDTOTG1;
        this.movieDTo.emit(movieDTOTG1);
        this.isDisplay = true

    }

}
