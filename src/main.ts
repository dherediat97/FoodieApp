import { bootstrapApplication } from "@angular/platform-browser"
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from "@angular/router"
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from "@ionic/angular/standalone"

import { routes } from "./app/app.routes"
import { AppComponent } from "./app/app.component"

import { HttpClient, provideHttpClient } from "@angular/common/http"
import { importProvidersFrom } from "@angular/core"
import { FoddieService } from "./app/features/home/home.service"
import { HttpService } from "./app/services/http_service"

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(HttpClient),
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    HttpService,
    FoddieService,
  ],
})
