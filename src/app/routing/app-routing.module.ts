import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "../component/display/list-movie/list-movie.component";
import {ForbiddenComponent} from "../component/display/forbidden/forbidden.component";

const appRoutes: Routes = [
    {path: "movie", component: ListMovieComponent},
    {path: "forbidden", component: ForbiddenComponent}
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