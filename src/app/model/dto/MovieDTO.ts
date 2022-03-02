import {Movie} from "../movie/Movie";
import {Theater} from "../movie/Theater";

export interface MovieDTO{
    movie:Movie;
    timeSelected:string;
    dateStart?:Date;
    price:number,
    theater:Theater;
}