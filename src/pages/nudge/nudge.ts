import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as BudgetData from '../../assets/data/budget.json';
import * as UserData from '../../assets/data/progress.json';

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
  level: any;
  subcat: any;
  bData: any;
  uData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.nudge = navParams.get("nudge");
  	this.level = navParams.get("level");
  	this.subcat = navParams.get("subcat");
  	this.bData = BudgetData;
  	this.uData = UserData;
  	console.log(this.nudge);
  	console.log(this.level);
  	console.log(this.subcat);
  	console.log(this.uData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nudge');
    document.getElementsByClassName("nudgeDescript")[0].innerHTML = this.bData[this.level][(this.nudge - 1)].description;
    document.getElementsByClassName("nudgeDescript")[1].innerHTML = this.bData[this.level][(this.nudge - 1)].description;
  }

  complete() {
  	var subNum = 0;
  	if (this.subcat == "Savings") {
  		subNum = 16;
  	}
  	if (this.subcat == "Retirment") {
  		subNum = 32;
  	}
  	if (this.subcat == "Credit") {
  		subNum = 48;
  	}
    this.uData[subNum + (this.nudge  - 1) + ((this.level - 1) * 4)] = true;
    console.log(this.uData);
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
