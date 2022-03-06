import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Booking} from "../model/booking/Booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private httpClient: HttpClient) {
  }

  readonly UPR_API_DETAIL_BOOKING = "http://localhost:8080/api/booking"
  readonly UPR_API_CREATE_BOOKING = -"http://localhost:8080/api/booking/create";

  getBookingById(idBooking: String): Observable<any> {
    return this.httpClient.get(this.UPR_API_DETAIL_BOOKING + '/' + idBooking);
  }


  createBooking(booking: Booking) {
    // @ts-ignore
    return this.httpClient.post(this.UPR_API_CREATE_BOOKING, booking)
  }
}
