import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {Booking} from "../../../model/booking/Booking";

@Component({
    selector: 'app-list-booking',
    templateUrl: './list-booking.component.html',
    styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {
    bookingList: Array<Booking> | any = [];
    p: number | any;
    checkPagination = true;

    constructor(private bookingService: BookingService) {
    }

    ngOnInit(): void {
        this.bookingService.getAll().subscribe(
            (data) => {
                this.bookingList = data
                this.p = 1;
            }
        );
    }

    searchBooking(search: string) {
        this.bookingService.getBySearch(search).subscribe(
            (data) => {
                this.bookingList = data;
            }
        );
    }
}
