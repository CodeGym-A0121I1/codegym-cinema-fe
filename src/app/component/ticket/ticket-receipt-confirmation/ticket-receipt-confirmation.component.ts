import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {TicketService} from "../../../service/ticket.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Ticket} from "../../../model/booking/Ticket";
import {Booking} from "../../../model/booking/Booking";

@Component({
    selector: 'app-ticket-receipt-confirmation',
    templateUrl: './ticket-receipt-confirmation.component.html',
    styleUrls: ['./ticket-receipt-confirmation.component.css']
})
export class TicketReceiptConfirmationComponent implements OnInit {

    booking!: Booking;
    ticketList: Array<Ticket> = [];
    totalMoney!: number;
    checkStatus = false;

    constructor(private bookingService: BookingService,
                private ticketService: TicketService,
                private activatedRoute: ActivatedRoute,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        let id = this.activatedRoute.snapshot.params['idBooking'];
        this.bookingService.getById(id).subscribe(data => {
                this.booking = data;
                this.ticketService.getByIdBooking(id).subscribe(data => {
                    this.ticketList = data;
                })
                this.bookingService.totalMoney(id).subscribe(data => {
                    this.totalMoney = data;
                })
            },
            (error1) => {
                if (error1) {
                    this.matSnackBar.open("Thông tin đường dẫn bị sai!")._dismissAfter(3000);
                }
            }
        );
    }

    ticketReceipt(id: string) {
        this.ticketService.updateByIdBooking(id).subscribe(data => {
            this.checkStatus = true;
            if (data) {
                this.matSnackBar.open("Trạng thái vé: Đã nhận thành công!", "OK", {
                    duration: 3000
                })
            }
        })
    }
}
