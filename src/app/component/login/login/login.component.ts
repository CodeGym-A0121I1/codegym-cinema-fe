import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthoricationRequest} from "../../../dto/login/AuthoricationRequest";
import {AuthoricationResponse} from "../../../dto/login/AuthoricationResponse";
import {Router} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {LoginService} from "../../../service/login.service";
import {AuthService} from "../../../service/auth.service";
import {TokenDTO} from "../../../dto/login/TokenDTO";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ForgotPasswordComponent} from "../forgot-password/forgot-password.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    authoricationRequest: AuthoricationRequest | any;
    authoricationResponse: AuthoricationResponse | any;
    rememberMe = 0;
    errorUsername: string = "";
    errorPassword: string = "";
    isLoginValid = false;

    token: TokenDTO = new class implements TokenDTO {
        token: string = "";
    };

    constructor(private loginService: LoginService,
                private router: Router,
                private socialAuthService: SocialAuthService,
                private authService: AuthService,
                private matSnackBar: MatSnackBar,
                private matDialog: MatDialog) {
    }


    formLogin = new FormGroup({
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
    });


    ngOnInit(): void {
        if (this.authService.getToken() !== null) {
            this.router.navigate(['/'])
        }
    }


    public loginWithGoogle() {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
            (data) => {
                console.log(data)
                this.token.token = data.idToken;
                this.loginService.loginWithGoogle(this.token).subscribe(
                    (authoricationResponse) => {
                        sessionStorage.setItem("token", authoricationResponse.jwt);
                        this.setLoginComplete(authoricationResponse)
                    },
                    (error) =>{
                        if (error.error.status === "Account locked") {
                            this.matSnackBar.open("T??i kho???n n??y c???a b???n ???? b??? kh??a", "OK", {
                                panelClass: ['mat-toolbar', 'mat-primary'],
                                duration: 5000
                            });
                        }
                    }
                );
            }
        );
    }

    public loginWithFacebook() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            (data) => {
                this.token.token = data.authToken;
                this.loginService.loginWithFacebook(this.token).subscribe(
                    (authoricationResponse) => {
                        sessionStorage.setItem("token", authoricationResponse.jwt)
                        this.setLoginComplete(authoricationResponse)
                    },
                    (error) =>{
                        if (error.error.status === "Account locked") {
                            this.matSnackBar.open("T??i kho???n n??y c???a b???n ???? b??? kh??a", "OK", {
                                panelClass: ['mat-toolbar', 'mat-primary'],
                                duration: 5000
                            });
                        }
                    }
                );
            }
        );
    }

    public setLoginComplete(authoricationResponse: AuthoricationResponse) {
        if (this.rememberMe % 2 === 1) {
            this.authService.setLocalStorage(authoricationResponse);
        }
        this.authService.setSessionStorage(authoricationResponse);
        const role = authoricationResponse.user.account.role;
        switch (role) {
            case "ROLE_USER":
                this.router.navigate(['/movie']);
                break;
            case "ROLE_EMPLOYEE":
                this.router.navigate(['/test-employee']);
                break;
            case "ROLE_ADMIN":
                this.router.navigate(['/statistic/movie']);
                break;
            default:
                this.router.navigate(['/forbidden'])
        }
    }

    public login() {
        if (this.formLogin.valid) {
            this.loginService.login(this.formLogin.value).subscribe(
                (authoricationResponse) => {
                    this.setLoginComplete(authoricationResponse)
                },
                (error) => {
                    this.isLoginValid = false;
                    switch (error.error.status) { // error.error.status = 404 or 400
                        case "Username not exists":
                            this.errorUsername = "T??i kho???n ho???c m???t kh???u sai";
                            this.errorPassword = "";
                            break;
                        case "Account locked":
                            this.errorUsername = "T??i kho???n c???a b???n ???? b??? kh??a";
                            this.errorPassword = "";
                            break;
                        // case "Wrong password":
                        //     this.errorPassword = "M???t kh???u sai";
                        //     this.errorUsername = "";
                        //     break;
                        default:
                            console.log(error)
                            this.matSnackBar.open("H??? th???ng ??ang b???o tr?? vui l??ng ????ng nh???p l???i", "OK", {
                                panelClass: ['mat-toolbar', 'mat-primary'],
                                duration: 5000
                            });
                    }
                }
            )
        } else {
            this.isLoginValid = true;
        }
    }

    forgotPassword() {
        this.matDialog.open(ForgotPasswordComponent);
    }

    rememberMeLogin() {
        this.rememberMe++;
    }

    checkValidUsernameAuto(value: string) {
        if (value === "") {
            this.errorUsername = "";
        }
    }

    checkValidPassword(value: string) {
        if (value === "") {
            this.errorPassword = "";
        }
    }
}
