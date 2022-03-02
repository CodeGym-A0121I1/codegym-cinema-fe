import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticUserComponent} from "../component/user/statistic-user/statistic-user.component";
import {AuthGuard} from "../guard/auth.guard";

const routes: Routes = [
    {
        path: "statistic/user",
        component: StatisticUserComponent,
        canActivate: [AuthGuard],
        data: {role: ['ROLE_ADMIN']}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
