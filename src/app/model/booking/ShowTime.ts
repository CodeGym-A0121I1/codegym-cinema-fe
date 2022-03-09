import {Time} from "@angular/common";
import {Booking} from "./Booking";
import {Movie} from "../movie/Movie";
import {Theater} from "../theater/Theater";

export interface ShowTime {
    id: string;
    startTime: Time;
    startDate: Date;
    price: number;
    bookingList: Array<Booking>;
    movie: Movie;
    theater: Theater;
}
