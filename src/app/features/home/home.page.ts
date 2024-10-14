import { Component } from "@angular/core"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonActionSheet,
  IonButtons,
  IonItem,
  IonToast,
  IonImg,
  IonLabel,
  IonButton,
  IonTab,
  IonTabs,
} from "@ionic/angular/standalone"
import { Toast } from "@capacitor/toast"

import { addIcons } from "ionicons"
import { camera } from "ionicons/icons"

import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
} from "@capacitor/barcode-scanner"

import { NavigationExtras, Router } from "@angular/router"
import { Product } from "@foddie-types/product"
import { BottomBar } from "@foddie-components/bottom-bar/bottom-bar"
import { TopBar } from "@foddie-components/top-bar/top-bar"
import { FoddieService } from "./home.service"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonImg,
    IonToast,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonActionSheet,
    IonButtons,
    IonItem,
    IonImg,
    TopBar,
    BottomBar,
  ],
})
export class HomePage {
  public barcodesDetected: string[] = []
  product!: Product

  constructor(
    private foddieService: FoddieService,
    private router: Router,
  ) {
    addIcons({ camera })
  }

  async takePicture() {
    // var result = await CapacitorBarcodeScanner.scanBarcode({
    //   hint: CapacitorBarcodeScannerTypeHint.ALL,
    // })
    // this.barcodesDetected.push(result.ScanResult)
    // this.presentToast()

    // this.foddieService.getFoodData(result.ScanResult).subscribe((response) => {
    //   let navigationExtras: NavigationExtras = {
    //     state: { product: response.product },
    //   }
    this.navigateProductDetails()
    // })
  }
  async presentToast() {
    await Toast.show({
      text: `Se ha leído ${this.barcodesDetected.length} código de barras`,
      position: "bottom",
    })
  }

  navigateProductDetails() {
    // this.router.navigate(["/productDetail"], extra)
    this.router.navigate(["/productDetail"])
  }
}
