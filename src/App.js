import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import { connect } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "Comic Sans MS",
      },
      palette: {
        primary : { 
          light: '#ffffff',
          main: '#d9eddf',
          dark: '#a7bbad',
        },
        secondary: {
          light: '#6dffd4',
          main: '#25d8a3',
          dark: '#00a574',
        }
    },
})

function App(props) {
  // const { isAuthenticated, isVerifying } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <ProtectedRoute
          exact
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        /> */}
      </Switch>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);