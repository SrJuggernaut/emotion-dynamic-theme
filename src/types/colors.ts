import type { RadixBasicColor, RadixNeutralColor, SemanticColor } from '../constants'

export interface ThemeColor {
  '01': string
  '02': string
  '03': string
  '04': string
  '05': string
  '06': string
  '07': string
  '08': string
  '09': string
  ['10']: string
  ['11']: string
  ['12']: string
  foreground: string
  background: string
}

export type DynamicRadixColors = Record<RadixBasicColor, ThemeColor> & Record<RadixNeutralColor, ThemeColor>
export type LightRadixColors = Record<`${RadixBasicColor}Light`, ThemeColor> & Record<`${RadixNeutralColor}Light`, ThemeColor>
export type DarkRadixColors = Record<`${RadixBasicColor}Dark`, ThemeColor> & Record<`${RadixNeutralColor}Dark`, ThemeColor>
export type DynamicSemanticColors = Record<SemanticColor, ThemeColor>

export type DynamicThemeColors = DynamicRadixColors & LightRadixColors & DarkRadixColors & DynamicSemanticColors & { neutral: ThemeColor }
