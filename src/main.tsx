import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/ThemeProvider.tsx";
import App from "./App.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { inject } from "@vercel/analytics";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

inject();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <SpeedInsights />
    </ThemeProvider>
  </React.StrictMode>,
);
