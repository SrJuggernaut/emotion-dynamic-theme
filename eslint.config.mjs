import eslintJs from '@eslint/js'
import stylisticEslint from '@stylistic/eslint-plugin'
import eslintTs from 'typescript-eslint'

export default [
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  stylisticEslint.configs.customize({
    arrowParens: true,
    blockSpacing: true,
    braceStyle: '1tbs',
    commaDangle: 'never',
    indent: 2,
    quoteProps: 'as-needed',
    quotes: 'single',
    semi: false
  })
]
