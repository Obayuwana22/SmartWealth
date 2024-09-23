import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Blog,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Pricing,
  Services,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "services",
        element: <Services />,
        errorElement: <Error />,
      },
      {
        path: "pricing",
        element: <Pricing />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "blog",
        element: <Blog />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="mx-5 mt-2 lg:mx-10 lg:mt-7 2xl:desktop-screen 2xl:mx-auto ">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
