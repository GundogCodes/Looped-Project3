// index.js
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
      <AppRouter />
  </StrictMode>
);