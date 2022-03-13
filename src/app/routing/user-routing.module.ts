import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListMemberComponent} from "../component/user/list-member/list-member.component";
import {UpdateMemberComponent} from "../component/user/update-member/update-member.component";
import {StatisticUserComponent} from "../component/user/statistic-user/statistic-user.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {
        path: "statistic/user",
        component: StatisticUserComponent,
        canActivate: [AuthGuard],
        data: {role: ['ROLE_ADMIN']}
    },
    {path: "member", component: ListMemberComponent},
    {path: "update/:id", component: UpdateMemberComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
