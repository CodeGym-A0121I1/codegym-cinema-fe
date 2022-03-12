import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from "../../../model/booking/Booking";
import {SeatMovieDTO} from "../../../dto/showtime/SeatMovieDTO";
import {AuthService} from "../../../service/auth.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowTimeService} from "../../../service/show-time.service";
import {ShowTime} from "../../../model/booking/ShowTime";

@Component({
    selector: 'app-create-booking',
    templateUrl: './create-booking.component.html',
    styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {


    @Input() seatMovieDTO!: SeatMovieDTO;
    bookingid: Booking | any;
    id: String | undefined;
    listUser: Array<string> = ['A', 'B', 'C', 'D', 'E'];
    listseatUserBooked: string[] = [];
    iduser!: string;
    user!: User;
    showtimes: Array<ShowTime> = [];
    showtimemovietheat!: ShowTime;
    totalmoney: number = 0;

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
        private activatedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private router: Router,
        public authservice: AuthService,
        private userservice: UserService,
        private showtime: ShowTimeService,
        private snackbar: MatSnackBar,
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
                console.log(this.showtimes);
            }
        )
        // @ts-ignore
        this.seatMovieDTO.dateStart = "2022-03-03";
        console.log(this.seatMovieDTO.dateStart);
        // @ts-ignore
        // @ts-ignore
        this.iduser = this.authservice.getIdUser();
        for (let i = 0; i < this.seatMovieDTO.listSeat.length; i++) {
            this.totalmoney += 45000;
        }
        console.log(this.totalmoney);
        this.bookingservice.getBookingById(this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
                this.bookingid = data;
            }
        )
        console.log(this.bookingid);
        this.userservice.getById("user").subscribe(datauser => {
                this.user = datauser;
            }
        )
        console.log(this.user);
    }

    test: boolean = true;

    create() {
        this.test = false;
        this.formBooking.value.user.id = this.authservice.getIdUser();
        this.formBooking.value.date = this.seatMovieDTO.dateStart;
        this.formBooking.value.time = this.seatMovieDTO.timeStart.slice(0, -3);
        this.formBooking.value.paid = false;
        this.formBooking.value.totalPrice = this.totalmoney;
        this.formBooking.value.showTime.id = this.showtimemovietheat.id.valueOf();
        console.log(this.formBooking.value);
        this.bookingservice.createBooking(this.formBooking.value).subscribe(
            (data) => {
                this.bookingid = data;
                console.log("id moi nhat1")
                console.log(this.bookingid.id);
            }
        );
        console.log("id moi nhat2")
        console.log(this.bookingid.id);
    }

    thanhtoan() {
        console.log("id moi nhat3")
        console.log(this.bookingid.id);
        this.bookingservice.getBookingById(this.bookingid.id).subscribe(
            (data) => {
                this.bookingid.paid = data;
                console.log("trang thai");
                console.log(this.bookingid.paid);
            }
        );
        this.router.navigateByUrl("/paypal");
    }
}
