import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "../component/display/list-movie/list-movie.component";
import {ForbiddenComponent} from "../component/display/forbidden/forbidden.component";
import {
    SelectedMovieShowTimeComponent
} from "../component/show-time/selected-movie-show-time/selected-movie-show-time.component";
import {SelectedSeatComponent} from "../component/show-time/selected-seat/selected-seat.component";

const appRoutes: Routes = [
    {path: "movie", component: ListMovieComponent},
    {path: "forbidden", component: ForbiddenComponent},
    { path: "selectedMovie/:id", component: SelectedMovieShowTimeComponent  },
    { path: "selectedSeat", component: SelectedSeatComponent  }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {
    constructor() {
    }
}
