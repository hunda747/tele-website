import React, { useEffect, useState } from "react";
import "./home.scss";

import useContentful from "../../hooks/useContentful";

import { Slideshow } from "../../component/home/slideshow/slideshow";
import Blog from "../../component/home/Blog/blog";
// import contentful = require('contentful');

import {
  Lightbulb,
  Storage,
  SimCard,
  Warning,
  ShoppingCart,
  AccountBox,
} from "@mui/icons-material";

import service1 from "../../assets/photo/service1.webp";
import service2 from "../../assets/photo/service2.webp";
import { ContentfulClient, ContentfulProvider } from "react-contentful";
import Images from "../../component/home/images/images";
import Carousel from "../../component/home/carousel/carousel";
// import Tweets from "../../component/home/Tweets/tweets";

const client = new ContentfulClient({
  accessToken: "JLKjHBS5RUxZwemf8yR0ktv1V68WaMGGuZ31iWLRoaU",
  space: "o6quhc28ezlz",
});

export default function Home(params) {
  const products = [
    {
      icon: <Lightbulb />,
      name: "Ethiotel Innovation",
    },
    {
      icon: <SimCard />,
      name: "eSim",
    },
    {
      icon: <AccountBox />,
      name: "IAT",
    },
    {
      icon: <Storage />,
      name: "Ashamtele",
    },
    {
      icon: <ShoppingCart />,
      name: "telegebeya",
    },
    {
      icon: <Warning />,
      name: "Fraud Alert",
    },
  ];
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContentful();

  useEffect(() => {
    getBlogs().then((response) => response && setBlogs(response));
    // getAuthors().then((response) => response && setAuthors(response));
  }, []);

  // console.log(blogs);
  const test = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio corrupti sunt doloremque, laboriosam illo nemo earum itaque sed beatae blanditiis magni quos? Similique, aperiam nisi amet dolorum accusantium necessitatibus.",
    "Sit distinctio corrupti sunt doloremque, laboriosam illo nemo earum itaque sed beatae blanditiis magni quos? Similique, aperiam nisi amet dolorum accusantium necessitatibus.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio corrupti sunt doloremque Similique, aperiam nisi amet dolorum accusantium necessitatibus.",
    " Similique, aperiam nisi amet dolorum accusantium necessitatibus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio corrupti sunt doloremque?",
  ];

  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setCount(count);
      }, 2000);
    }
  };

  useEffect(() => {
    counter(0, 100);
  }, []);

  return (
    <div className="home">
      <Slideshow />
      <div className="">
        <div className="products">
          {products?.map((pro, index) => {
            return (
              <div className="card">
                <div className="icon">{pro.icon}</div>
                <span>{pro.name}</span>
              </div>
            );
          })}
        </div>
        <div className="service">
          <div className="">
            <h2>Product & Services</h2>
            <div className="images">
              <div>
                <img src={service1} alt="" />
              </div>
              <div>
                <img src={service2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Images />
      <Blog />
      <div className="statistic">
        <h2 className="headerTitle">
          Our <span>statistic</span>
        </h2>
        <div className="stats">
          <div className="stat">
            <h3>
              {count}
              <span className="color">M</span>
            </h3>
            <p>Mobile user</p>
          </div>
          <div className="stat">
            <h3>
              200.7 <span className="color">M</span>
            </h3>
            <p>Mobile user</p>
          </div>
          <div className="stat">
            <h3>
              2.7 <span className="color">M</span>
            </h3>
            <p>Mobile user</p>
          </div>
          <div className="stat">
            <h3>
              22.7 <span className="color">M</span>
            </h3>
            <p>Mobile user</p>
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
      <div className="testimonial">
        <div className="wrapper">
          <div className="header">
            <h2>TESTIMONIAL</h2>
            <p className="colortext">What they say.</p>
          </div>
          <div className="testimonials">
            {test.slice(0, 3).map((test) => {
              return (
                <div className="testimony">
                  <p className="main">{test}</p>
                  <h3 className="name colortext">Fasic K</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Tweets /> */}
    </div>
  );
}
