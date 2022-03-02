import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movie} from "../model/movie/Movie";
import {MovieService} from "../service/movie.service";
import {ShowTimeService} from "../service/show-time.service";
import {ShowTime} from "../model/booking/ShowTime";
import {Parser} from "@angular/compiler";
import {MovieDTO} from "../model/dto/MovieDTO";

@Component({
    selector: 'app-selected-movie-show-time',
    templateUrl: './selected-movie-show-time.component.html',
    styleUrls: ['./selected-movie-show-time.component.css']
})
export class SelectedMovieShowTimeComponent implements OnInit {
    listMovies: Array<ShowTime> = [];
    listDates: Array<Date> = [];
    countDate: number = 0;
    isDisplay = false;
    startDate?: Date;
    startTime?: string;
    movieDTOTG!: any;

    constructor(private movieServie: MovieService, private showTimeSevice: ShowTimeService) {
    }

    @Output() movieDTo: EventEmitter<MovieDTO> = new EventEmitter();

    ngOnInit(): void {

        this.showTimeSevice.getAllShowTimeByMovieId("Movie1").subscribe(data => {

            const start = new Date(data[0].startDate);
            const end = new Date(data[0].movie.endDay);
            this.listMovies = data;
            let loop = new Date(start);
            while (loop <= end) {
                this.listDates.push(loop)
                let newDate = loop.setDate(loop.getDate() + 1);
                loop = new Date(newDate);
            }
            this.countDate = this.listDates.length;
        });


    }

    convertTime(time: string) {
        let result = time.slice(0, 5);
        let hours = time.slice(0, 2);
        if (parseInt(hours) <= 12) {
            result += ' AM'
        } else {
            result += ' PM'
        }
        return result;
    }

    takeData(item: Date) {
        this.startDate = item;
    }

    takeTime(s: string) {
        this.startTime = s;
        const movieDTOTG1: MovieDTO = {
            movie: this.listMovies[0].movie,
            timeSelected: this.startTime,
            dateStart: this.startDate,
            price:this.listMovies[0].price,
            theater:this.listMovies[0].theater
        };
        this.movieDTOTG = movieDTOTG1;
        this.movieDTo.emit(movieDTOTG1);
        this.isDisplay = true
    }

    take() {

    }
}
