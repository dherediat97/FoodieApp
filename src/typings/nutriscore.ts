import { DataClass } from "./data_class"

export type NutriscoreData = {
  energy: number
  energyPoints: number
  energyValue: number
  fiber: number
  fiberPoints: number
  fiberValue: number
  fruitsVegetablesNutsColzaWalnutOliveOils: number
  fruitsVegetablesNutsColzaWalnutOliveOilsPoints: number
  fruitsVegetablesNutsColzaWalnutOliveOilsValue: number
  isBeverage: number
  isCheese: number
  isFat: number
  isWater: number
  negativePoints: number
  positivePoints: number
  proteins: number
  proteinsPoints: number
  proteinsValue: number
  saturatedFat: number
  saturatedFatPoints: number
  saturatedFatValue: number
  sodium: number
  sodiumPoints: number
  sodiumValue: number
  sugars: number
  sugarsPoints: number
  sugarsValue: number
  grade?: string
  score?: number
}

export type Nutriscore = {
  categoryAvailable: number
  data: DataClass
  grade: string
  nutrientsAvailable: number
  nutriscoreApplicable: number
  nutriscoreComputed: number
  score: number
}
