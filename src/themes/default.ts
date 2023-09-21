import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'auto',
          backgroundColor: 'white'
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: 'none',
            },
          }
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
          color: ' #4d4d4d',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#4d4d4d14',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#27262A', // Redefine
    },
    secondary: {
      main: '#BAA182', // Redefine
    },
    error: {
      main: '#BA1A1A', // Redefine
    },
    background: {
      default: '#F9F9FA', // Redefine
    },
  },
});

export default theme;