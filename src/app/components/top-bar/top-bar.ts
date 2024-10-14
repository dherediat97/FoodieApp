import { Component, Inject, Input, OnInit } from "@angular/core"
import { Navigation } from "@angular/router"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonLabel,
  NavController,
  IonImg,
  IonAvatar,
  IonButton,
} from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import { arrowBack, sunnyOutline, moon } from "ionicons/icons"

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.html",
  styleUrls: ["./top-bar.scss"],
  standalone: true,
  imports: [
    IonButton,
    IonAvatar,
    IonImg,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButtons,
    IonLabel,
    IonBackButton,
  ],
})
export class TopBar implements OnInit {
  public isDarkMode = false
  @Input() title: string = ""

  constructor(public navigation: NavController) {
    addIcons({ sunnyOutline, moon, arrowBack })
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
}
