import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#4c7cfb',
      light: '#839de2',
    },
    secondary: {
      main: '#e65552',
    },
    background: {
      default: '#040412',
      paper: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    error: {
      main: '#cf6679',
    },
  },
});

export default theme;