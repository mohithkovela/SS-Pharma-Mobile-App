import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Camera } from "@ionic-native/camera";
import { PopupimgPage } from "../popupimg/popupimg";
import { File } from "@ionic-native/file";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  showDiv: boolean = false;
  selectedImage: File;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private file: File
  ) {}

  takePicture() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        targetWidth: 500,
        targetHeight: 500
      })
      .then(
        imageData => {
          this.uploadImage(imageData);
        },
        err => {
          console.log(err);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }

  readPicFromFileSystem() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.FILE_URI
      })
      .then(
        imageData => {
          this.uploadImage(imageData);
        },
        err => {
          console.log(err);
        }
      );
  }

  uploadClick() {
    this.showDiv = true;
  }

  uploadImage(imageData) {
    this.file.resolveLocalFilesystemUrl(imageData).then((fileEntry: any) => {
      fileEntry.file(file => {
        this.readFile(file);
      });
    });
    this.showDiv = false;
  }

  private readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], { type: file.type });
      let fileData = {
        blob: imgBlob,
        file: file
      };
      this.navCtrl.push(PopupimgPage, fileData);
      this.showDiv = false;
    };
    reader.readAsArrayBuffer(file);
  }

  hideCamera() {
    this.showDiv = false;
  }
}
