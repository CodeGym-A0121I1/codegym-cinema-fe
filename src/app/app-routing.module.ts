import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListMovieComponent} from "./list-movie/list-movie.component";
import {ListMemberComponent} from "./component/user-management/list-member/list-member.component";
import {UpdateMemberComponent} from "./component/user-management/update-member/update-member.component";

const appRoutes: Routes = [
  { path: "movie", component: ListMovieComponent  },
  { path: "member", component: ListMemberComponent  },
  {path: "update/:id", component: UpdateMemberComponent}
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
