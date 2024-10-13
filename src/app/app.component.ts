import { Component } from "@angular/core"
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { register } from "swiper/element/bundle"
register()
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
