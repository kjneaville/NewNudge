import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Catmodal } from './catmodal';

@NgModule({
  declarations: [
    Catmodal,
  ],
  imports: [
    IonicPageModule.forChild(Catmodal),
  ],
  exports: [
    Catmodal
  ]
})
export class CatmodalModule {}
