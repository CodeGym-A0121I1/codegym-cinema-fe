import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectedMovieShowTimeComponent} from './selected-movie-show-time/selected-movie-show-time.component';
import {SelectedSeatComponent} from './selected-seat/selected-seat.component';
import {ShowTimeRoutingModule} from "../../routing/show-time-routing.module";
import {BookingModule} from "../booking/booking.module";

@NgModule({
    declarations: [
        SelectedMovieShowTimeComponent,
        SelectedSeatComponent
    ],
    imports: [
        CommonModule,
        ShowTimeRoutingModule,
        BookingModule
    ]
})
export class ShowTimeModule {
}
