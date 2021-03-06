import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Deploy} from '@ionic/cloud-angular';

/**
 * Generated class for the AccountSettings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettings {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deploy: Deploy) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettings');
  }

}
