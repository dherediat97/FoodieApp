import { Injectable } from "@angular/core"
import { HttpService } from "../../services/http_service"
import { OpenFoodData } from "src/typings/food_data"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class FoddieService {
  constructor(private httpService: HttpService) {}

  getFoodData(barcode: string): Observable<OpenFoodData> {
    return this.httpService.doGet<OpenFoodData>(`product/${barcode}`)
  }
}
