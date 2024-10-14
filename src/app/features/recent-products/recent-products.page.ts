import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone"
import { TopBar } from "../../components/top-bar/top-bar"

@Component({
  selector: "app-recent-products",
  templateUrl: "./recent-products.page.html",
  styleUrls: ["./recent-products.page.scss"],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    TopBar,
  ],
})
export class RecentProductsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
