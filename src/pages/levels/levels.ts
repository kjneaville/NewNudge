import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-levels',
  templateUrl: 'levels.html',
})
export class LevelsPage {

  subcat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.subcat = navParams.get("category");
  	console.log(this.subcat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Levels');
    if (1 == 1) { //IF COMPLETE LEVEL 1
	    document.getElementById("levCirc1").className += "button circle subGreen";
	    document.getElementById("levIcon2").remove();
	    if (2 == 2) { //IF COMPLETE LEVEL 2
	    	document.getElementById("levCirc2").className += "button circle subGreen";
	    	document.getElementById("levIcon4").remove();
	    	document.getElementById("levIcon5").remove();
	    	if (3 != 3) { //IF COMPLETE LEVEL 3
	    		document.getElementById("levCirc3").className += "button circle subGreen";
	    		document.getElementById("levIcon7").remove();
	    		document.getElementById("levIcon8").remove();
	    		if (4 != 4) { //IF COMPLETE LEVEL 4
	    			document.getElementById("levCirc4").className += "button circle subGreen";
	    			document.getElementById("levIcon10").remove();
	    			document.getElementById("levIcon11").remove();
	    		} else {
	    			document.getElementById("levCirc4").className += "button circle subYellow";
			    	document.getElementById("levIcon9").remove();
			    	document.getElementById("levIcon11").remove();
	    		}
	    	} else {
	    		document.getElementById("levCirc3").className += "button circle subYellow";
		    	document.getElementById("levIcon6").remove();
		    	document.getElementById("levIcon8").remove();
		    	document.getElementById("levCirc4").className += "button circle subGrey";
			    document.getElementById("levIcon9").remove();
			    document.getElementById("levIcon10").remove();
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
	}
  }

  enterLevel(val) {
  		this.navCtrl.push(ListPage, {level:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
