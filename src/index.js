import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContext';
import LanguageContextProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

