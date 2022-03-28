import {Component, Input, OnInit} from '@angular/core';
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {Booking} from "../../../model/booking/Booking";
import {Router} from "@angular/router";
import {BookingService} from "../../../service/booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
    public payPalConfig?: IPayPalConfig;
    @Input() price!: number;
    @Input() booking!: Booking;
    test!: boolean;

    constructor(private router: Router,
                private bookingService: BookingService,
                private snackBar: MatSnackBar,) {
    }

    ngOnInit(): void {
        this.initConfig();
    }

    private initConfig(): Object {
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'sb',
            createOrderOnClient: (data) => <ICreateOrderRequest><unknown>{
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: this.price,
                        },
                    }
                ]
            },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onClientAuthorization: (data) => {
                this.bookingService.updateStatus(this.booking.id).subscribe(
                    data => {
                        console.log(data)
                        this.snackBar.open("Giao dịch của quý khách đã được hoàn thành", "Oke", {
                            duration: 3000,
                            panelClass: ['mat-toolbar', 'mat-toolbar']
                        })
                        this.router.navigateByUrl("/movie");
                    }
                )
            },
            onCancel: (data, actions) => {
                this.snackBar.open("Giao dịch của quý khách không thành công!", "Oke", {
                    duration: 3000,
                    panelClass: ['mat-toolbar', 'mat-toolbar']
                })
            },
            onError: err => {
                this.snackBar.open("Paypal đăng gặp trục trặc mong bản hãy thử lại sau!", "Oke", {
                    duration: 3000,
                    panelClass: ['mat-toolbar', 'mat-toolbar']
                })
            },
            onClick: (data, actions) => {
            },
        };
        return this.payPalConfig;
    };
}
