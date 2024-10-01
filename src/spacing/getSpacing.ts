import type { DynamicThemeSpacing } from '../types/spacing'

const getSpacing = (spacing: number): DynamicThemeSpacing => {
  return {
    '0.5x': spacing * 0.5,
    '1x': spacing,
    '2x': spacing * 2,
    '3x': spacing * 3,
    '4x': spacing * 4,
    '5x': spacing * 5,
    '6x': spacing * 6,
    '7x': spacing * 7,
    '8x': spacing * 8,
    '9x': spacing * 9,
    '10x': spacing * 10
  }
}

export default getSpacing
