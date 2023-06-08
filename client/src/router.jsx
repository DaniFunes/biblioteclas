import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Bibliotecas from "./pages/Bibliotecas";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Admin from "./pages/admin";
import ProtectedRoute from './utils/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "/bibliotecas", element: <Bibliotecas /> },
      {
        path: "/login",
        element: (
          <ProtectedRoute role="notAuth">
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "/logout",
        element: (
          <ProtectedRoute role="isAuth">
            <Logout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute role="notAuth">
            <Signup />
          </ProtectedRoute>
        ),
      },
      { path: "/admin", element: (
        <ProtectedRoute role="notAuth">
          <Admin />
        </ProtectedRoute>
      ) },
    ],
  },
]);

export default router;
