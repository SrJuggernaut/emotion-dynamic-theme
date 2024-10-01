import * as RadixColors from '@radix-ui/colors'
import type { DarkRadixColors, ThemeColor } from '../'
import { RADIX_REQUIRE_DARK_FOREGROUND, type RadixRequireDarkForeground } from '../constants'

const darkColorsRegex = new RegExp(/^(?!default$)([a-z]*?)Dark$/gm)

const getDarkRadixColors = (): DarkRadixColors => {
  const darkColors: Partial<DarkRadixColors> = {}
  Object.entries(RadixColors).forEach(([key, radixColor]) => {
    const match = darkColorsRegex.exec(key)
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
    darkColors[`${colorName}Dark` as keyof DarkRadixColors] = currentColor as ThemeColor
  })
  return darkColors as DarkRadixColors
}

export default getDarkRadixColors
