import logo from "./logo.svg";
import "./App.css";

import { useEffect, createContext, useContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/navbar/navbar";

import Home from "./pages/Home/home";
import Footer from "./component/layout/footer/footer";

import { ContentfulClient, ContentfulProvider } from "react-contentful";

const contentfulClient = new ContentfulClient({
  accessToken: "JLKjHBS5RUxZwemf8yR0ktv1V68WaMGGuZ31iWLRoaU",
  space: "48vuKCHQ3vJMYoHa7cAmsv",
});

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
