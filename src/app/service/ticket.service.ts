import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "../model/booking/Ticket";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
    readonly ARL_TICKET = "http://localhost:8080/api/ticket";
    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    constructor(private httpClient: HttpClient) {
    }

    readonly URL_API_SHOWTICKET_BOOKINGID = "http://localhost:8080/api/ticket"
    readonly URL_API_CREATE_TICKET = "http://localhost:8080/api/ticket";
    readonly URL_API_searname = "http://localhost:8080/api/ticket/searname";
    readonly URL_API_findById = "http://localhost:8080/api/ticket/seat"

    createTicket(ticket: Array<Ticket>) {
        return this.httpClient.post(this.URL_API_CREATE_TICKET, ticket)
    }

    getByIdBooking(id: string): Observable<Array<Ticket>> {
        return this.httpClient.get<Array<Ticket>>(this.ARL_TICKET + "/" + id);
    }

    updateByIdBooking(id: string): Observable<Array<void>> {
        // @ts-ignore
        return this.httpClient.put<void>(this.ARL_TICKET + "/" + id);
    }
    getAllSeatNameBookedByPriceId(nameseat: string, idbooking: string) {
        return this.httpClient.get<Array<Ticket>>(this.URL_API_searname + "?nameseat=" + nameseat + "?idbooking=" + idbooking, {headers: this.requestHeader});
    }

    getSeatByName(name: string): Observable<any> {
        return this.httpClient.get(this.URL_API_findById + '/' + name);
    }
}
