import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShowTime} from "../../../model/booking/ShowTime";
import {ShowTimeService} from "../../../service/show-time.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe, Time} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MovieDTO} from "../../../dto/showTime/MovieDTO";

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
    errors: boolean = false;
    movieDTOTG!: any;
    thisHours: Array<ShowTime> = []
    @Input() MovieId!: string;

    constructor(private showTimeSevice: ShowTimeService, private activeRoute: ActivatedRoute, private matSnackBar: MatSnackBar, private datepipe: DatePipe) {
    }

    @Output() movieDTo: EventEmitter<MovieDTO> = new EventEmitter();

    ngOnInit(): void {
        if (this.MovieId == null) {
            this.MovieId = this.activeRoute.snapshot.params['id'];
        }
        this.showTimeSevice.getAllShowTimeByMovieId(this.MovieId).subscribe(data => {
            const start = new Date(data[0].movie.openingDay);
            const end = new Date(data[0].movie.endDay);
            this.listMovies = data;
            let loop = new Date(start);
            while (loop < new Date(Date.now())) {
                loop = new Date(Date.now());
                break
            }
            this.startDate = loop;
            let newDateTG = this.startDate?.setDate(this.startDate?.getDate() - 1);
            loop = new Date(newDateTG);
            this.startDate = loop;

            while (loop < end) {
                this.listDates.push(loop)
                let dateTG = loop;
                let newDate = dateTG.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }
            this.listDates.pop();
            this.countDate = this.listDates.length;
            if (this.listDates.length == 0) {
                this.errors = true
            }
            let day: string | null = '';
            day = this.datepipe.transform(this.listDates[0], "yyyy-MM-dd");
            this.showTimeSevice.getAllShowTimeByMovieIdAndDateStart(this.MovieId, day).subscribe(data => {
                this.thisHours = data
            })

        }, error => {
            this.errors = true;
        });

    }


    takeData(item: Date) {


        let day: string | null = '';
        day = this.datepipe.transform(item, "yyyy-MM-dd");
        this.showTimeSevice.getAllShowTimeByMovieIdAndDateStart(this.MovieId, day).subscribe(data => {
            this.thisHours = data
        })
        this.startDate = item;
    }

    takeTime(s: Time) {
        this.startTime = s;
        let itemDate = this.startDate;
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
