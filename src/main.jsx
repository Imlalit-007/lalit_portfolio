import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "./components/Loader/Loader";

const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/skills",
        element: (
          <Suspense fallback={<Loader />}>
            <Skills />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
