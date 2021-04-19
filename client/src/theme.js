import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#4c7cfb",
      light: "#839de2",
    },
    secondary: {
      main: "#e65552",
    },
    background: {
      default: "#040412",
      // paperGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // paper: '#272727'
    },
    error: {
      main: "#cf6679",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "transparent",
        // border: "1px solid white",
      },
    },
    MuiCard: {
      root: {
        background: "transparent",
        border: "1px solid white",
        // borderOpacity: "0.7"
      },
    },
  },
});

export default theme;
