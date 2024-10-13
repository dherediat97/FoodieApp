import { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./features/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "productDetail",
    loadComponent: () =>
      import("./features/product-detail/product-detail.page").then(
        (m) => m.ProductDetailPage,
      ),
  },
]
