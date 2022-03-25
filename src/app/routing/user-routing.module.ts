import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from "../component/user/list-employee/list-employee.component";
import {AuthGuard} from "../guard/auth.guard";
import {UpdateEmployeeComponent} from "../component/user/update-employee/update-employee.component";
import {StatisticUserComponent} from "../component/user/statistic-user/statistic-user.component";

import {ListMemberComponent} from "../component/user/list-member/list-member.component";
import {UpdateMemberComponent} from "../component/user/update-member/update-member.component";

const routes: Routes = [
    {
        path: "employee",
        component: ListEmployeeComponent,
        canActivate:[AuthGuard], data: {role: ['ROLE_ADMIN']}
    },

    {
        path: "update/:id",
        component: UpdateEmployeeComponent,
        canActivate:[AuthGuard], data: {role: ['ROLE_ADMIN']}
    },
    {
        path: "statistic/user",
        component: StatisticUserComponent,
        canActivate: [AuthGuard],
        data: {role: ['ROLE_ADMIN']}
    },
    {path: "member", component: ListMemberComponent},
    {path: "edit/:id", component: UpdateMemberComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
