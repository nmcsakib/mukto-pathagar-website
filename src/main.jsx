import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ScrollToTop from './ScrollTop.jsx';
import router from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(

    <React.Suspense fallback="Loading...">
        <RouterProvider router={router} />
    </React.Suspense>

)
