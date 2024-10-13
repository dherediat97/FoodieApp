import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private baseUrl: string = "https://world.openfoodfacts.org/api/v3"

  constructor(private http: HttpClient) {}

  doGet<T>(method: string) {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    return this.http.get<T>(`${this.baseUrl}/${method}`, options)
  }

  doPost<T>(method: string) {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    return this.http.post<T>(`${this.baseUrl}/${method}`, options)
  }
}
