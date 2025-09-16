import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";

import { lazy } from "react";
import AuthenticationPage from "./components/Authentication";
import { action as authenticaionAction } from "./components/Authentication";
import { loadEvents } from "./components/Table";
import { eventLoaded, action as manipulateAction } from "./components/Form";
function App() {
  const Settings = lazy(() => import("./components/Settings"));
  const NewItem = lazy(() => import("./components/NewItem"));
  const EditItem = lazy(() => import("./components/EditItem"));
  const router = createBrowserRouter([
    {
      index: true,
      element: <AuthenticationPage />,
      action: authenticaionAction,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
      loader: loadEvents,

      children: [
        { path: "new", element: <NewItem />, action: manipulateAction },
        {
          path: ":id/edit",
          element: <EditItem />,
          action: manipulateAction,
          loader: eventLoaded,
        },
      ],
    },
    { path: "/setting", element: <Settings /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
