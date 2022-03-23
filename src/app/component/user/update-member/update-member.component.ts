import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../model/user/User";
import {Account} from "../../../model/user/Account";




@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  user! : User;
  account! :Account;

  constructor(private service: UserService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private route: Router,
              private fb: FormBuilder,) {
  }

  updateMember!: FormGroup;


  ngOnInit(): void {
    this.updateMember = this.fb.group(
        {
          id: ['', Validators.required],
          fullName: ['', Validators.required],
          email: ['', Validators.required],
          phoneNumber: ['', Validators.required],
          gender: ['', Validators.required],
          dayOfBirth: ['', Validators.required],
          address:['', Validators.required],
          idCard:['',Validators.required],
          image:[''],
          provider:['',Validators.required],
          password: [''],
          username:['',Validators.required]
        }
    )
    this.service.getById(this.activatedRoute.snapshot.params['id']).subscribe(data => {

      this.updateMember.setValue({
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        gender:data.gender,
        dayOfBirth: data.dayOfBirth,
        address: data.address,
        idCard:data.idCard,
        image:'',
        provider:data.provider,
        password:'',
        username:data.account.username
      });
      this.account = data.account;

    })
  }

  save() {

    if (this.updateMember.valid) {
      console.log(this.updateMember.value);

      if(this.updateMember.value.password != ''){
        this.account.password = this.updateMember.value.password;
      }
      // @ts-ignore
      this.user = {
        id: this.updateMember.value.id,
        fullName: this.updateMember.value.fullName,
        email: this.updateMember.value.email,
        phoneNumber: this.updateMember.value.phoneNumber,
        gender: this.updateMember.value.gender,
        dayOfBirth: this.updateMember.value.dayOfBirth,
        address: this.updateMember.value.address,
        idCard:this.updateMember.value.idCard,
        image:this.updateMember.value.image,
        provider:this.updateMember.value.provider,
        account:this.account,
      };
      console.log(this.user);
      // this.service.editMember(this.user).subscribe(
      //
      //     () => {
      //       this.route.navigateByUrl("/member").then(() => this.snackBar.open("sửa thành công")._dismissAfter(3000))
      //     }
      // )
    }
  }


}
