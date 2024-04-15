import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { TreeGridAAAComponent } from './tree-grid-aaa/tree-grid-aaa.component';
import { TreeGridBBBComponent } from './tree-grid-bbb/tree-grid-bbb.component';
import { TreeGridCCCComponent } from './tree-grid-ccc/tree-grid-ccc.component';
import { TreeGridDDDComponent } from './tree-grid-ddd/tree-grid-ddd.component';
import { TreeGridEEEComponent } from './tree-grid-eee/tree-grid-eee.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuBarComponent,
    LoginComponent,
    RegisterComponent,
    TabBarComponent,
    TreeGridAAAComponent,
    TreeGridBBBComponent,
    TreeGridCCCComponent,
    TreeGridDDDComponent,
    TreeGridEEEComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: true,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
            
    //         provider: new GoogleLoginProvider('574452326163-9k8tlvck1qda0b3b870ip7jdaeskdqdi.apps.googleusercontent.com',
    //         {
    //          // scopes : environment.auth.scopes,
    //           // prompt : 'none'   // '' | 'none' | 'consent' |  'select_account'
    //         }),

    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('912820520854189')
    //       }
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // },

    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '574452326163-9k8tlvck1qda0b3b870ip7jdaeskdqdi.apps.googleusercontent.com'
    //         )
    //       }
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // }

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '574452326163-s4cms9snkc47gp2k6ul9or5oi0311bv9.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('912820520854189')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
