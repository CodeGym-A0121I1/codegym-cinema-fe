import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";


@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  memberList! : any[];
  p: any;
  checkPagination = true;
  curPage!: number;

  constructor(private service: UserService) {

  }



  ngOnInit(): void {
    this.service.getAllMember().subscribe((data: any) => {
      this.memberList = data;
      console.log(data);
    }
    )
  }

}
