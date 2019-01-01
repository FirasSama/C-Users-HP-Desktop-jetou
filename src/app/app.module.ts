import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from '../pages/register/register';
import {SensorsPage} from '../pages/sensors/sensors';
import {AnalysisPage} from '../pages/analysis/analysis';
import {MapPage} from '../pages/map/map';
import {LoginPage} from '../pages/login/login'; 
import {SignUpPage} from '../pages/sign-up/sign-up';
import {AuthProvider} from '../Providers/AuthentificationProvider/AuthentificationProvider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    SensorsPage,
    AnalysisPage,
    MapPage,
    SignUpPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SensorsPage,
    AnalysisPage,
    MapPage,
    SignUpPage,
    LoginPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
