import { Component } from '@angular/core';
import { Deploy } from '@ionic/cloud-angular';

import { NavController, ModalController } from 'ionic-angular';
import { LevelsPage } from '../levels/levels';
import { Authentication } from '../authentication/authentication';
import { Catmodal } from '../catmodal/catmodal';
import { ActionSheetController } from 'ionic-angular';
import * as UserData from '../../assets/data/progress.json';
import * as d3 from 'd3';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  chart: any;
  uData: any;

  constructor(public deploy: Deploy, public navCtrl: NavController, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
  		//PULL array DOWN INTO progress.json
  		this.uData = UserData;
  		console.log(this.uData);
  }

	ionViewDidLoad() {
		var a1 = 0;
		var b1 = 0;
		var c1 = 0;
		var d1 = 0;
		for (var a = 0; a < 16; a++) {
			if (this.uData[a]) { a1++; }
		}
		for (var b = 16; b < 32; b++) {
			if (this.uData[b]) { b1++; }
		}
		for (var c = 32; c < 48; c++) {
			if (this.uData[c]) { c1++; }
		}
		for (var d = 48; d < 64; d++) {
			if (this.uData[d]) { d1++; }
		}
		var completion = Math.round(a1 / 16 * 100); //Calculate Budget completion here
		var completion2 = Math.round(b1 / 16 * 100); //Calculate Savings completion here
		var completion3 = Math.round(c1 / 16 * 100); //Calculate Retirement completion here
		var completion4 = Math.round(d1 / 16 * 100); //Calculate Credit Card completion here
		document.getElementById("progress").setAttribute("data-percentage", completion.toString());
		document.getElementById("progress2").setAttribute("data-percentage", completion2.toString());
		document.getElementById("progress3").setAttribute("data-percentage", completion3.toString());
		document.getElementById("progress4").setAttribute("data-percentage", completion4.toString());
	}

	enterCategory(val) {
  		this.navCtrl.push(LevelsPage, {category:val}); // Upon clicking on a category, navigate to the page for that category
   }

   logout() {
  		this.navCtrl.setRoot(Authentication); // Log in and go to home page
   }

   presentModal() {
    let modal = this.modalCtrl.create(Catmodal);
    modal.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change your Profile Picture',
      buttons: [
        {
          text: 'Use Camera',
          handler: () => {
            console.log('Camera clicked');
          }
        },{
          text: 'Import from Photos',
          handler: () => {
            console.log('Import clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}