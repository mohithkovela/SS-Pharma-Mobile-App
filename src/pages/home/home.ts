import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { PopupimgPage } from '../popupimg/popupimg';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showDiv:boolean;
  public base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {

  }
  takePicture(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 500,
        targetHeight: 500
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.navCtrl.push(PopupimgPage, {
          data: this.base64Image
        });
        this.showDiv =false
    }, (err) => {
        console.log(err);
    });
  }
  uploadpic(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.navCtrl.push(PopupimgPage, {
          data: this.base64Image
        });
        this.showDiv =false
    }, (err) => {
        console.log(err);
    });
  }


  ionViewWillEnter(){
    this.showDiv = false
  }

  uploadclick(){
     
    this.showDiv =true
  }

  camhide(){
  //alert();
    this.showDiv =false
  }

}
