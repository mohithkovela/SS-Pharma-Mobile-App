import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class HttpProvider {
  constructor(public http: HttpClient) {}

  placeOrder(name, price, image, imageName) {
    console.log(name, price, image);
    let formData = new FormData();
    formData.append("image", image, imageName);
    formData.append("name", name);
    formData.append("price", price);
    console.log(formData);

    return this.http.post(environment.url + "orders", formData);
  }

  getOrders(): any {
    return this.http.get(environment.url + "orders");
  }
}
