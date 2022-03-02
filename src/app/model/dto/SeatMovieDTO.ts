import {Theater} from "../movie/Theater";
import {Movie} from "../movie/Movie";

export interface SeatMovieDTO{
    movie:Movie,
    Theater:Theater,
    dateStart?:Date,
    timeStart:string,
    price:number,
    listSeat:Array<string>
}