import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSkeletonText,
  IonList,
  IonListHeader,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonImg,
  IonNav,
} from "@ionic/angular/standalone"
import { Product } from "src/typings/product"
import { ActivatedRoute, Router } from "@angular/router"
import productMock from "src/typings/product_mock"

import { register } from "swiper/element/bundle"

register()

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ["./product-detail.page.scss"],
  standalone: true,
  imports: [
    IonImg,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSkeletonText,
    IonListHeader,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonNav,
  ],
})
export class ProductDetailPage {
  public product!: Product

  constructor(
    route: ActivatedRoute,
    private router: Router,
  ) {
    setTimeout(() => {
      // route.queryParams.subscribe((params) => {
      //   if (this.router.getCurrentNavigation()?.extras.state) {
      //     this.product =
      //       this.router.getCurrentNavigation()!.extras!.state!["product"]
      //   }
      // })
      this.product = productMock
    }, 2000)
  }
}
