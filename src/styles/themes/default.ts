export const defaultTheme = {
  'base-background': '#071422',
  'base-profile': '#0B1B2B',
  'base-post': '#112131',
  'base-input': '#040F1A',
  'base-border': '#1C2F41',
  'brand-blue': '#3294F8',
  'base-span': '#7B96B2',
  'base-label': '#3A536B',
  'base-subtitle': '#C4D4E3',
  'base-title': '#E7EDF4',
  'base-text': '#AFC2D4',
} as const

export interface Theme {
  'base-background': string
  'base-profile': string
  'base-post': string
  'base-input': string
  'base-border': string
  'brand-blue': string
  'base-span': string
  'base-label': string
  'base-subtitle': string
  'base-title': string
  'base-text': string
}

const theme: Theme = defaultTheme

export default theme
