import { Component } from "@angular/core"
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
  IonAccordion,
  IonAccordionGroup,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/angular/standalone"
import { ActivatedRoute, Router } from "@angular/router"

import { register } from "swiper/element/bundle"
import { IngredientsTable } from "@foddie-components/ingredients-table/ingredients-table"

import productMock from "@foddie-types/product_mock"
import { Product } from "@foddie-types/product"
import { TopBar } from "@foddie-components/top-bar/top-bar"

register()

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
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
    IngredientsTable,
    IonAccordion,
    IonAccordionGroup,
    TopBar,
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
    }, 0)
  }
}
