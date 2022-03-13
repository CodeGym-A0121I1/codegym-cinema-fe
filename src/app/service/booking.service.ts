import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../model/booking/Booking";
import {TokenDTO} from "../dto/login/TokenDTO";

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    readonly URL_BOOKING = "http://localhost:8080/api/booking";
    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    constructor(private httpClient: HttpClient) {
    }

    getBooking(): Observable<Array<Booking>> {
        return this.httpClient.get<Array<Booking>>(this.URL_BOOKING + "/status/false");
    }

    getById(id: string): Observable<Booking> {
        return this.httpClient.get<Booking>(this.URL_BOOKING + "/" + id);
    }

    getBySearch(search: string): Observable<Array<Booking>> {
        return this.httpClient.get<Array<Booking>>(this.URL_BOOKING + "/search?search=" + search);
    }

    totalMoney(id: string): Observable<number> {
        return this.httpClient.get<number>(this.URL_BOOKING + "/total-money/" + id);
    }
}
