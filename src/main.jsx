import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
