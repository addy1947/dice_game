import React from 'react'
import First from './component/First'
import Second from './component/Second'
import Layout from './component/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <First />,
        },
        {
          path: '/play',
          element: <Second />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
