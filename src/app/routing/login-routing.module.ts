import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../component/login/login/login.component";
import {AdminComponent} from "../component/login/admin/admin.component";
import {AuthGuard} from "../guard/auth.guard";
import {UserComponent} from "../component/login/user/user.component";
import {EmployeeComponent} from "../component/login/employee/employee.component";

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "test-admin", component: AdminComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN']}},
    {path: "test-user", component: UserComponent, canActivate: [AuthGuard], data: {role: ['ROLE_USER']}},
    {path: "test-employee", component: EmployeeComponent, canActivate: [AuthGuard], data: {role: ['ROLE_EMPLOYEE']}},
    {path: "test-admin-and-employee", component: EmployeeComponent, canActivate: [AuthGuard], data: {role: ['ROLE_ADMIN','ROLE_EMPLOYEE']}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule{}
