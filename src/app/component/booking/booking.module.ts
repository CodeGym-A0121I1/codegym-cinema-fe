import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateBookingComponent} from './create-booking/create-booking.component';
import {ListBookingComponent} from './list-booking/list-booking.component';
import {BookingRoutingModule} from "../../routing/booking-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PaypalComponent } from './paypal/paypal.component';
import {NgxPayPalModule} from "ngx-paypal";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    declarations: [
        CreateBookingComponent,
        ListBookingComponent,
        PaypalComponent
    ],
    exports: [
        CreateBookingComponent,
        PaypalComponent
    ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        BookingRoutingModule,
        ReactiveFormsModule,
        NgxPayPalModule
    ]
})
export class BookingModule {
}
