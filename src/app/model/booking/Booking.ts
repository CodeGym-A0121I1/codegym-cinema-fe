import {ShowTime} from "./ShowTime";
import {Ticket} from "./Ticket";
import {Time} from "@angular/common";
import {User} from "../user/User";

export interface Booking {
    id: string;
    user: User;
    showTime: ShowTime;
    ticketList: Ticket;
    date: Date;
    time: Time;
    totalPrice: number;
    paid: boolean;
}
