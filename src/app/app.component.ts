import { Component, Optional } from "@angular/core"
import { IonApp, IonRouterOutlet, Platform } from "@ionic/angular/standalone"
import { App } from "@capacitor/app"

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    @Optional() private routerOutlet: IonRouterOutlet,
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp()
      }
    })
  }
}
