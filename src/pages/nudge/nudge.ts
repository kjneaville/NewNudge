import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Nudge page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nudge',
  templateUrl: 'nudge.html',
})
export class NudgePage {

  nudge: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.nudge = navParams.get("nudge");
  	console.log(this.nudge);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nudge');
  }

}
