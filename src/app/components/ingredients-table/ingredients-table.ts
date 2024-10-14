import { Component, Input } from "@angular/core"
import { Nutriments } from "@foddie-types/nutriments"
import { IonRow, IonGrid, IonCol } from "@ionic/angular/standalone"

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
