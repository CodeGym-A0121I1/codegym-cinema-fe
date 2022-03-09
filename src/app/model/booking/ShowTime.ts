import {Time} from "@angular/common";
import {Movie} from "../movie/Movie";
import {Booking} from "./Booking";
import {Theater} from "../movie/Theater";


export interface ShowTime {
    id: string;
    startTime: Time;
    startDate: Date;
    price: number;
    bookingList: Array<Booking>;
    movie: Movie;
    theater: Theater;
}
