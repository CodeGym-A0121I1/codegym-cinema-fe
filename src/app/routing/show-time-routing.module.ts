import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    SelectedMovieShowTimeComponent
} from "../component/show-time/selected-movie-show-time/selected-movie-show-time.component";
import {SelectedSeatComponent} from "../component/show-time/selected-seat/selected-seat.component";

const routes: Routes = [
    { path: "selectedMovie", component: SelectedMovieShowTimeComponent  },
    { path: "selectedSeat", component: SelectedSeatComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowTimeRoutingModule{}
