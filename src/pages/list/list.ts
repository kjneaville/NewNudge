import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NudgePage } from '../nudge/nudge';
import * as BudgetData from '../../assets/data/budget.json';
import * as UserData from '../../assets/data/progress.json';


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
  uData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.level = navParams.get("level");
  	this.bData = BudgetData;
  	this.uData = UserData;
  	this.subcat = navParams.get("subcat");
  }

  ionViewDidLoad() {
  	var lev = this.level.toString();
  	var cardTemp1;
  	var cardTemp2;
  	console.log(this.bData[lev][0].description);

  	var lm = 0; //LEVEL MODIFIER, IF DIFFERENT SUBCATEGORY NEED TO CHANGE BY FACTOR OF 16
    if (this.subcat == "Savings") {
    	lm = 16;
    }
    if (this.subcat == "Retirement") {
    	lm = 32;
    }
    if (this.subcat == "Credit") {
    	lm = 48;
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
  		if (this.bData[lev][i]) {
  			cardTemp1 = "cardHeader" + (i + 1);
  			cardTemp2 = "cardBody" + (i + 1);
  		 	document.getElementById(cardTemp1).innerHTML = this.bData[lev][i].description;
  		 	//document.getElementById(cardTemp2).innerHTML = this.bData[lev][i].body; //BODY OF NUDGE GOES HERE
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
  		this.navCtrl.push(NudgePage, {subcat: this.subcat, level: this.level, nudge:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
