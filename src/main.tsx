import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MuiProvider } from 'layouts/mui';

import { App } from './app';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MuiProvider>
  </React.StrictMode>
);

