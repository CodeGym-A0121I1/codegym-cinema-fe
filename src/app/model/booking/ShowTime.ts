import {Movie} from "../movie/Movie";
import {Theater} from "../movie/Theater";

export interface ShowTime {
    id: string,
    startTime: string,
    startDate: Date,
    price:number,
    movie:Movie,
    theater:Theater;
}