import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailBookingComponent} from "../component/booking/detail-booking/detail-booking.component";
import {CreateBookingComponent} from "../component/booking/create-booking/create-booking.component";

const routes: Routes = [
    {path: "detail-booking/:idBooking", component: DetailBookingComponent},
    {path: "create-booking", component: CreateBookingComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule{}
