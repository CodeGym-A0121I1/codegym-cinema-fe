import {Movie} from "../../model/movie/Movie";
import {Theater} from "../../model/movie/Theater";
import {Time} from "@angular/common";

export interface SeatMovieDTO{
    movie:Movie,
    Theater:Theater,
    dateStart?:Date,
    timeStart:Time,
    price:number,
    listSeat:Array<string>
}