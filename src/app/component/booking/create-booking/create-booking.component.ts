import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from '@angular/router';
import {Booking} from "../../../model/booking/Booking";
import {MovieDTO} from "../../../dto/showtime/MovieDTO";
import {SeatMovieDTO} from "../../../dto/showtime/SeatMovieDTO";
import {AuthService} from "../../../service/auth.service";
import {Seat} from "../../../model/Seat";
import {UserService} from "../../../service/user.service";
import firebase from "firebase/compat";
import {User} from "../../../model/user/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

    constructor(
        private bookingservice: BookingService,
        private activatedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private router: Router,
        public authservice: AuthService,
        private userservice: UserService,
        private snackbar: MatSnackBar,
    ) {
    }

    ngOnInit(): void {
        // @ts-ignore
        this.seatMovieDTO.dateStart = "2020-02-08";
        // @ts-ignore
        this.iduser = this.authservice.getIdUser();
        for (let i = 0; i < this.seatMovieDTO.listSeat.length; i++) {
            this.totalmoney += 45;
        }
        this.bookingservice.getBookingById(this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
                this.bookingid = data;
            }
        )
        this.userservice.getById("user").subscribe(datauser => {
                this.user = datauser;
            }
        )
    }

    test: boolean = true;

    create() {
        this.test = false;
    }

    thanhtoan() {
        console.log("giờ ");
        console.log(this.formBooking.value.time.slice(0, -3));
        this.formBooking.value.user.id = this.authservice.getIdUser();
        this.formBooking.value.date = this.seatMovieDTO.dateStart;
        this.formBooking.value.time = this.seatMovieDTO.timeStart.slice(0, -3);
        this.formBooking.value.paid = false;
        this.formBooking.value.totalPrice = this.totalmoney;
        this.formBooking.value.showTime.id = "ST1";
        console.log(this.formBooking.value);
        this.bookingservice.createBooking(this.formBooking.value).subscribe(
            (data) => {
                this.bookingid = data;
                console.log(data);
            }
        );
        this.router.navigateByUrl("/paypal");
    }
}
