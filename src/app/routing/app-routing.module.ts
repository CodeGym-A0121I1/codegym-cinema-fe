import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "../component/movie/list-movie/list-movie.component";
import {ForbiddenComponent} from "../component/display/forbidden/forbidden.component";

const appRoutes: Routes = [
    {path: "", redirectTo: "movie", pathMatch: "full"},
    {path: "movie", component: ListMovieComponent},
    {path: "forbidden", component: ForbiddenComponent},
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
