import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

}
