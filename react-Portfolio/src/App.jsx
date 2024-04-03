import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/HeroSection/Hero";

import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Hero />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
