import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Authentication } from './authentication';

@NgModule({
  declarations: [
    Authentication,
  ],
  imports: [
    IonicPageModule.forChild(Authentication),
  ],
  exports: [
    Authentication
  ]
})
export class AuthenticationModule {}
