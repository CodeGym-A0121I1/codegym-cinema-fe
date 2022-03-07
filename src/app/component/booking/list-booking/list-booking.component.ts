import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {Booking} from "../../../model/booking/Booking";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-list-booking',
    templateUrl: './list-booking.component.html',
    styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {
    bookingList: Array<Booking> | any = [];
    p: number | any;
    checkPagination = true;

    constructor(private bookingService: BookingService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.bookingService.getAll().subscribe(
            (data) => {
                this.bookingList = data
                this.p = 1;
            }
        );
    }

    searchForm = this.fb.group({
        search: ['', Validators.maxLength(100)],
    });

    searchBooking(search: string) {
        this.bookingService.getBySearch(search).subscribe(
            (data) => {
                this.bookingList = data;
            }
        );
    }
}
