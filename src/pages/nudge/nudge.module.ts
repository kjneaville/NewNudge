import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NudgePage } from './nudge';

@NgModule({
  declarations: [
    NudgePage,
  ],
  imports: [
    IonicPageModule.forChild(NudgePage),
  ],
  exports: [
    NudgePage
  ]
})
export class NudgeModule {}
