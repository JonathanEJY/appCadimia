import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccontPage } from '../pages/create-accont/create-accont';
import {LoginPage} from '../pages/login/login';
import { UsersProvider } from '../providers/users/users';
import { HttpModule } from "@angular/http";
import { RelatorioPage } from '../pages/relatorio/relatorio';
import {ExercicioPage} from '../pages/exercicio/exercicio'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateAccontPage,
    LoginPage,
    RelatorioPage,
    ExercicioPage
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
    CreateAccontPage,
    LoginPage,
    RelatorioPage,
    ExercicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
