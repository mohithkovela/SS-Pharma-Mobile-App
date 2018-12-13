import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { OrderdetailsPage } from "../orderdetails/orderdetails";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-orderlist",
  templateUrl: "orderlist.html"
})
export class OrderlistPage {
  public items: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.loadData();
  }

  loadData() {
    let data: Observable<any>;
    data = this.http.get("assets/json/data.json");
    data.subscribe(result => {
      this.items = result;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OrderlistPage");
  }
  orddetails(item): void {
    this.navCtrl.push(OrderdetailsPage, item);

    //console.log(items)
  }
}
