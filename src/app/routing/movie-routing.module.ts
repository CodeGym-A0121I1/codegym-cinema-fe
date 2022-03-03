import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateMovieComponent} from "../component/movie-management/create-movie/create-movie.component";



const appRoutes: Routes = [
    {path: "api/movie/create", component : CreateMovieComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class MovieRoutingModule {
}

