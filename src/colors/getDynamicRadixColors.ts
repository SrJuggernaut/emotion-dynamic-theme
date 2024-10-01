import type { DarkRadixColors, DynamicRadixColors, LightRadixColors } from '../types/colors'

const getDynamicRadixColors = (colors: LightRadixColors | DarkRadixColors): DynamicRadixColors => {
  return Object.fromEntries(Object.entries(colors).map(([key, value]) => ([key.replace('Light', '').replace('Dark', ''), value]))) as DynamicRadixColors
}

export default getDynamicRadixColors
