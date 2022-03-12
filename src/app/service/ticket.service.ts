import {Injectable} from '@angular/core';
import {Ticket} from "../model/booking/Ticket";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    constructor(private httpClient: HttpClient) {
    }

    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    readonly URL_API_SHOWTICKET_BOOKINGID = "http://localhost:8080/api/ticket"
    readonly URL_API_CREATE_TICKET = -"http://localhost:8080/api/ticket/create";
    readonly URL_API_searname = -"http://localhost:8080/api/ticket/searname";

    createTicket(ticket: Object) {
        // @ts-ignore
        return this.httpClient.post(this.URL_API_CREATE_TICKET, ticket)
    }

    getAllSeatNameBookedByPriceId(nameseat: string, idbooking: string) {
        return this.httpClient.get<Array<Ticket>>(this.URL_API_searname + "?nameseat=" + nameseat + "?idbooking=" + idbooking, {headers: this.requestHeader});
    }
}
