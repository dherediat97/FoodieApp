import { bootstrapApplication } from '@angular/platform-browser'
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router'
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone'

import { routes } from './app/app.routes'
import { AppComponent } from './app/app.component'

import { HttpClient } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'
import { FoddieAppService } from './app/home/home.service'

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(HttpClient),
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    FoddieAppService,
  ],
})
