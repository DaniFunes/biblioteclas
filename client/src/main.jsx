import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth.jsx";

import { RouterProvider } from "react-router-dom";
import router from './router'

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
);
