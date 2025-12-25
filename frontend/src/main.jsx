import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router_Router from './routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(

  <HelmetProvider>
    <RouterProvider router={Router_Router}>
     
    </RouterProvider>
  </HelmetProvider>
    
  
)
