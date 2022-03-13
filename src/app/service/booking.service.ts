import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Booking} from "../model/booking/Booking";

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
        return this.httpClient.get<Array<Booking>>(this.URL_BOOKING + "/list");
    }

    getById(id: string): Observable<Booking> {
        return this.httpClient.get<Booking>(this.URL_BOOKING + "/" + id);
    }

    readonly UPR_API_DETAIL_BOOKING = "http://localhost:8080/api/booking"
    readonly UPR_API_CREATE_BOOKING = "http://localhost:8080/api/booking/create";
    readonly UPR_API_UPDATE_PAID_BOOKING = "http://localhost:8080/api/booking/";

    getBookingById(idBooking: string): Observable<any> {
        return this.httpClient.get(this.UPR_API_DETAIL_BOOKING + '/' + idBooking);
    }

    createBooking(booking: Object): Observable<Booking> {
        return this.httpClient.post<Booking>(this.UPR_API_CREATE_BOOKING, booking);
    }

    getBySearch(search: string): Observable<Array<Booking>> {
        return this.httpClient.get<Array<Booking>>(this.URL_BOOKING + "/search?search=" + search);
    }

    totalMoney(id: string): Observable<number> {
        return this.httpClient.get<number>(this.URL_BOOKING + "/total-money/" + id);
    }

    updatebooking(booking: Booking): Observable<Booking> {
        return this.httpClient.put<Booking>(this.UPR_API_UPDATE_PAID_BOOKING, booking);
    }

    updateStatus(idBooking: string): Observable<Booking> {
        return this.httpClient.put<Booking>(this.UPR_API_UPDATE_PAID_BOOKING + idBooking + "/status", null);
    }
}
