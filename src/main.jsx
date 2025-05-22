import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ScrollToTop from './ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ScrollToTop/>
    <React.Suspense fallback="Loading...">
    <App />
    </React.Suspense>
    </BrowserRouter>
)
