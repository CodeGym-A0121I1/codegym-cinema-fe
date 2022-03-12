import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBookingComponent} from "../component/booking/list-booking/list-booking.component";
import {TicketReceiptConfirmationComponent} from "../component/ticket/ticket-receipt-confirmation/ticket-receipt-confirmation.component";
import {AuthGuard} from "../guard/auth.guard";
import {CreateBookingComponent} from "../component/booking/create-booking/create-booking.component";
import {PaypalComponent} from "../component/booking/paypal/paypal.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {path: "booking", component: ListBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN','ROLE_EMPLOYEE', 'ROLE_USER']}},
    {path: "booking/:idBooking", component: TicketReceiptConfirmationComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN','ROLE_EMPLOYEE']}}
    {path: "create-booking", component: CreateBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']}},
    {path: "paypal", component: PaypalComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule{}
