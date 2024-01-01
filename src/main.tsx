import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { MuiProvider } from 'layouts/mui';
import { store } from 'store';
import { ErrorFallback } from 'ui/error-fallback';

import { ErrorBoundary } from 'components/error-boundary';

import { App } from './app';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <HashRouter>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </HashRouter>
    </MuiProvider>
  </React.StrictMode>
);
