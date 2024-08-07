import React from "react";
import FormContainer from "./components/container/formContainer";
import ListPeople from "./components/container/listPeople";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/assets/style/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormContainer />,
  },
  {
    path: "/list",
    element: <ListPeople />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
