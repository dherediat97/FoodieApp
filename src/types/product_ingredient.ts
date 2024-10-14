export type ProductIngredient = {
  id: string
  ingredients?: PurpleIngredient[]
  percentEstimate: number
  percentMax: number
  percentMin: number
  text: string
  vegan?: Veg
  vegetarian?: Veg
  ciqualFoodCode?: string
}

export enum Veg {
  Maybe = "maybe",
  Yes = "yes",
  No = "no",
}

export type PurpleIngredient = {
  ciqualProxyFoodCode?: string
  id: string
  percent: number
  percentEstimate: number
  percentMax: number
  percentMin: number
  text: string
  vegan: Veg
  vegetarian: Veg
  ciqualFoodCode?: string
  ingredients?: ProductIngredient[]
  fromPalmOil?: string
}
