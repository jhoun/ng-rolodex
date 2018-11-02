import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { ViewAllContactsComponent } from './pages/view-all-contacts/view-all-contacts.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { LogoutComponent } from './pages/logout/logout.component';

// Services
import { BackendService } from './services/backend.service'
// import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateContactComponent,
    ViewAllContactsComponent,
    ProfileViewComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'create', component: CreateContactComponent },
      { path: 'all', component: ViewAllContactsComponent },
      { path: 'profile', component: ProfileViewComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
