import { Component, Input } from "@angular/core"
import { IonRow, IonGrid, IonCol } from "@ionic/angular/standalone"
import { Nutriments } from "src/typings/nutriments"

@Component({
  selector: "ingredients-table",
  templateUrl: "./ingredients-table.html",
  styleUrls: ["./ingredients-table.scss"],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid],
})
export class IngredientsTable {
  @Input() public nutriments!: Nutriments
}
