import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode'
import App from './components/App';
import './index.css';
import store from './app/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>
);
