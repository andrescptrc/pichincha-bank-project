import CreatePage from '@pages/CreatePage'
import EditPage from '@pages/EditPage'
import HomePage from '@pages/HomePage'

export const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products/create',
    element: <CreatePage />,
  },
  {
    path: '/products/edit/:id',
    element: <EditPage />,
  },
]
