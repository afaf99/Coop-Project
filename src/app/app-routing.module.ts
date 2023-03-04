import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationCompletedComponent } from './registration-completed/registration-completed.component';
import { RouteGuardService } from './service/route-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrainingRegistrationComponent } from './training-registration/training-registration.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"Home", component: HomeComponent},
  {path:"Login", component: LoginComponent},
  {path:"SignUp", component: SignUpComponent},
  {path:"TrainingRegistration", component: TrainingRegistrationComponent},
  {path:"Logout", component: LogoutComponent , canActivate:[RouteGuardService]},
  {path:"RegistrationCompleted", component: RegistrationCompletedComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// , canActivate:[RouteGuardService]
// , canActivate:[RouteGuardService]