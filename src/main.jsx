import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
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
      {
        path: 'about',
        element: <AboutMePage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ],
  },
]);

// rendering the router
ReactDOM.hydrateRoot(document.getElementById("root"), (
  <RouterProvider router={router} />
));