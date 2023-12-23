import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MuiProvider } from 'layouts/mui';
import { ErrorFallback } from 'ui/ErrorFallback';

import { ErrorBoundary } from 'components/ErrorBoundary';

import { App } from './app';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <HashRouter>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <App />
        </ErrorBoundary>
      </HashRouter>
    </MuiProvider>
  </React.StrictMode>
);
