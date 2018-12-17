import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import{PopupimgPage} from '../pages/popupimg/popupimg';
import {SuccessPage} from '../pages/success/success';
import {LoginPage} from '../pages/login/login';
import { HosptallistPage } from '../pages/hosptallist/hosptallist';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { RmPdoctorPage } from '../pages/rm-pdoctor/rm-pdoctor';
import { RegistrationPage } from '../pages/registration/registration'
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails'
import { SuperTabsModule } from 'ionic2-super-tabs';
import {BillPage} from '../pages/bill/bill';
import { PrescriptionPage} from '../pages/prescription/prescription'
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopupimgPage,
    SuccessPage,
    LoginPage,
    HosptallistPage,
    OrderlistPage,
    RmPdoctorPage,
    RegistrationPage,
    OrderdetailsPage,
    BillPage,
    PrescriptionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopupimgPage,
    SuccessPage,
    LoginPage,
    HosptallistPage,
    OrderlistPage,
    RmPdoctorPage,
    RegistrationPage,
    OrderdetailsPage,
    BillPage,
    PrescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
