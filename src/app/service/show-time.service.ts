import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ShowTime} from "../model/booking/ShowTime";
import {Seat} from "../model/theater/Seat";


@Injectable({
    providedIn: 'root'
})
export class ShowTimeService {

    constructor(private httpClient: HttpClient) {
    }

    private readonly API_MOVIE = "http://localhost:8080/api/showTime";
    private readonly API_SEAT_BOOKED = "http://localhost:8080/api/showTime/booked";
    private readonly API_MOVIE_THEATER = "http://localhost:8080/api/seats/showmovietheater";
    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    getAllShowTimeByMovieId(movieId: string) {
        return this.httpClient.get<Array<ShowTime>>(this.API_MOVIE + "?MovieId=" + movieId, {headers: this.requestHeader});
    }

    getAllSeatBookedByTheaterId(theaterId: string) {
        return this.httpClient.get<Array<Seat>>(this.API_SEAT_BOOKED + "?theaterId=" + theaterId, {headers: this.requestHeader});
    }

    getAllShowTimeByMovieIdanhTheaterId(movieId: string, theaterId: string) {
        return this.httpClient.get<Array<ShowTime>>(this.API_MOVIE_THEATER + "?MovieId=" + movieId + "&TheaterId=" + theaterId, {headers: this.requestHeader});
    }

}
