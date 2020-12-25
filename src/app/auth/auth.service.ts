import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { UserModel } from "./user.model";
import { environment } from '../../environments/environment';

export interface AuthRespData {
    idToken: string;
    email: string;	
    refreshToken: string;	
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<UserModel>(null);

    constructor(private http : HttpClient, private router: Router){}

    onSignUp(email: string, password: string){
        return this.http.post<AuthRespData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError), tap(resData => {
            this.handleUserAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    onLogin(email: string, password: string){
        return this.http.post<AuthRespData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError), tap(resData => {
            this.handleUserAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
    }

    onRetrevingUserData(){
        const userData:{email: string; id: string; _token: string; _tokenExpirationDate: string;} = JSON.parse(localStorage.getItem('userData'));    
        if(!userData){
            return;
        }
        const loadedUser = new UserModel(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token){
            this.user.next(loadedUser);
        }
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }
        else{
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS': 
                errorMessage = 'This email already exist!';
                break;
                case 'EMAIL_NOT_FOUND': 
                errorMessage = 'This email does not exist!';
                break;
                case 'INVALID_PASSWORD': 
                errorMessage = 'Password is incorrect';
                break;
            }
            return throwError(errorMessage);
        }
    }

    private handleUserAuthentication(email: string, userId: string, token: string, expiresIn: number){
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new UserModel(email, userId, token, expirationDate);
        this.user.next(user);

        //to keep the user data:
        localStorage.setItem('userData', JSON.stringify(user));
    }
}