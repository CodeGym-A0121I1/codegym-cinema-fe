import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    isInputOtp: boolean = false;
    username: string = "";
    isGetOtp: boolean = true;

    constructor(private userService: UserService,
                private matDialogRef: MatDialogRef<LoginComponent>,
                private matSnackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    getOtp(username: string) {
        this.isGetOtp = false;
        this.username = username;
        this.matSnackBar.open("Mã OTP đang được gửi đến email của bạn...");
        this.userService.generateOtp(username).subscribe(
            (data) => {
                this.isGetOtp = true;
                if (data) {
                    this.isInputOtp = true;
                    this.isGetOtp = false;
                    this.matSnackBar.open("Đã gửi mã OTP thành công" , "OK", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-primary']
                    })
                } else if (data === null) {
                    this.matSnackBar.open("Tài khoản không tồn tại" , "OK", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-primary']
                    });
                } else {
                    this.matSnackBar.open("Tài khoản đã bị khóa" , "OK", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-primary']
                    })
                }
                return 0;
            },
            (error) => {
                this.isGetOtp = true;
                this.matSnackBar.open("Email không tồn tại !", "Đóng", {
                    panelClass: ['mat-toolbar', 'mat-warn'],
                    duration: 3000
                })
            }
        )

    }

    forgotPassword(otp: string, newPassword: string) {
        this.userService.forgotPassword(this.username, newPassword, otp).subscribe(
            (data) =>{
                if (data) {
                    this.matDialogRef.close();
                    this.matSnackBar.open("Đã đổi mật khẩu thành công", "Đóng", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-primary']
                    })
                } else if (data == null) {
                    this.matSnackBar.open("Hệ thống đang bảo trì", "Đóng", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-warn'],
                    })
                } else {
                    this.matSnackBar.open("Mã OTP không đúng", "Đóng", {
                        duration: 3000,
                        panelClass: ['mat-toolbar', 'mat-warn'],
                    })
                }
            }
        );
    }
}
