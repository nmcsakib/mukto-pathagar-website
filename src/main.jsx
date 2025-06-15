import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import router from './Routes/Router.jsx';
import { TbLoader3 } from 'react-icons/tb';

createRoot(document.getElementById('root')).render(

    <React.Suspense fallback={   <div className='w-screen h-screen flex justify-center items-center'>
    
      <TbLoader3 className="text-[2.8rem] animate-spin text-[#3B9DF8]" />
    </div>}>
        <RouterProvider router={router} />
    </React.Suspense>

)
