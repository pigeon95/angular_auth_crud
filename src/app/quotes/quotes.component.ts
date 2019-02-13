import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../quote.service';
import {Quote} from '../quote.interface';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    public quotes;

    constructor(private quoteService: QuoteService) {}

    ngOnInit() {}

    onGetQuotes() {
        this.quoteService.getQuotes()
            .subscribe(
                data => {
                    this.quotes = data.quotes;
                },
                err => console.error(err),
                () => console.log(this.quotes)
            );
    }

    onDeleted(quote: Quote) {
        const position = this.quotes.findIndex(
            (quoteEl: Quote) => {
                return quoteEl.id === quote.id;
            }
        );
        this.quotes.splice(position, 1);
    }
}
