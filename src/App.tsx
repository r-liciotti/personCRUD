import React from "react";
import FormContainer from "./components/container/formContainer";
import ListPeople from "./components/container/listPeople";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/assets/style/App.css";

import Navbar from "./components/container/navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FormContainer />} />
        <Route path="/list" element={<ListPeople />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
