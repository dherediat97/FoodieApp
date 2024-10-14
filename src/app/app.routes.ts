import { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./features/home/home.page").then((m) => m.HomePage),
    children: [
      {
        path: "home/settings",
        loadComponent: () =>
          import("./features/settings/settings.page").then(
            (m) => m.SettingsPage,
          ),
      },
      {
        path: "home/recent-products",
        loadComponent: () =>
          import("./features/recent-products/recent-products.page").then(
            (m) => m.RecentProductsPage,
          ),
      },
    ],
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
