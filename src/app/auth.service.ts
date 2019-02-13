import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import 'rxjs/add/operator/do';
import {tokenKey} from '@angular/core/src/view';

const httpOptions = {
    headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})
};

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    signup(username: string, email: string, password: string) {
        return this.http.post('http://angular.local/api/user',
            {name: username, email: email, password: password}, httpOptions);
    }

    signin(email: string, password: string) {
        return this.http.post('http://angular.local/api/user/signin',
            {email: email, password: password}, httpOptions)
            .pipe(map((response: Response) => {
                    // const token = localStorage.setItem('token', JSON.stringify(response));
                    const tokenValue = JSON.parse(localStorage.getItem('token')).token;
                    const base64Url = tokenValue.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: tokenValue, decoded: JSON.parse(window.atob(base64))};
                }
                )
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
