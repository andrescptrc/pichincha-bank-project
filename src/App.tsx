import { Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@routes'
import { Header } from '@organisms'
import { ReactQuery } from '@wrappers'

const router = createBrowserRouter(ROUTES)

const App = () => {
  return (
    <Fragment>
      <ReactQuery>
        <Header />
        <RouterProvider router={router} />;
      </ReactQuery>
    </Fragment>
  )
}

export default App
