import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "Comic Sans MS",
      },
      palette: {
        primary : { 
          light: '#ffffff',
          main: '#00959A',
          dark: '#0098BF',
        },
        secondary: {
          light: '#6dffd4',
          main: '#7380D5',
          dark: '#00a574',
        }
    },
})

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home}/>

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