import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./app.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import HomePage from "./pages/homePage.jsx";

// router
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

// rendering the router
ReactDOM.hydrateRoot(document.getElementById("root"), (
  <RouterProvider router={router} />
));