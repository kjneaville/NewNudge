import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NudgePage } from '../nudge/nudge';
import * as BudgetData from '../../assets/data/budget.json';


/**
 * Generated class for the List page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  level: any;
  bData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.level = navParams.get("level");
  	this.bData = BudgetData;
  	console.log(this.bData);
  	console.log(this.level);
  	for (var i = 0; i < 10; i++) {
  		///if (this.bdata[this.level]) {}
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
  }

  enterNudge(val) {
  		this.navCtrl.push(NudgePage, {nudge:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
