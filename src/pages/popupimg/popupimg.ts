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
  imageBlob: any;
  imageFile: any;
  name: any;
  price: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpProvider
  ) {
    let navData = this.navParams.data;
    this.imageBlob = navData.blob;
    this.imageFile = navData.file;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopupimgPage");
  }

  cancel() {
    this.navCtrl.pop();
  }

  submit() {
    this.http
      .placeOrder(this.name, this.price, this.imageBlob, this.imageFile.name)
      .subscribe(
        response => {
          console.log(response);
          this.navCtrl.push(SuccessPage, {});
        },
        error => {
          console.log(error);
        }
      );
  }
}
