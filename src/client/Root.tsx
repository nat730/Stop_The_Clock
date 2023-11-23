import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import Game from './components/pages/Game'
import Results from './components/pages/Results'

export default function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
    {
      path: "/results",
      element: <Results />,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}