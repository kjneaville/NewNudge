import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NudgePage } from '../nudge/nudge';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.level = navParams.get("level");
  	console.log(this.level);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
  }

  enterNudge(val) {
  		this.navCtrl.push(NudgePage, {nudge:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
