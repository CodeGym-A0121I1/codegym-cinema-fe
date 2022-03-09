import {Movie} from "../../model/movie/Movie";
import {Theater} from "../../model/movie/Theater";
import {Time} from "@angular/common";

export interface MovieDTO{
    movie:Movie;
    timeSelected:Time;
    dateStart?:Date;
    price:number,
    theater:Theater;
}