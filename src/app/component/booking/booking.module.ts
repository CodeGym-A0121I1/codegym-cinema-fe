import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateBookingComponent} from './create-booking/create-booking.component';
import {DetailBookingComponent} from './detail-booking/detail-booking.component';
import {ListBookingComponent} from './list-booking/list-booking.component';
import {BookingRoutingModule} from "../../routing/booking-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CreateBookingComponent,
        DetailBookingComponent,
        ListBookingComponent
    ],
    exports: [
        CreateBookingComponent
    ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        ReactiveFormsModule
    ]
})
export class BookingModule {
}
