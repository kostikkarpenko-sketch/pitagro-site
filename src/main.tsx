import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/inter';
import '@fontsource/caveat/latin-500.css';
import './release.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
