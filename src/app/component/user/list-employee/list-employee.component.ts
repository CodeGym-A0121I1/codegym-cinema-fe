import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employeeList: any;
  p: any;
  curPage: number;

  employeeForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEmployee().subscribe(
        (data: any) => {
          this.employeeList = data
        }
    )
  }

}
