import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    constructor(private httpClient: HttpClient) {
    }

    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );
    readonly UPR_API_DETAIL_BOOKING = "http://localhost:8080/api/booking"
    readonly UPR_API_CREATE_BOOKING = "http://localhost:8080/api/booking/create";

    getBookingById(idBooking: String): Observable<any> {
        return this.httpClient.get(this.UPR_API_DETAIL_BOOKING + '/' + idBooking);
    }

    createBooking(booking: Object) {
        return this.httpClient.post(this.UPR_API_CREATE_BOOKING, booking);
    }
}
