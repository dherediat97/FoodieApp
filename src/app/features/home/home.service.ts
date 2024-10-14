import { Injectable } from "@angular/core"
import { HttpService } from "@foddie-services/http-service"
import { Observable } from "rxjs"
import { OpenFoodData } from "@foddie-types/food_data"

@Injectable({
  providedIn: "root",
})
export class FoddieService {
  constructor(private httpService: HttpService) {}

  getFoodData(barcode: string): Observable<OpenFoodData> {
    return this.httpService.doGet<OpenFoodData>(`product/${barcode}`)
  }
}
