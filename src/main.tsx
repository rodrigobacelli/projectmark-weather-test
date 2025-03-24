/* istanbul ignore file */

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Providers } from './providers';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
