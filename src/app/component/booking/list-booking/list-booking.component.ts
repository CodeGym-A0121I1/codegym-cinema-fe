import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {Booking} from "../../../model/booking/Booking";
import {FormBuilder, Validators} from "@angular/forms";
import {error} from "@angular/compiler/src/util";
import {MatSnackBar} from "@angular/material/snack-bar";

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
                private fb: FormBuilder,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.bookingService.getBooking().subscribe(
            (data) => {
                this.bookingList = data
                this.p = 1;
            },
            (error) => {
                this.matSnackBar.open("Không có dữ liệu nào được đăng ký!")._dismissAfter(3000)
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
            },
            (error) => {
                this.matSnackBar.open("Hiện không có kết quả nào phù hợp với thông tin cần tìm!")._dismissAfter(3000)
            }
        );
    }
}
