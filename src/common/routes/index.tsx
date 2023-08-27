import CreatePage from '@pages/CreatePage'
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
]
