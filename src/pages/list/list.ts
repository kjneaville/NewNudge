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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
  	var lev = this.level.toString();;
  	console.log(this.bData[lev][0].description);
  	console.log(this.level);
  	var cardTemp;
  	for (var i = 0; i < 10; i++) {
  		if (this.bData[lev][i]) {
  			cardTemp = "cardHeader" + (i + 1);
  		 	document.getElementById(cardTemp).innerHTML = this.bData[lev][i].description;
  		} else {
  			cardTemp = "wholeCard" +  (i + 1);
  			document.getElementById(cardTemp).remove();
  		}
  	}
  }

  enterNudge(val) {
  		this.navCtrl.push(NudgePage, {level: this.level, nudge:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
