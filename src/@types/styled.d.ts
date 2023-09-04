import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends ThemeType {}
}
