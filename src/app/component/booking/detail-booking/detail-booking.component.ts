import {Component, OnInit} from '@angular/core';
import {Booking} from "../../../model/booking/Booking";
import {Ticket} from "../../../model/booking/Ticket";
import {Seat} from "../../../model/Seat";
import {BookingService} from "../../../service/booking.service";
import {ActivatedRoute} from "@angular/router";
import {TicketService} from "../../../service/ticket.service";
import {SeatService} from "../../../service/seat.service";

@Component({
    selector: 'app-detail-booking',
    templateUrl: './detail-booking.component.html',
    styleUrls: ['./detail-booking.component.css']
})
export class DetailBookingComponent implements OnInit {
    bookingid!: Booking;
    listSeats: Array<Seat> = [];
    listseatUserBooked: string[] = [];
    ticketSeats: Array<Ticket> = [];
    listticketprice: string[] = [];
    listticketidseat: string[] = [];
    priceFake: number = 999.9;

    constructor(
        private bookingservice: BookingService,
        private activatedRoute: ActivatedRoute,
        private seatService: SeatService,
        private ticketservice: TicketService,
    ) {
    }

    ngOnInit(): void {
        this.bookingservice.getBookingById(this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
                this.bookingid = data;
                console.log("Hiển thị ra chi tiết booking");
                console.log(this.bookingid);
            }
        )
        // this.bookingservice.getBookingById(this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
        //     this.bookingid = data;
        //     console.log(this.bookingid);
        // })
        // this.seatService.getTicketBookingId(this.activatedRoute.snapshot.params['idBooking']).subscribe(dataseat => {
        //     this.listSeats = dataseat;
        //     for (let i = 0; i < this.listSeats.length; i++) {
        //         this.listseatUserBooked.push(this.listSeats[i].name);
        //     }
        //     console.log("list name ghe ");
        //     console.log(this.listseatUserBooked);
        // })
        // this.ticketservice.getTicketBookingId(this.activatedRoute.snapshot.params['idBooking']).subscribe(dataticketSeats => {
        //     this.ticketSeats = dataticketSeats;
        //     for (let i = 0; i < this.ticketSeats.length; i++) {
        //         this.listticketidseat.push(this.ticketSeats[i].seat.id);
        //     }
        //     for (let i = 0; i < this.ticketSeats.length; i++) {
        //         this.listticketprice.push(String(this.ticketSeats[i].price));
        //     }
        //     console.log("id sate  ");
        //     console.log(this.listticketidseat);
        //     console.log("id tiền  ");
        //     console.log(this.listticketprice);
        // })
        // this.ticketservice.getAllSeatNameBookedByPriceId(this.activatedRoute.snapshot.params['idBooking'],this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
        //     this.bookingid = data;
        //     console.log(this.bookingid);
        // })
    }

    create() {


    }

    thanhtoan() {

    }
}
