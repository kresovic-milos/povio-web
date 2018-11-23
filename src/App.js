import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';
import AppBar from './components/common/AppToolBar';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <AppBar />
      <Routes />
    </div>
  </ConnectedRouter>
);

export default App;
