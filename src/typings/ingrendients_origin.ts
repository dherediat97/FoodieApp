import { AggregatedOrigin } from "./food_data"

export type OriginsOfIngredients = {
  aggregatedOrigins: AggregatedOrigin[]
  epiScore: number
  epiValue: number
  originsFromCategories: string[]
  originsFromOriginsField: string[]
  transportationScore: number
  transportationScores: { [key: string]: number }
  transportationValue: number
  transportationValues: { [key: string]: number }
  value: number
  values: { [key: string]: number }
  warning: string
}
