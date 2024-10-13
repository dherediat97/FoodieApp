import { OriginsOfIngredients } from "./ingrendients_origin"
import { Product } from "./product"

export type OpenFoodData = {
  code: string
  errors: any[]
  product: Product
  result: Result
  status: string
  warnings: any[]
}

export type CategoriesProperties = {}

export type EcoscoreData = {
  adjustments: Adjustments
  agribalyse: Agribalyse
  missing: Missing
  missingAgribalyseMatchWarning: number
  scores: CategoriesProperties
  status: string
}

export type Adjustments = {
  originsOfIngredients: OriginsOfIngredients
  packaging: AdjustmentsPackaging
  productionSystem: ProductionSystem
  threatenedSpecies: CategoriesProperties
}

export type AggregatedOrigin = {
  epiScore: number
  origin: string
  percent: number
  transportationScore: null
}

export type AdjustmentsPackaging = {
  nonRecyclableAndNonBiodegradableMaterials: number
  packagings: PackagingPackaging[]
  score: number
  value: number
  warning: string
}

export type PackagingPackaging = {
  number_of_units: number
  quantity_per_unit: string
  quantity_per_unit_unit: string
  quantity_per_unit_value: number
  recycling: string
  weight_measured: number
  ecoscoreMaterialScore: number
  ecoscoreShapeRatio: number
  material: string
  shape: string
}

export type ProductionSystem = {
  labels: any[]
  value: number
  warning: string
}

export type Agribalyse = {
  warning: string
}

export type Missing = {
  agbCategory: number
  labels: number
  origins: number
  packagings: number
}

export type IngredientsAnalysis = {
  enPalmOilContentUnknown: string[]
  enVeganStatusUnknown: string[]
  enVegetarianStatusUnknown: string[]
}

export type Languages = {
  enEnglish: number
}

export type LanguagesCodes = {
  en: number
  es: number
  fr: number
}

export type Components = {
  negative: Tive[]
  positive: Tive[]
}

export type Tive = {
  id: string
  points: number
  pointsMax: number
  unit: string
  value: number
}

export type ProductPackaging = {
  number_of_units: number
  quantity_per_unit: string
  quantity_per_unit_unit: string
  quantity_per_unit_value: number
  recycling: any
  weight_measured: number
  shape: Shape
}

export type Shape = {
  id: string
}

export type PackagingsMaterials = {
  all: CategoriesProperties
  endPlastic: CategoriesProperties
  enUnknown: CategoriesProperties
}

export type SelectedImages = {
  front: SelectedImagesFront
  ingredients: SelectedImagesFront
  nutrition: SelectedImagesFront
  packaging: SelectedImagesFront
}

export type SelectedImagesFront = {
  display: Display
  small: Display
  thumb: Display
}

export type Display = {
  en?: string
  es?: string
  fr?: string
}

export type Source = {
  fields: string[]
  id: string
  images: any[]
  importT: number
  url: null | string
  manufacturer?: null
  name?: string
}

export type SourcesFields = {
  orgDatabaseUsda: OrgDatabaseUsda
}

export type OrgDatabaseUsda = {
  availableDate: Date
  fdcCategory: string
  fdcDataSource: string
  fdcID: string
  modifiedDate: Date
  publicationDate: Date
}

export type Result = {
  id: string
  lcName: string
  name: string
}
