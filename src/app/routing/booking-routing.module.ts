import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBookingComponent} from "../component/booking/list-booking/list-booking.component";
import {TicketReceiptConfirmationComponent} from "../component/ticket/ticket-receipt-confirmation/ticket-receipt-confirmation.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {path: "management/booking", component: ListBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN','ROLE_EMPLOYEE']}},
    {path: "management/booking/:idBooking", component: TicketReceiptConfirmationComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN','ROLE_EMPLOYEE']}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule {
}
