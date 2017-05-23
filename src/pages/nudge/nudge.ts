import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as BudgetData from '../../assets/data/budget.json';
import * as InvestData from '../../assets/data/invest.json';
import * as RetireData from '../../assets/data/retire.json';
import * as TaxData from '../../assets/data/tax.json';
import { LevelsPage } from '../levels/levels';
import {Deploy} from '@ionic/cloud-angular';

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
  aData: any;
  bData: any;
  iData: any;
  rData: any;
  tData: any;
  uData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public deploy: Deploy) {
  	this.nudge = navParams.get("nudge");
  	this.level = navParams.get("level");
  	this.subcat = navParams.get("subcat");
  	this.bData = BudgetData;
  	this.iData = InvestData;
  	this.rData = RetireData;
  	this.tData = TaxData;
  	this.uData = navParams.get("udat");
  	console.log(this.level);
  	console.log(this.subcat);
  	var lm = 0; //LEVEL MODIFIER, IF DIFFERENT SUBCATEGORY NEED TO CHANGE BY FACTOR OF 16
  	if (this.subcat == "Investing") {
    	lm = 16;
    	this.aData = this.iData;
    }
    else if (this.subcat == "Retirement") {
    	lm = 32;
    	this.aData = this.rData;
    }
    else if (this.subcat == "Taxes") {
    	lm = 48;
    	this.aData = this.tData;
    } else {
    	this.aData = this.bData;
    }
  }

  ionViewDidLoad() {

  	
    document.getElementsByClassName("nudgeDescript")[0].innerHTML = this.aData[this.level][(this.nudge - 1)].question;
    document.getElementsByClassName("nudgeDescript")[1].innerHTML = this.aData[this.level][(this.nudge - 1)].question;
    document.getElementById("nudDesc1").innerHTML = this.aData[this.level][(this.nudge - 1)].description1;
    document.getElementById("nudDesc2").innerHTML = this.aData[this.level][(this.nudge - 1)].description2;
    document.getElementById("nudIcon1").setAttribute('src', this.aData[this.level][(this.nudge - 1)].icon1);
    document.getElementById("nudIcon2").setAttribute('src', this.aData[this.level][(this.nudge - 1)].icon2);
    if (this.aData[this.level][(this.nudge - 1)].step1) {
    	document.getElementById("nudStep1").innerHTML = this.aData[this.level][(this.nudge - 1)].step1;
    } else {
    	document.getElementById("nudStep1").remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].step2) {
    	document.getElementById("nudStep2").innerHTML = this.aData[this.level][(this.nudge - 1)].step2;
    } else {
    	document.getElementById("nudStep2").remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].step3) {
    	document.getElementById("nudStep3").innerHTML = this.aData[this.level][(this.nudge - 1)].step3;
    } else {
    	document.getElementById("nudStep3").remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].step4) {
    	document.getElementById("nudStep4").innerHTML = this.aData[this.level][(this.nudge - 1)].step4;
    } else {
    	document.getElementById("nudStep4").remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].resource1) {
    	document.getElementById("nudRes1").innerHTML = this.aData[this.level][(this.nudge - 1)].resource1;
    	var l1 = this.aData[this.level][(this.nudge - 1)].link1;
	   	var link = document.getElementById("resLink1");
	   	link.setAttribute("href", l1);
	   	
    } else {
    	document.getElementById("nudRes1").parentElement.remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].resource2) {
    	document.getElementById("nudRes2").innerHTML = this.aData[this.level][(this.nudge - 1)].resource2;
    	var l2 = this.aData[this.level][(this.nudge - 1)].link2;
	   	var link = document.getElementById("resLink2");
	   	link.setAttribute("href", l2);
    } else {
    	document.getElementById("nudRes2").parentElement.remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].resource3) {
    	document.getElementById("nudRes3").innerHTML = this.aData[this.level][(this.nudge - 1)].resource3;
    	var l3 = this.aData[this.level][(this.nudge - 1)].link3;
	   	var link = document.getElementById("resLink3");
	   	link.setAttribute("href", l3);
    } else {
    	document.getElementById("nudRes3").parentElement.remove();
    }
    if (this.aData[this.level][(this.nudge - 1)].sponsor) {
    	document.getElementById("nudSpon1").innerHTML = this.aData[this.level][(this.nudge - 1)].sponsor;
    	var s1 = this.aData[this.level][(this.nudge - 1)].sponLink;
	   	var link = document.getElementById("sponLink1"); 
	   	link.setAttribute("href", s1);
	   	
    } else {
    	document.getElementById("nudSpon1").parentElement.remove();
    }
  }

  complete() {
  	var subNum = 0;
  	if (this.subcat == "Investing") {
  		subNum = 16;
  	}
  	if (this.subcat == "Retirement") {
  		subNum = 32;
  	}
  	if (this.subcat == "Taxes") {
  		subNum = 48;
  	}
    this.uData[subNum + (this.nudge  - 1) + ((this.level - 1) * 4)] = true;
    //SAVE this.uData TO FIREBASE, overwriting old array
    //REPULL array DOWN INTO progress.json
    this.navCtrl.push(LevelsPage, {category: this.subcat, udat: this.uData});
    this.navCtrl.remove(this.navCtrl.length() - 1);
  }

  dismiss() {
    this.navCtrl.pop();
  }

}