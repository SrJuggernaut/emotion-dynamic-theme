import getDarkRadixColors from './colors/getDarkRadixColors'
import getDynamicRadixColors from './colors/getDynamicRadixColors'
import getLightRadixColors from './colors/getLightRadixColors'
import type { RadixBasicColor, RadixNeutralColor, RadixViableDangerColor, RadixViableInfoColor, RadixViableSuccessColor, RadixViableWarningColor } from './constants'
import getSpacing from './spacing/getSpacing'
import type { DynamicThemeBreakpoints } from './types/breakpoints'
import type { DynamicThemeColors } from './types/colors'
import type { DynamicThemeSpacing } from './types/spacing'

export interface DynamicTheme {
  colors: DynamicThemeColors
  breakpoints: DynamicThemeBreakpoints
  spacing: DynamicThemeSpacing
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
  breakpoints?: DynamicThemeBreakpoints
  spacing?: number
}

export const createTheme = (args: CreateThemeArgs): DynamicTheme => {
  const { mode = 'light', neutralColor = 'gray', semanticColors, breakpoints, spacing = 8 } = args

  const { primary = 'blue', success = 'green', info = 'blue', warning = 'yellow', danger = 'red' } = semanticColors ?? {}
  const { xs = 0, sm = 576, md = 768, lg = 992, xl = 1200, xxl = 1400 } = breakpoints ?? {}

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
    },
    breakpoints: { xs, sm, md, lg, xl, xxl },
    spacing: getSpacing(spacing)
  }
}
