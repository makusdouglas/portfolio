export type ThemeInterface = {
  color: {
    text: string;
    primary: string;
    info: string;
    bgPrimary: string;
    bgSecondary: string;
    success: string;
    warning: string;
    danger: string;
  };
  shadow: string;
  fontSizes: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};
declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
