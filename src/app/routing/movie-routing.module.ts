import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from "../component/movie/movie-detail/movie-detail.component";

const routes: Routes = [
    {path: "detail-movie/:idMovie", component: MovieDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule {
}
