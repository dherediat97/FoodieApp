import { Component, OnInit } from "@angular/core"
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
  IonToggle,
  IonToast,
} from "@ionic/angular/standalone"
import { Toast } from "@capacitor/toast"

import { addIcons } from "ionicons"
import { camera, moon, sunnyOutline } from "ionicons/icons"

import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
} from "@capacitor/barcode-scanner"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
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
    IonToggle,
  ],
})
export class HomePage implements OnInit {
  public barcodesDetected: string[] = []
  public isDarkMode = false

  constructor() {
    addIcons({ sunnyOutline, moon, camera })
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches)

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener("change", (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches),
    )
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.toggleDarkPalette(isDark)
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange() {
    this.toggleDarkPalette(!this.isDarkMode)
  }

  toggleDarkPalette(shouldAdd: boolean) {
    this.isDarkMode = shouldAdd
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd)
  }

  async takePicture() {
    var result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
    })
    this.barcodesDetected.push(result.ScanResult)
    this.presentToast()
  }
  async presentToast() {
    await Toast.show({
      text: "Se ha leído " + this.barcodesDetected.length + " código de barras",
      position: "bottom",
    })
  }
}
