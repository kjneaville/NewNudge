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

import { Aboutmodal } from '../pages/aboutmodal/aboutmodal';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '183e1047'
  }
};

@NgModule({
    declarations: [
    MyApp,
    HomePage,
    LevelsPage,
    ListPage,
    NudgePage,
    Authentication,
    Catmodal,
    Aboutmodal
  ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
    bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    HomePage,
    LevelsPage,
    ListPage,
    NudgePage,
    Authentication,
    Catmodal,
    Aboutmodal
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
