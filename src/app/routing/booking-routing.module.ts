import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateBookingComponent} from "../component/booking/create-booking/create-booking.component";
import {PaypalComponent} from "../component/booking/paypal/paypal.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {path: "create-booking", component: CreateBookingComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']}},
    {path: "paypal", component: PaypalComponent}, // role gì tự phân quyền vào
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule {
}
