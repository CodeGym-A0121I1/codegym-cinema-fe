import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateBookingComponent} from "../component/booking/create-booking/create-booking.component";

const routes: Routes = [
    {path: "create-booking", component: CreateBookingComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule {
}
