import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateUserComponent} from './update-user/update-user.component';
import {DetailUserComponent} from './detail-user/detail-user.component';
import {ChangePasswordUserComponent} from './change-password-user/change-password-user.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {UserRoutingModule} from "../../routing/user-routing.module";
import { ListMemberComponent } from './list-member/list-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    declarations: [
        UpdateUserComponent,
        DetailUserComponent,
        ChangePasswordUserComponent,
        ListEmployeeComponent,
        UpdateEmployeeComponent,
        ListMemberComponent,
        UpdateMemberComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class UserModule {
}
