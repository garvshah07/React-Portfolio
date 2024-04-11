import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection/About";
import Project from "./components/PojectSection/Project";
import Contact from "./components/ContactSection/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="m-auto max-w-7xl  ">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
