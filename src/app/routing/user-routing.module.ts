import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEmployeeComponent} from "../component/user/list-employee/list-employee.component";
import {AuthGuard} from "../guard/auth.guard";
import {UpdateEmployeeComponent} from "../component/user/update-employee/update-employee.component";

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
