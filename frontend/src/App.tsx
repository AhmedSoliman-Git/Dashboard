import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

import { lazy } from "react";
import AuthenticationPage from "./components/Authentication";
import { action as authenticaionAction } from "./components/Authentication";
import { action as DeleteAction, loadEvents } from "./components/Table";
import { eventLoaded } from "./components/Form";
import { action as manipulateAction } from "./components/Form";
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
      action: DeleteAction,
      children: [
        { path: "new", element: <NewItem />, action: manipulateAction },
        {
          path: ":id/Edit",
          element: <EditItem />,
          action: manipulateAction,
          loader: eventLoaded,
        },
        {
          path: ":id",
          action: DeleteAction,
        },
      ],
    },
    { path: "/settings", element: <Settings /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
