import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SuccessPage} from '../../pages/success/success';

/**
 * Generated class for the PopupimgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popupimg',
  templateUrl: 'popupimg.html',
})
export class PopupimgPage {
  img: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.get('data');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupimgPage');
  }
  Cancelclk(){

    this.navCtrl.pop();
  }
  success(){
    this.navCtrl.push(SuccessPage, {
      
    });
  }
}
