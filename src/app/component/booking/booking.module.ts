import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateBookingComponent} from './create-booking/create-booking.component';
import {DetailBookingComponent} from './detail-booking/detail-booking.component';
import {ListBookingComponent} from './list-booking/list-booking.component';
import {BookingRoutingModule} from "../../routing/booking-routing.module";

@NgModule({
    declarations: [
        CreateBookingComponent,
        DetailBookingComponent,
        ListBookingComponent
    ],
    imports: [
        CommonModule,
        BookingRoutingModule
    ]
})
export class BookingModule {
}
