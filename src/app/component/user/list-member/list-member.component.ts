import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  memberList! : any[];
  checkPagination = true;
  p: number| any;


  public mySentences: Array<any> = [
    {id: 'MALE', text: 'Nam'},
    {id: 'FEMALE', text: 'Nữ'},
    {id: 'OTHER', text: ' Khác'},
  ];
  constructor(private userService: UserService,
              private activatedRoute:ActivatedRoute,
              private matDialog:MatDialog,
              private formBuilder: FormBuilder,
              private  snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getListMember().subscribe((data: any)=>{
      this.memberList = data;
      console.log(data);
    })
  }
  convertGender(gender: string){
    let genderVn : string = '';
    for (const s of this.mySentences) {
      if (s.id == gender){
        genderVn = s.text;

      }

    }
    return genderVn;
  }
}
