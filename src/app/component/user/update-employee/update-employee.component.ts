import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";
import {Employee} from "../../../model/user/Employee";
import {Account} from "../../../model/user/Account";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private service: UserService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private route: Router,
              private fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  updateEmployee!: FormGroup;
  selectedImage: any = null;
  employee!: Employee;
  dataFake:any;
  account!: Account;

  ngOnInit(): void {
    this.updateEmployee = this.fb.group( {

      id: ['',Validators.required],
      fullName: ['',Validators.required],
      email: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      password: [''],
      address: ['',Validators.required],
      username: ['',Validators.required],
      dayOfBirth:['',Validators.required],
      idCard:['',Validators.required],
      gender: ['', Validators.required],
      image: ['']
    })

    this.service.getEmployeeById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      console.log(data)
      this.dataFake=data;
      this.updateEmployee.setValue({
        id: data.id,
        fullName: data.fullName,
        address: data.address,
        email: data.email,
        password: '',
        phoneNumber: data.phoneNumber,
        username: data.account.username,
        dayOfBirth: data.dayOfBirth,
        idCard: data.idCard,
        gender: data.gender,
        image: data.image

      });
      console.log(this.updateEmployee.value)
    })
  }

  isChange: boolean = false;
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.updateEmployee.patchValue({image: url});
          });
        })
    ).subscribe();
    this.isChange = true;
  }



  save() {
    if (this.isChange) {
      const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.updateEmployee.patchValue({image: url});

              this.employee = {
                id: this.updateEmployee.value.id,
                fullName: this.updateEmployee.value.fullName,
                email: this.updateEmployee.value.email,
                phoneNumber: this.updateEmployee.value.phoneNumber,
                gender: this.updateEmployee.value.gender,
                dayOfBirth: this.updateEmployee.value.dayOfBirth,
                address: this.updateEmployee.value.address,
                idCard: this.updateEmployee.value.idCard,
                image: this.updateEmployee.value.image,
                provider: this.updateEmployee.value.provider,
                account: this.dataFake.account,

              }

              this.service.updateEmployee(this.employee).subscribe(() => {
                console.log(this.updateEmployee.value)
                this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
                this.route.navigateByUrl("/employee");
              })
            });
          })
      ).subscribe();
    } else {
      console.log(this.updateEmployee.value);
      if (this.updateEmployee.valid) {
        if (this.updateEmployee.value.password != '') {
          this.dataFake.account.password = this.updateEmployee.value.password;
          console.log(this.updateEmployee.value.password);
        }

        this.employee = {
          id: this.updateEmployee.value.id,
          fullName: this.updateEmployee.value.fullName,
          email: this.updateEmployee.value.email,
          phoneNumber: this.updateEmployee.value.phoneNumber,
          gender: this.updateEmployee.value.gender,
          dayOfBirth: this.updateEmployee.value.dayOfBirth,
          address: this.updateEmployee.value.address,
          idCard: this.updateEmployee.value.idCard,
          image: this.updateEmployee.value.image,
          provider: this.updateEmployee.value.provider,
          account: this.dataFake.account,

        }
        console.log(this.employee);
        this.service.updateEmployee(this.employee).subscribe(() => {
          this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
          this.route.navigateByUrl("/employee");

        })
      }
    }
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

}
