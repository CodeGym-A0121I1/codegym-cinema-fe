
import {Time} from "@angular/common";
import {Movie} from "../../model/movie/Movie";
import {Theater} from "../../model/theater/Theater";

export interface SeatMovieDTO{
    movie:Movie,
    Theater:Theater,
    dateStart?:Date,
    timeStart:Time,
    price:number,
    listSeat:Array<string>
}