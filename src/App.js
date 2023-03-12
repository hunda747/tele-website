import logo from "./logo.svg";
import "./App.css";

import { useEffect, createContext, useContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/navbar/navbar";
import Blog from "./pages/Blog/blog";
import Home from "./pages/Home/home";
import Footer from "./component/layout/footer/footer";
import Innovation from "./pages/Products/Innovation/innovation";

import { ContentfulClient, ContentfulProvider } from "react-contentful";
import Esim from "./pages/Products/Esim/esim";

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
        <Route
          exact
          path="/product/innovation"
          element={<Innovation />}
        ></Route>
        <Route exact path="/product/esim" element={<Esim />}></Route>
        <Route exact path="/blog/:id" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
