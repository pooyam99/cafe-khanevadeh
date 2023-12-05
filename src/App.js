import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Main, Login } from './components/roots';
import { Home, Menu, Reserve, Contact } from './components/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {index: true, element: <Home />},
      {path: 'menu', element: <Menu />},
      {path: 'reserve', element: <Reserve />},
      {path: 'contact', element: <Contact />},
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
