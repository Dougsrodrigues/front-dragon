import './modules/app/styles/reset.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './modules/app/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
