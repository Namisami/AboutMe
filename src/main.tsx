import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from '@pages/Index'
import Project from '@pages/Project';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: 'projects/:projectId',
    element: <Project />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
