import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpProvider {
  constructor(public http: HttpClient) {
    console.log("Hello HttpProvider Provider");
  }

  placeOrder(name, price, image) {
    console.log("upload image function called");
    let formData = new FormData();
    formData.append("image", image, image.name);
    formData.append("name", name);
    formData.append("price", price);

    return this.http.post(environment.url + "orders", formData);
  }

  getOrders(): any {
    return this.http.get(environment.url + "orders");
  }
}
