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
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#4D4D4D',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.25px',
          paddingLeft: '16px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '4px 16px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '13px 16px;'
        }
      }
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
          color: 'gray'
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6', // Redefine
    },
    secondary: {
      main: '#19857b', // Redefine
    },
    error: {
      main: '#ff0000', // Redefine
    },
    background: {
      default: '#e0e0e0', // Redefine
    },
  },
});

export default theme;
