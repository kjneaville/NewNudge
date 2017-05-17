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
  }

  ionViewDidLoad() {
  	/*
    document.getElementsByClassName("nudgeDescript")[0].innerHTML = this.bData[this.level][(this.nudge - 1)].question;
    document.getElementsByClassName("nudgeDescript")[1].innerHTML = this.bData[this.level][(this.nudge - 1)].question;
    document.getElementById("nudgeDesc1").innerHTML = this.bData[this.level][(this.nudge - 1)].description1;
    document.getElementById("nudgeDesc2").innerHTML = this.bData[this.level][(this.nudge - 1)].description2;
    document.getElementById("nudIcon1").src = this.bData[this.level][(this.nudge - 1)].src1;
    document.getElementById("nudIcon2").src = this.bData[this.level][(this.nudge - 1)].src2;
    if (this.bData[this.level][(this.nudge - 1)].step1) {
    	document.getElementById("nudStep1").innerHTML = this.bData[this.level][(this.nudge - 1)].step1;
    } else {
    	document.getElementById("nudStep1").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].step2) {
    	document.getElementById("nudStep2").innerHTML = this.bData[this.level][(this.nudge - 1)].step2;
    } else {
    	document.getElementById("nudStep2").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].step3) {
    	document.getElementById("nudStep3").innerHTML = this.bData[this.level][(this.nudge - 1)].step3;
    } else {
    	document.getElementById("nudStep3").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].step4) {
    	document.getElementById("nudStep4").innerHTML = this.bData[this.level][(this.nudge - 1)].step4;
    } else {
    	document.getElementById("nudStep4").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].res1) {
    	document.getElementById("nudRes1").innerHTML = this.bData[this.level][(this.nudge - 1)].res1;
    } else {
    	document.getElementById("nudRes1").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].res2) {
    	document.getElementById("nudRes2").innerHTML = this.bData[this.level][(this.nudge - 1)].res2;
    } else {
    	document.getElementById("nudRes2").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].res3) {
    	document.getElementById("nudRes3").innerHTML = this.bData[this.level][(this.nudge - 1)].res3;
    } else {
    	document.getElementById("nudRes3").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].rLink1) {
    	document.getElementById("resLink1").href = this.bData[this.level][(this.nudge - 1)].rLink1;
    }
    if (this.bData[this.level][(this.nudge - 1)].rLink2) {
    	document.getElementById("resLink2").href = this.bData[this.level][(this.nudge - 1)].rLink2;
    }
    if (this.bData[this.level][(this.nudge - 1)].rLink3) {
    	document.getElementById("resLink3").href = this.bData[this.level][(this.nudge - 1)].rLink3;
    }
    if (this.bData[this.level][(this.nudge - 1)].sponName) {
    	document.getElementById("nudSpon1").innerHTML = this.bData[this.level][(this.nudge - 1)].sponName;
    } else {
    	document.getElementById("nudSpon1").remove();
    }
    if (this.bData[this.level][(this.nudge - 1)].sponLink) {
    	document.getElementById("sponLink1").href = this.bData[this.level][(this.nudge - 1)]sponLink;
    }*/
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
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
