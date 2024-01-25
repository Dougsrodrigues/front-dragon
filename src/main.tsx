import './modules/app/styles/reset.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Providers } from './modules/app/infra/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);
