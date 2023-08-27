import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "@routes";
import { Header } from "@components/organisms";

const router = createBrowserRouter(ROUTES);

const App = () => {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />;
    </Fragment>
  );
};

export default App;
