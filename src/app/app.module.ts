import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { TrainingRegistrationComponent } from './training-registration/training-registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationCompletedComponent } from './registration-completed/registration-completed.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorJwtAuthService } from './service/http/http-interceptor-jwt-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    TrainingRegistrationComponent,
    SignUpComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    RegistrationCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
    {
      provide: HTTP_INTERCEPTORS, 
      //useClass: HttpInterceptorBasicAuthService, 
      useClass: HttpInterceptorJwtAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


