import {
    NgModule
} from '@angular/core';
import {
    IonicPageModule
} from 'ionic-angular';
import {
    Authorization
} from './authorization';
import firebase from 'https://www.gstatic.com/firebasejs/3.9.0/firebase.js';


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
@NgModule({
    declarations: [
    Authorization,
  ],
    imports: [
    IonicPageModule.forChild(Authorization),
  ],
    exports: [
    Authorization
  ]
})
export class AuthorizationModule {
    loginGoogle() {
        console.log('here')
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    loginFacebook() {
        console.log('here')

        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        })
    }
}
