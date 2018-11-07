import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
