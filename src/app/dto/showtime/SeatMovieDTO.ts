import {Movie} from "../../model/movie/Movie";
import {Theater} from "../../model/movie/Theater";

export interface SeatMovieDTO{
    movie:Movie,
    Theater:Theater,
    dateStart?:Date,
    timeStart:string,
    price:number,
    listSeat:Array<string>
}