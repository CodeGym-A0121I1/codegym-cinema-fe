import {Movie} from "../movie/Movie";

export interface ShowTime {
    id: string,
    startTime: string,
    startDate: Date,
    price:number,
    movie:Movie;
}