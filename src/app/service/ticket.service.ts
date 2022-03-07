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

    getByIdBooking(id: string): Observable<Array<Ticket>> {
        return this.httpClient.get<Array<Ticket>>(this.ARL_TICKET + "/" + id);
    }

    updateByIdBooking(id: string): Observable<Array<void>> {
        // @ts-ignore
        return this.httpClient.put<void>(this.ARL_TICKET + "/" + id);
    }
}
