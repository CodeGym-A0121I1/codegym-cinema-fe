import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "./list-movie/list-movie.component";

const appRoutes: Routes = [
  { path: "movie", component: ListMovieComponent  }
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
