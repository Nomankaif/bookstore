import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure the path is correct
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // If you have global styles
import AuthProvider from './context/AuthProvider';
import { BookProvider } from './context/BookProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
 <BookProvider>

  <div  className="dark:bg-slate-900 dark:text-white">

    <App />
  </div>
 </BookProvider>
  </AuthProvider>
  </BrowserRouter>
);

