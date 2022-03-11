import {Movie} from "../../model/movie/Movie";
import {Time} from "@angular/common";
import {Theater} from "../../model/theater/Theater";

export interface MovieDTO{
    movie:Movie;
    timeSelected:Time;
    dateStart?:Date;
    price:number,
    theater:Theater;
}