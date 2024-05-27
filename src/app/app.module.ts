import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { HomeComponent } from './home/home.component';


import { OtpComponent } from './otp/otp.component';
import { FormsModule } from '@angular/forms';
import { ClaimsComponent } from './claims/claims.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SmsComponent } from './sms/sms.component';
import { QuoteComponent } from './quote/quote.component';
import { NewClaimComponent } from './claims/new-claim/new-claim.component';
import { ClaimHistoryComponent } from './claims/claim-history/claim-history.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { HttpClientModule } from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImageCarouselComponent,
  
    HomeComponent,
  
    OtpComponent,
    ClaimsComponent,
    FooterComponent,
    TransactionsComponent,
    SmsComponent,
    QuoteComponent,
    NewClaimComponent,
    ClaimHistoryComponent,
    RegistrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
