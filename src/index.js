import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {red50,redA100} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';

const muiTheme = getMuiTheme({
  palette: {
    textColor: red50,
  },
  appBar: {
    height: 50,
    textColor: red50,
    color: redA100
  },
});

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App/>
  </MuiThemeProvider>
);

injectTapEventPlugin();

render(
  <Main/>,
  document.getElementById("app")
);
