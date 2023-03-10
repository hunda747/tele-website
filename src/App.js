import logo from "./logo.svg";
import "./App.css";

import { useEffect, createContext, useContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/navbar/navbar";

import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
