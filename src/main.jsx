import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Resume from "./pages/Resume/Resume.jsx";

//gives URL paths for each component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // error: <NoMatch />, //make custom 404 page if you want
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
