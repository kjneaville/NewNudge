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
  }

  enterLevel(val) {
  		this.navCtrl.push(ListPage, {level:val}); // Upon clicking on a category, navigate to the page for that category
   }

}
