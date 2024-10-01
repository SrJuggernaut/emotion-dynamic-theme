export const RADIX_NEUTRAL_COLORS = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const

export type RadixNeutralColor = typeof RADIX_NEUTRAL_COLORS[number]

export const RADIX_BASIC_COLORS = ['bronze', 'gold', 'brown', 'orange', 'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'sky', 'mint', 'lime', 'yellow', 'amber'] as const

export type RadixBasicColor = typeof RADIX_BASIC_COLORS[number]

export const RADIX_REQUIRE_DARK_FOREGROUND = ['sky', 'mint', 'lime', 'yellow', 'amber', 'white'] as const

export type RadixRequireDarkForeground = typeof RADIX_REQUIRE_DARK_FOREGROUND[number]

export const RADIX_VIABLE_SUCCESS_COLORS = ['green', 'jade', 'grass', 'mint'] as const

export type RadixViableSuccessColor = typeof RADIX_VIABLE_SUCCESS_COLORS[number]

export const RADIX_VIABLE_INFO_COLORS = ['blue', 'indigo', 'sky', 'cyan'] as const

export type RadixViableInfoColor = typeof RADIX_VIABLE_INFO_COLORS[number]

export const RADIX_VIABLE_WARNING_COLORS = ['yellow', 'amber', 'orange'] as const

export type RadixViableWarningColor = typeof RADIX_VIABLE_WARNING_COLORS[number]

export const RADIX_VIABLE_DANGER_COLORS = ['red', 'ruby', 'tomato', 'crimson'] as const

export type RadixViableDangerColor = typeof RADIX_VIABLE_DANGER_COLORS[number]

export const RADIX_SPECIAL_COLORS = ['whiteA', 'blackA'] as const

export type RadixSpecialColor = typeof RADIX_SPECIAL_COLORS[number]

export const SEMANTIC_COLORS = ['primary', 'success', 'info', 'warning', 'danger'] as const

export type SemanticColor = typeof SEMANTIC_COLORS[number]
