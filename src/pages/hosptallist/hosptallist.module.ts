import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HosptallistPage } from './hosptallist';

@NgModule({
  declarations: [
    HosptallistPage,
  ],
  imports: [
    IonicPageModule.forChild(HosptallistPage),
  ],
})
export class HosptallistPageModule {}
