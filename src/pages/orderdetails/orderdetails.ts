import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrescriptionPage} from '../../pages/prescription/prescription';
import { BillPage} from '../../pages/bill/bill';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
  page1: any = PrescriptionPage;
  page2: any = BillPage;

 
  navData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.navData= this.navParams.data;   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }
  backscreen(){
    this.navCtrl.pop();
  }

}
