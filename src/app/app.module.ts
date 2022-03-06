import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListMovieComponent} from './component/display/list-movie/list-movie.component';
import {NavbarComponent} from './component/display/navbar/navbar.component';
import {FooterComponent} from './component/display/footer/footer.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {RouterModule} from "@angular/router";
import {LoginModule} from "./component/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {BookingModule} from "./component/booking/booking.module";
import {MovieModule} from "./component/movie/movie.module";
import {ShowTimeModule} from "./component/show-time/show-time.module";
import {TicketModule} from "./component/ticket/ticket.module";
import {UserModule} from "./component/user/user.module";
import {ForbiddenComponent} from "./component/display/forbidden/forbidden.component";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        ListMovieComponent,
        NavbarComponent,
        FooterComponent,
        ForbiddenComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        LoginModule,
        BookingModule,
        MovieModule,
        ShowTimeModule,
        TicketModule,
        UserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
