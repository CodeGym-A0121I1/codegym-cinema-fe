import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListMemberComponent} from "../component/user/list-member/list-member.component";
import {UpdateMemberComponent} from "../component/user/update-member/update-member.component";

const routes: Routes = [
    {path: "member", component: ListMemberComponent},
    {path: "update/:id", component: UpdateMemberComponent}


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule{}
