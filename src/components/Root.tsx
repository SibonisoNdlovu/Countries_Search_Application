import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from './App';
import AppState from '../redux/state/AppState';

interface IRootProps {
  store: Store<AppState>;
}

const Root: React.FunctionComponent<IRootProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

export default Root;
