import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../../service/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router } from '@angular/router';
import {Booking} from "../../../model/booking/Booking";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  bookingid: Booking | any;
  id: String | undefined;
  listUser: Array<string> = ['A', 'B', 'C', 'D', 'E'];
  constructor(
      private bookingservice: BookingService,
      private activatedRoute: ActivatedRoute,
      private snackBar: MatSnackBar,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.bookingservice.getBookingById(this.activatedRoute.snapshot.params['idBooking']).subscribe(data => {
          this.bookingid = data;
          console.log(this.bookingid);
        }
    )

  }


  create() {
    //   thêm booking sau đó chuyển sang
    // this.bookingservice.createBooking(this.bookingid.value).subscribe(() => {
    //     this.snackBar.open("tiến thành thanh toán")
    //     {
    //         duration: 5000
    //     }
    this.id = 'B3';
    this.router.navigateByUrl('/detail-booking/' + this.id);
    // })
  }

  thanhtoan() {

  }
}
