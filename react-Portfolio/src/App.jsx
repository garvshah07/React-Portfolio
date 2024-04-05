import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";

import Layout from "./components/Layout";
import About from "./components/AboutSection/About";

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
