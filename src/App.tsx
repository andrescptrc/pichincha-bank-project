import { Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Header } from '@organisms'
import ReactQuery from '@wrappers/ReactQuery'
import { ROUTES } from '@routes/routes'

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
