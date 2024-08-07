import React from "react";
import FormContainer from "./components/container/formContainer";
import ListPeople from "./components/container/listPeople";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/assets/style/App.css";
import { Provider } from "react-redux";
import { peopleStore } from "./store/store";
import Navbar from "./components/container/navbar";

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
  return (
    <Provider store={peopleStore}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
