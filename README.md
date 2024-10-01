# @srjuggernaut/emotion-dynamic-theme

An [emotion](https://emotion.sh/) theme to be used in simple applications. Uses [Radix Colors](https://www.radix-ui.com/colors) for colors.

## Installation


```bash
npm install @srjuggernaut/emotion-dynamic-theme
```

```bash
bun add @srjuggernaut/emotion-dynamic-theme
```


## Usage

```ts
import { createTheme } from '@srjuggernaut/emotion-dynamic-theme'

const theme = createTheme()

export default theme
```

```ts
// Any d.ts file\
import { DynamicTheme } from '@srjuggernaut/emotion-dynamic-theme';

declare module '@emotion/react' {
  export type Theme = DynamicTheme
}
```