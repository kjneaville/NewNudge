import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import {Deploy} from '@ionic/cloud-angular';

/**
 * Generated class for the Catmodal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-catmodal',
  templateUrl: 'catmodal.html',
})
export class Catmodal {


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController/*, public deploy: Deploy*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Catmodal');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
