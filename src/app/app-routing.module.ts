import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "./list-movie/list-movie.component";
import {SelectedMovieShowTimeComponent} from "./selected-movie-show-time/selected-movie-show-time.component";
import {SelectedSeatComponent} from "./selected-seat/selected-seat.component";

const appRoutes: Routes = [
  { path: "movie", component: ListMovieComponent  },
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
