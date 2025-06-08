import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createBowserRouter, RouterProvider } from 'bowser-router'


const router = createBowserRouter([
  {
    path: '/',
    element: <App/>,

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
