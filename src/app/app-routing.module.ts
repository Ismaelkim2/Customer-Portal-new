import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
 
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SmsComponent } from './sms/sms.component';
import { QuoteComponent } from './quote/quote.component';
import { NewClaimComponent } from './claims/new-claim/new-claim.component';
import { ClaimHistoryComponent } from './claims/claim-history/claim-history.component';
import { RegistrationsComponent } from './registrations/registrations.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'home', component:HomeComponent},
  {path: 'claims',component:ClaimsComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'sms',component:SmsComponent},
  {path:'quote',component:QuoteComponent},
  {path:'new-claim',component:NewClaimComponent},
  {path:'claim-history',component:ClaimHistoryComponent},
  {path:'registrations',component:RegistrationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
