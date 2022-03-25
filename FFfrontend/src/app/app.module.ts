import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { DraftpoolComponent } from './draftpool/draftpool.component';
import { UserteamComponent } from './userteam/userteam.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontpageComponent,
    DraftpoolComponent,
    UserteamComponent,
    NavbarComponent,
    RegistrationComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
