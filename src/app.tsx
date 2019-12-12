import React from 'react'
import {StylesProvider, createGenerateClassName, MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import ScreenRouter from './screens/screen-router'

const generateClassName = createGenerateClassName({
  productionPrefix: 'c'
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#71ff6a'
    },
    secondary: {
      main: '#71f'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
    htmlFontSize: 10
  },
})

const App: React.FC = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <ScreenRouter />
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
