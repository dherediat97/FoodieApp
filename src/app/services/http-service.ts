import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { baseUrl, defaultHeaders } from "../constants/http-constants"

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  doGet<T>(method: string) {
    const options = {
      headers: defaultHeaders,
    }

    return this.http.get<T>(`${baseUrl}/${method}`, options)
  }

  doPost<T>(method: string) {
    const options = {
      headers: defaultHeaders,
    }

    return this.http.post<T>(`${baseUrl}/${method}`, options)
  }
}
