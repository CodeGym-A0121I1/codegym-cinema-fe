import {Movie} from "../../model/movie/Movie";
import {Theater} from "../../model/movie/Theater";

export interface MovieDTO{
    movie:Movie;
    timeSelected:string;
    dateStart?:Date;
    price:number,
    theater:Theater;
}