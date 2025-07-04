import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>,

)
