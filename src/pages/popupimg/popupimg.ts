import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SuccessPage } from "../../pages/success/success";
import { HttpProvider } from "../../providers/http/http";

@IonicPage()
@Component({
  selector: "page-popupimg",
  templateUrl: "popupimg.html"
})
export class PopupimgPage {
  img: any;
  name: any;
  price: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpProvider
  ) {
    this.img = navParams.get("data");
    console.log(this.img);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopupimgPage");
  }

  Cancelclk() {
    this.navCtrl.pop();
  }

  success() {
    this.http
      .placeOrder(this.name, this.price, this.img)
      .subscribe(response => {
        console.log(response);
        this.navCtrl.push(SuccessPage, {});
      });
  }
}
