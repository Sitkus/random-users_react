import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#252728'
    },
    secondary: {
      light: '#F2F5F8',
      main: '#66A1CC',
      dark: '#667C95'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      color: '#ffd710',
      fontWeight: 'normal',
      fontSize: '30px'
    },
    h2: {
      fontWeight: 'normal',
      fontSize: '25px'
    },
    h3: {
      fontWeight: 'normal',
      fontSize: '21px'
    }
  }
});

export default theme;