import {
    Component
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams
} from 'ionic-angular';
import {
    HomePage
} from '../home/home';

import * as firebase from "firebase";
import {Deploy} from '@ionic/cloud-angular';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyC52UryDkafANBqnbabJ4tJM8JF-b3WDgg",
    authDomain: "nudge-e9af1.firebaseapp.com",
    databaseURL: "https://nudge-e9af1.firebaseio.com",
    projectId: "nudge-e9af1",
    storageBucket: "nudge-e9af1.appspot.com",
    messagingSenderId: "132555289594"
};

firebase.initializeApp(config);


/**
 * Generated class for the Authentication page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-authentication',
    templateUrl: 'authentication.html',
})
export class Authentication {

    constructor(public navCtrl: NavController, public navParams: NavParams, public deploy: Deploy) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad Authentication');
    }

    loginGoogle() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error: any) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
        this.navCtrl.push(HomePage); // Log in and go to home page
        location.reload();
    }

    loginFacebook() {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error: any) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
        this.navCtrl.push(HomePage); // Log in and go to home page
        location.reload();
    }

}
