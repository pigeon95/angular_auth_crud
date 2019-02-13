import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';

import {QuotesComponent} from './quotes/quotes.component';
import {NewQuoteComponent} from './new-quote/new-quote.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';

const APP_ROUTES: Routes = [
    {path: '', component: QuotesComponent},
    {path: 'new-quote', component: NewQuoteComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);