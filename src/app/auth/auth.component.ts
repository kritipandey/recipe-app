import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthRespData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error:string = null;  

    constructor(private authService: AuthService, private router: Router){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm){
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthRespData>;

        this.isLoading = true;

        if(this.isLoginMode){
            authObs = this.authService.onLogin(email, password);
            this.error = null;
        } 
        else{
            authObs = this.authService.onSignUp(email, password);
            this.error = null;
        }
        
        authObs.subscribe(responseData => {
            console.log(responseData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
        form.reset();
    }

    // closeAlert(){
    //     this.error = null;
    // }
}