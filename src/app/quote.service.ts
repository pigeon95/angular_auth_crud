import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuoteService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    addQuote(content: string) {
        const token = this.authService.getToken();
        const body = JSON.stringify({content: content});
        return this.http.post('http://angular.local/api/quote?token=' + token, body, httpOptions);
    }

    getQuotes(): Observable<any> {
        return this.http.get('http://angular.local/api/quotes');
    }

    updateQuote(id: number, newContent: string): Observable<any> {
        const token = this.authService.getToken();
        const body = JSON.stringify({content: newContent});
        return this.http.put('http://angular.local/api/quote/' + id + '?token=' + token, body, httpOptions);
    }

    deleteQuote(id: number): Observable<any> {
        const token = this.authService.getToken();
        return this.http.delete('http://angular.local/api/quote/' + id + '?token=' + token);
    }
}
