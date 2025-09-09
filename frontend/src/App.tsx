import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";

import { lazy } from "react";

function App() {
  const Settings = lazy(() => import("./components/Settings"));
  const NewItem = lazy(() => import("./components/NewItem"));
  const EditItem = lazy(() => import("./components/EditItem"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "new", element: <NewItem /> },
        { path: "edit", element: <EditItem /> },
      ],
    },
    { path: "/setting", element: <Settings /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div id="modal"></div>
    </>
  );
}

export default App;
