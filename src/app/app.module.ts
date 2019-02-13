import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {NewQuoteComponent} from './new-quote/new-quote.component';
import {QuotesComponent} from './quotes/quotes.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {QuoteService} from './quote.service';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthService} from './auth.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteComponent,
        NewQuoteComponent,
        QuotesComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    providers: [QuoteService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
