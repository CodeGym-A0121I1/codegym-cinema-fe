import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {ListMemberComponent} from "../../component/user-management/list-member/list-member.component";



const routes: Routes = [
    {
        path: "user", children: [
            {path: "", component: ListMemberComponent},

        ],

    }
];

@NgModule({
    declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementModule {
}
