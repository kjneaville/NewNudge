import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as BudgetData from '../../assets/data/budget.json';

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

  level: any;
  nudge: any;
  bData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.nudge = navParams.get("nudge");
  	this.level = navParams.get("level");
  	this.bData = BudgetData;
  	console.log(this.nudge);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nudge');
    document.getElementsByClassName("nudgeDescript")[0].innerHTML = this.bData[this.level][(this.nudge - 1)].description;
    document.getElementsByClassName("nudgeDescript")[1].innerHTML = this.bData[this.level][(this.nudge - 1)].description;
  }

}
