import { Component } from "@angular/core"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonTabs,
  IonTabButton,
  IonContent,
  IonTab,
  IonTabBar,
  IonRouterOutlet,
  IonLabel,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import {
  settings,
  barcodeOutline,
  add,
  camera,
  navigate,
  person,
  bookmarks,
} from "ionicons/icons"

@Component({
  selector: "bottom-bar",
  templateUrl: "./bottom-bar.html",
  styleUrls: ["./bottom-bar.scss"],
  standalone: true,
  imports: [
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabs,
    IonTab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonTabButton,
    IonIcon,
    IonContent,
  ],
})
export class BottomBar {
  constructor() {
    addIcons({
      barcodeOutline,
      settings,
      navigate,
      bookmarks,
      person,
      camera,
      add,
    })
  }
}
