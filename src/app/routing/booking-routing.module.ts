import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailBookingComponent} from "../component/booking/detail-booking/detail-booking.component";
import {CreateBookingComponent} from "../component/booking/create-booking/create-booking.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    // {path: "detail-booking/:idBooking", component: DetailBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']}},
    {path: "detail-booking/:idBooking", component: DetailBookingComponent},
    // {path: "create-booking", component: CreateBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']}},
    {path: "create-booking", component: CreateBookingComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule{}
