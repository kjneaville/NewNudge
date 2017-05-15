import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LevelsPage } from '../levels/levels';
import { Authentication } from '../authentication/authentication';
import { Catmodal } from '../catmodal/catmodal';

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