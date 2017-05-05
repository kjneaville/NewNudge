import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LevelsPage } from '../levels/levels';
import { Authentication } from '../authentication/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  chart: any;
  data: any;

  constructor(public navCtrl: NavController) {
  	
  }

	ionViewDidLoad() {

	}

	enterCategory(val) {
  		this.navCtrl.push(LevelsPage, {category:val}); // Upon clicking on a category, navigate to the page for that category
   }

   logout() {
  		this.navCtrl.push(Authentication); // Log in and go to home page
   }

}