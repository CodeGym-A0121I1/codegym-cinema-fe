import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig} from "angularx-social-login";
import {SocialLoginModule} from 'angularx-social-login';
import {AuthGuard} from "../../guard/auth.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../guard/auth.interceptor";
import {LoginService} from "../../service/login.service";
import {LoginRoutingModule} from "../../routing/login-routing.module";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {EmployeeComponent} from "./employee/employee.component";
import {AdminEmployeeComponent} from "./admin-employee/admin-employee.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        LoginComponent,
        AdminComponent,
        UserComponent,
        EmployeeComponent,
        AdminEmployeeComponent,
        ForgotPasswordComponent,
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SocialLoginModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '1081742702049-mvi68nuauktdq43q10420bgj4b97df5o.apps.googleusercontent.com'
                        )
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider('1819058964959430')
                    }
                ]
            } as SocialAuthServiceConfig,
        },
        AuthGuard, {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        LoginService
    ]
})
export class LoginModule {
}
