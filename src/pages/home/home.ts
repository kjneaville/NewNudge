import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LevelsPage } from '../levels/levels';
import { Authentication } from '../authentication/authentication';
import { Catmodal } from '../catmodal/catmodal';
import * as d3 from 'd3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  chart: any;
  data: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  		
  }

	ionViewDidLoad() {
		var completion = 40; //Calculate Budget completion here
		var completion2 = 10; //Calculate Savings completion here
		var completion3 = 70; //Calculate Retirement completion here
		var completion4 = 80; //Calculate Credit Card completion here
		document.getElementById("progress").setAttribute("data-percentage", completion.toString());
		document.getElementById("progress2").setAttribute("data-percentage", completion2.toString());
		document.getElementById("progress3").setAttribute("data-percentage", completion3.toString());
		document.getElementById("progress4").setAttribute("data-percentage", completion4.toString());
	}

	enterCategory(val) {
  		this.navCtrl.push(LevelsPage, {category:val}); // Upon clicking on a category, navigate to the page for that category
   }

   logout() {
  		this.navCtrl.push(Authentication); // Log in and go to home page
   }

   presentModal() {
    let modal = this.modalCtrl.create(Catmodal);
    modal.present();
  }

}