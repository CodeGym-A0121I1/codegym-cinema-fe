import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from "../../../model/booking/Booking";
import {AuthService} from "../../../service/auth.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowTimeService} from "../../../service/show-time.service";
import {ShowTime} from "../../../model/booking/ShowTime";
import {TicketService} from "../../../service/ticket.service";
import {Ticket} from "../../../model/booking/Ticket";
import {signOut} from "@angular/fire/auth";
import {SeatMovieDTO} from "../../../dto/showTime/SeatMovieDTO";
import {Seat} from "../../../model/theater/Seat";

@Component({
    selector: 'app-create-booking',
    templateUrl: './create-booking.component.html',
    styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
    @Input() seatMovieDTO!: SeatMovieDTO;
    ticketid: Ticket | any;
    seatId: Array<Seat> = [];
    id: String | undefined;
    listUser: Array<string> = ['A', 'B', 'C', 'D', 'E'];
    listseatUserBooked: string[] = [];
    iduser: string;
    user!: User;
    showtimes: Array<ShowTime> = [];
    showtimemovietheat!: ShowTime;
    totalmoney: number = 0;
    isDisplay1: boolean = false;
    newBooking!: Booking;
    quantitys: number = 0;

    formBooking = new FormGroup(
        {
            date: new FormControl('', Validators.required),
            id: new FormControl('', Validators.required),
            paid: new FormControl('', Validators.required),
            showTime: new FormGroup({
                    id: new FormControl()
                }
            ),
            time: new FormControl('', Validators.required),
            totalPrice: new FormControl('', Validators.required),
            user: new FormGroup({
                    id: new FormControl()
                }
            ),
            quantity: new FormControl('', Validators.required)
        }
    )
    formTicket = new FormGroup(
        {
            id: new FormControl('', Validators.required),
            booking: new FormGroup({
                    id: new FormControl()
                }
            ),
            seat: new FormGroup({
                    id: new FormControl()
                }
            ),
            price: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        }
    )

    constructor(
        private bookingservice: BookingService,
        private ticketservice: TicketService,
        private activatedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private router: Router,
        public authservice: AuthService,
        private userservice: UserService,
        private showtime: ShowTimeService,
    ) {
    }

    ngOnInit(): void {
        this.showtime.getAllShowTimeByMovieIdanhTheaterId(this.seatMovieDTO.movie.id, this.seatMovieDTO.Theater.id).subscribe(
            (dateshowtime) => {
                this.showtimes = dateshowtime;
                for (let i = 0; i < this.showtimes.length; i++) {
                    this.showtimemovietheat = this.showtimes[0];
                    this.showtimemovietheat = this.showtimes[0];
                }
            }
        )
        for (let i = 0; i < this.seatMovieDTO.listSeat.length; i++) {
            this.ticketservice.getSeatByName(this.seatMovieDTO.listSeat[i]).subscribe(
                (dateseat) => {
                    this.seatId.push(dateseat);
                }
            )
        }
        // @ts-ignore
        this.iduser = this.authservice.getIdUser();
        for (let i = 0; i < this.seatMovieDTO.listSeat.length; i++) {
            this.totalmoney += 1;
            this.quantitys += 1;
        }
        this.userservice.getById("user").subscribe(datauser => {
                this.user = datauser;
            }
        )
    }

    test: boolean = true;

    create() {
        this.test = false;
        this.formBooking.value.user.id = this.authservice.getIdUser();
        this.formBooking.value.date = this.seatMovieDTO.dateStart;
        this.formBooking.value.time = this.seatMovieDTO.timeStart;
        this.formBooking.value.paid = false;
        this.formBooking.value.totalPrice = this.totalmoney;
        this.formBooking.value.showTime.id = this.showtimemovietheat.id.valueOf();
        this.formBooking.value.quantity = this.quantitys;
        this.bookingservice.createBooking(this.formBooking.value).subscribe(
            (data) => {
                this.newBooking = data;
                this.formTicket.value.booking = this.newBooking;
                this.formTicket.value.price = 45000;
                this.formTicket.value.status = false;
                for (let i = 0; i < this.seatId.length; i++) {
                    let newTicket: Ticket = {
                        id: "",
                        booking: this.formTicket.value.booking,
                        status: this.formTicket.value.status,
                        seat: this.seatId[i],
                        price: this.formTicket.value.price,
                    };
                    this.listTicket.push(newTicket);
                }

                this.ticketservice.createTicket(this.listTicket).subscribe(
                    (datatickte) => {
                    }
                )
            }
        );
    }

    listTicket: Ticket[] = [];

    thanhtoan() {
        this.isDisplay1 = true;
    }
}
