import { createBrowserRouter } from 'react-router-dom';
import Login from './features/pages/Login';
import Register from './features/pages/Register';
import App from './App'

export const Router = createBrowserRouter([

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);