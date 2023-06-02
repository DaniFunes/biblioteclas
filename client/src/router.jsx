import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import ErrorPage from "./pages/errorPage";
import Bibliotecas from "./pages/Bibliotecas";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "/bibliotecas", element: <Bibliotecas /> },
      { path: "/test", element: <Test />},
    ],
  },
]);

export default router;
