import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Container from '@components/Container/Container';
import Navbar from '@components/Navbar/Navbar';
import Welcome from '@pages/Welcome'
import Project from '@pages/Project';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/projects',
    element: <Welcome />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Container>
      <RouterProvider router={ router }/>
    </Container>
  </React.StrictMode>,
)
