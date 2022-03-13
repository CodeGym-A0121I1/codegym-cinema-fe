import {User} from "../user/User";
import {ShowTime} from "./ShowTime";
import {Ticket} from "./Ticket";
import {Time} from "@angular/common";

export interface Booking {
    id: string;
    user: User;
    showTime: ShowTime;
    ticketList: Array<Ticket>;
    date: Date;
    time: Time;
    totalPrice: number;
    paid: boolean;
    quantity: number
}
