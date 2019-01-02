import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { OrderdetailsPage } from "../orderdetails/orderdetails";
import { Observable } from "rxjs/Observable";
import { HttpProvider } from "../../providers/http/http";
import { environment } from "../../environments/environment";

@IonicPage()
@Component({
  selector: "page-orderlist",
  templateUrl: "orderlist.html"
})
export class OrderlistPage {
  public items: any;
  private url = environment.url
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpProvider
  ) {
    this.loadData();
  }

  loadData() {
    this.http.getOrders().subscribe(response => {
      console.log(response);
      this.items = response.orders
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
