import {Movie} from "../movie/Movie";

export interface MovieDTO{
    movie:Movie;
    timeSelected:string;
    dateStart?:Date;
}