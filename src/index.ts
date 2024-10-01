import getDarkRadixColors from './colors/getDarkRadixColors'
import getDynamicRadixColors from './colors/getDynamicRadixColors'
import getLightRadixColors from './colors/getLightRadixColors'
import type { RadixBasicColor, RadixNeutralColor, RadixViableDangerColor, RadixViableInfoColor, RadixViableSuccessColor, RadixViableWarningColor } from './constants'
import type { DynamicThemeColors } from './types/colors'

export interface DynamicTheme {
  colors: DynamicThemeColors
}

export interface CreateThemeArgsSemanticColors {
  primary?: RadixBasicColor
  success?: RadixViableSuccessColor
  info?: RadixViableInfoColor
  warning?: RadixViableWarningColor
  danger?: RadixViableDangerColor
}

export interface CreateThemeArgs {
  mode?: 'light' | 'dark'
  neutralColor?: RadixNeutralColor
  semanticColors?: CreateThemeArgsSemanticColors
}

export const createTheme = (args: CreateThemeArgs): DynamicTheme => {
  const { mode = 'light', neutralColor = 'gray', semanticColors } = args
  const { primary = 'blue', success = 'green', info = 'blue', warning = 'yellow', danger = 'red' } = semanticColors ?? {}

  const LightRadixColors = getLightRadixColors()
  const DarkRadixColors = getDarkRadixColors()
  const DynamicRadixColors = mode === 'light' ? getDynamicRadixColors(LightRadixColors) : getDynamicRadixColors(DarkRadixColors)

  return {
    colors: {
      ...DynamicRadixColors,
      ...LightRadixColors,
      ...DarkRadixColors,
      primary: DynamicRadixColors[primary as RadixBasicColor],
      success: DynamicRadixColors[success as RadixViableSuccessColor],
      info: DynamicRadixColors[info as RadixViableInfoColor],
      warning: DynamicRadixColors[warning as RadixViableWarningColor],
      danger: DynamicRadixColors[danger as RadixViableDangerColor],
      neutral: DynamicRadixColors[neutralColor as RadixNeutralColor]
    }
  }
}
