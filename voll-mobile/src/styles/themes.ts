import { extendTheme } from "native-base";

export const themes = extendTheme({
  colors: {
    gray: {
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
    },
    blue: {
        100: "#E3F2FD",
        200: "#BBDEFB",
        300: "#90CAF9",
        400: "#64B5F6",
        500: "#42A5F5",
        600: "#2196F3",
        700: "#1E88E5",
        800: "#1976D2",
        900: "#1565C0",
  },
  red: {
    100: "#FBE9E7",
    200: "#FFCCBC",
    300: "#FFAB91",
    400: "#FF8A65",
    500: "#FF7043",
    600: "#FF5722",
    700: "#F4511E",
    800: "#E64A19",
    900: "#D84315",
  },
  white: '#FFFFFF',
  black: '#000000'
  },
  fontSizes: { 
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",   
   }
});
