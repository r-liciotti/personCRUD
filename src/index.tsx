import React from "react";
import ReactDOM from "react-dom/client";
import "./components/assets/style/index.css";

import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/container/navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
