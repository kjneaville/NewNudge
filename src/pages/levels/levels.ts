import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import * as UserData from '../../assets/data/progress.json';
import {Deploy} from '@ionic/cloud-angular';


@IonicPage()
@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html',
})
export class LevelsPage {

  subcat: any;
  uData: any;
  maxLevel: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deploy: Deploy) {
  	this.subcat = navParams.get("category");
  	this.uData = UserData;
  	console.log(this.subcat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Levels');
    //FOR ICONS AND COLORS
    var lm = 0; //LEVEL MODIFIER, IF DIFFERENT SUBCATEGORY NEED TO CHANGE BY FACTOR OF 16
    if (this.subcat == "Investing") {
    	lm = 16;
    }
    if (this.subcat == "Retirement") {
    	lm = 32;
    }
    if (this.subcat == "Taxes") {
    	lm = 48;
    }
    if (this.uData[lm + 0] && this.uData[lm + 1] && this.uData[lm + 2] && this.uData[lm + 3]) { //IF COMPLETE LEVEL 1
	    document.getElementById("levCirc1").className += "button circle subGreen";
	    document.getElementById("levIcon2").remove();
	    if (this.uData[lm + 4] && this.uData[lm + 5] && this.uData[lm + 6] && this.uData[lm + 7]) { //IF COMPLETE LEVEL 2
	    	document.getElementById("levCirc2").className += "button circle subGreen";
	    	document.getElementById("levIcon4").remove();
	    	document.getElementById("levIcon5").remove();
	    	if (this.uData[lm + 8] && this.uData[lm + 9] && this.uData[lm + 10] && this.uData[lm + 11]) { //IF COMPLETE LEVEL 3
	    		document.getElementById("levCirc3").className += "button circle subGreen";
	    		document.getElementById("levIcon7").remove();
	    		document.getElementById("levIcon8").remove();
	    		if (this.uData[lm + 12] && this.uData[lm + 13] && this.uData[lm + 14] && this.uData[lm + 15]) { //IF COMPLETE LEVEL 4
	    			document.getElementById("levCirc4").className += "button circle subGreen";
	    			document.getElementById("levIcon10").remove();
	    			document.getElementById("levIcon11").remove();
	    			this.maxLevel = 5;
	    		} else {
	    			document.getElementById("levCirc4").className += "button circle subYellow";
			    	document.getElementById("levIcon9").remove();
			    	document.getElementById("levIcon11").remove();
	    			this.maxLevel = 4;
	    		}
	    	} else {
	    		document.getElementById("levCirc3").className += "button circle subYellow";
		    	document.getElementById("levIcon6").remove();
		    	document.getElementById("levIcon8").remove();
		    	document.getElementById("levCirc4").className += "button circle subGrey";
			    document.getElementById("levIcon9").remove();
			    document.getElementById("levIcon10").remove();
	    		this.maxLevel = 3;
	    	}
	    } else {
	    	document.getElementById("levCirc2").className += "button circle subYellow";
	    	document.getElementById("levIcon3").remove();
	    	document.getElementById("levIcon5").remove();
	    	document.getElementById("levCirc3").className += "button circle subGrey";
		    document.getElementById("levIcon6").remove();
		    document.getElementById("levIcon7").remove();
		    document.getElementById("levCirc4").className += "button circle subGrey";
		    document.getElementById("levIcon9").remove();
		    document.getElementById("levIcon10").remove();
	    	this.maxLevel = 2;
	    }
	} else {
		document.getElementById("levCirc1").className += "button circle subYellow";
	    document.getElementById("levIcon1").remove();
	    document.getElementById("levCirc2").className += "button circle subGrey";
	    document.getElementById("levIcon3").remove();
	    document.getElementById("levIcon4").remove();
	    document.getElementById("levCirc3").className += "button circle subGrey";
	    document.getElementById("levIcon6").remove();
	    document.getElementById("levIcon7").remove();
	    document.getElementById("levCirc4").className += "button circle subGrey";
	    document.getElementById("levIcon9").remove();
	    document.getElementById("levIcon10").remove();
		this.maxLevel = 1;
	}
	//FOR VALUES
	var a1 = 0;
	var b1 = 0;
	var c1 = 0;
	var d1 = 0;
	for (var a = (0 + lm); a < (4 + lm); a++) {
		if (this.uData[a]) { a1++; }
	}
	for (var b = (4 + lm); b < (8 + lm); b++) {
		if (this.uData[b]) { b1++; }
	}
	for (var c = (8 + lm); c < (12 + lm); c++) {
		if (this.uData[c]) { c1++; }
	}
	for (var d = (12 + lm); d < (16 + lm); d++) {
		if (this.uData[d]) { d1++; }
	}
	document.getElementById("ratioLev1").innerHTML = a1.toString() + "/4 Tasks";
	document.getElementById("ratioLev2").innerHTML = b1.toString() + "/4 Tasks";
	document.getElementById("ratioLev3").innerHTML = c1.toString() + "/4 Tasks";
	document.getElementById("ratioLev4").innerHTML = d1.toString() + "/4 Tasks";
  }

  enterLevel(val) {
  		if (val <= this.maxLevel) {
  			this.navCtrl.push(ListPage, {level:val, subcat: this.subcat}); // Upon clicking on a category, navigate to the page for that category
  		}
   }

}
