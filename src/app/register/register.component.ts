import { Component } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BackendService } from '../services/backend.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:SocialUser | undefined;
  loggedIn: boolean | undefined;
  isLoggedin?: boolean = undefined;

  public form={
    email:null,
    password:null
  }

  constructor(private backend: BackendService, private token: TokenService, private router: Router, private Auth: AuthService, private ssoauthService:SocialAuthService) {
    // console.log(this.isLoggedin);
   }

  public error = [];

  ngOnInit(): void {
    this.ssoauthService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user != null);
      this.isLoggedin = user != null;
      // console.log("Login User = " + this.user.name + this.user.email);
    });
  }

  signInWithFB(): void { //Facebook Login
   // console.log("FBLOGIN");
    this.ssoauthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // signWithGoogle():void{console.log("googlesignin"); //for google sign in
  //   this.ssoauthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   console.log("googlesignin1");
  // }

  signWithGoogle():void{console.log("googlesignin"); //for google sign in
    this.ssoauthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // console.log(GoogleLoginProvider.PROVIDER_ID,"googlesignin1");
  }

  signOut():any{ //for google out
    this.ssoauthService.signOut();
  }

  refreshToken(): void {
    this.ssoauthService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  submitLogin(){
    console.log(this.form);
    return this.backend.login(this.form).subscribe(
     // data=>console.log(data),
     data=>this.handleResponse(data),
      error=>this.handleError(error)
    );

  }

  handleResponse(data:any){
    console.log(data);
    //console.log(data.access_token);
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
   // this.router.navigateByUrl("/profile");
  }

  handleError(error:any){
    this.error = error.error.error;
  }
}