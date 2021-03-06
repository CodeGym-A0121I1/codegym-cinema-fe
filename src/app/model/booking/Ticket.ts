import {Booking} from "./Booking";
import {Seat} from "../theater/Seat";

export interface Ticket {
    id: string;
    booking: Booking;
    seat: Seat;
    price: number;
    status: boolean;
}
