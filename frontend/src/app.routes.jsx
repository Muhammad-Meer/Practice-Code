import { createBrowserRouter } from "react-router-dom";
import Login from "./features/pages/Login";
import Register from "./features/pages/Register";
import Protected from "./features/auth/component/producted";
import Home from "./features/interview/Home";

export const Router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: (
      <Protected>
        <main>
          <Home/>
        </main>
      </Protected>
    ),
  },
]);