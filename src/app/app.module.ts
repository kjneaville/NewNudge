import {
    BrowserModule
} from '@angular/platform-browser';
import {
    ErrorHandler,
    NgModule
} from '@angular/core';
import {
    IonicApp,
    IonicErrorHandler,
    IonicModule
} from 'ionic-angular';
import {
    SplashScreen
} from '@ionic-native/splash-screen';
import {
    StatusBar
} from '@ionic-native/status-bar';

import {
    MyApp
} from './app.component';
import {
    HomePage
} from '../pages/home/home';
import {
    LevelsPage
} from '../pages/levels/levels';
import {
    ListPage
} from '../pages/list/list';
import {
    NudgePage
} from '../pages/nudge/nudge';
import {
    Authentication
} from '../pages/authentication/authentication';
import {
    Catmodal
} from '../pages/catmodal/catmodal';

@NgModule({
    declarations: [
    MyApp,
    HomePage,
    LevelsPage,
    ListPage,
    NudgePage,
    Authentication,
    Catmodal
  ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
    bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    HomePage,
    LevelsPage,
    ListPage,
    NudgePage,
    Authentication,
    Catmodal
  ],
    providers: [
    StatusBar,
    SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
  ]
})
export class AppModule {}
