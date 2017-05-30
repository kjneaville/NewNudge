import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Aboutmodal } from './aboutmodal';

@NgModule({
  declarations: [
    Aboutmodal,
  ],
  imports: [
    IonicPageModule.forChild(Aboutmodal),
  ],
  exports: [
    Aboutmodal
  ]
})
export class AboutmodalModule {}
