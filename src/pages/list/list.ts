import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NudgePage } from '../nudge/nudge';
import * as BudgetData from '../../assets/data/budget.json';
import * as InvestData from '../../assets/data/invest.json';
import * as RetireData from '../../assets/data/retire.json';
import * as TaxData from '../../assets/data/tax.json';
import {Deploy} from '@ionic/cloud-angular';


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

  subcat: any;
  level: any;
  bData: any;
  iData: any;
  rData: any;
  tData: any;
  uData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deploy: Deploy) {
  	this.subcat = navParams.get("subcat");
  	this.level = navParams.get("level");
  	this.bData = BudgetData;
  	this.iData = InvestData;
  	this.rData = RetireData;
  	this.tData = TaxData;
  	this.uData = navParams.get("udat");
  }

  ionViewDidLoad() {
  	var aData = this.bData;
  	var lev = this.level.toString();
  	var cardTemp1;
  	var cardTemp2;
  	var lm = 0; //LEVEL MODIFIER, IF DIFFERENT SUBCATEGORY NEED TO CHANGE BY FACTOR OF 16
    if (this.subcat == "Investing") {
    	lm = 16;
    	aData = this.iData;
    }
    if (this.subcat == "Retirement") {
    	lm = 32;
    	aData = this.rData;
    }
    if (this.subcat == "Taxes") {
    	lm = 48;
    	aData = this.tData;
    }
    if (lev == "2") {
    	lm += 4;
    }
  	if (lev == "3") {
    	lm += 8;
    }
    if (lev == "4") {
    	lm += 12;
    }
 	var percCount = 0;
  	for (var i = 0; i < 10; i++) {
  		if (aData[lev][i]) {
  			cardTemp1 = "cardHeader" + (i + 1);
  			cardTemp2 = "cardBody" + (i + 1);
  		 	document.getElementById(cardTemp1).innerHTML = aData[lev][i].title;
  		 	document.getElementById(cardTemp2).innerHTML = aData[lev][i].question; //BODY OF NUDGE GOES HERE
  		 	if (!this.uData[lm + i]) {
  		 	 	document.getElementById("cardCheck" + (i + 1)).remove();
 				percCount++;
  		 	}
  		} else {
  			cardTemp1 = "wholeCard" +  (i + 1);
  			document.getElementById(cardTemp1).remove();
  		}
  	}
  	var percComp = ((4 - percCount) / 4) * 100;
  	document.getElementById("levelProg").innerHTML = ("You have completed " + (4 - percCount) + "/4 of the tasks for Level " + this.level);
  	if (percComp == 0) {
  		document.getElementById("listProgressBar").className += "w3-container w3-round";		
  	} else {
  		document.getElementById("listProgressBar").style.width = (percComp + "%");
  		document.getElementById("listProgressBar").innerHTML = (percComp + "%");
  	}
  }



  enterNudge(val) {
  		this.navCtrl.push(NudgePage, {subcat: this.subcat, level: this.level, nudge:val, udat: this.uData}); // Upon clicking on a category, navigate to the page for that category
  		this.navCtrl.remove(this.navCtrl.length() - 1);
   }

}

