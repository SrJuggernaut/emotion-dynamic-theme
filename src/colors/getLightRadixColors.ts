import * as RadixColors from '@radix-ui/colors'
import { RADIX_REQUIRE_DARK_FOREGROUND, type RadixRequireDarkForeground } from '../constants'
import type { LightRadixColors, ThemeColor } from '../types/colors'

export const lightColorsRegex = new RegExp(/^(?!default$)([a-z]*?)$/gm)

const getLightRadixColors = (): LightRadixColors => {
  const lightColors: Partial<LightRadixColors> = {}
  Object.entries(RadixColors).forEach(([key, radixColor]) => {
    const match = lightColorsRegex.exec(key)
    const currentColor: Partial<ThemeColor> = {}
    if (match === null) return
    const [, colorName] = match
    Array.from({ length: 12 }).map((_, index) => (index + 1).toString()).forEach((value) => {
      const colorKey = value.length === 1 ? `0${value}` : value
      const colorValue = radixColor[`${colorName}${value}` as keyof typeof radixColor]
      currentColor[colorKey as keyof ThemeColor] = colorValue
    })
    currentColor.foreground = RADIX_REQUIRE_DARK_FOREGROUND.includes(colorName as RadixRequireDarkForeground) ? RadixColors.blackA.blackA12 : RadixColors.whiteA.whiteA12
    currentColor.background = currentColor['09']
    lightColors[`${colorName}Light` as keyof LightRadixColors] = currentColor as ThemeColor
  })

  return lightColors as LightRadixColors
}

export default getLightRadixColors
