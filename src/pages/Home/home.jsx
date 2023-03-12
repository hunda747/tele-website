import React, { useEffect, useState } from "react";
import "./home.scss";

import useContentful from "../../hooks/useContentful";
import useTestimonial from "../../hooks/useTestimonial";
import useStat from "../../hooks/useStat";

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
import { useNavigate } from "react-router-dom";
// import Tweets from "../../component/home/Tweets/tweets";

const client = new ContentfulClient({
  accessToken: "JLKjHBS5RUxZwemf8yR0ktv1V68WaMGGuZ31iWLRoaU",
  space: "o6quhc28ezlz",
});

export default function Home(params) {
  const products = [
    {
      icon: <Lightbulb fontSize="large" />,
      name: "Innovation",
      link: "/product/innovation",
    },
    {
      icon: <SimCard fontSize="large" />,
      name: "eSim",
      link: "/product/esim",
    },
    {
      icon: <AccountBox fontSize="large" />,
      name: "IAT",
      link: "/",
    },
    {
      icon: <Storage fontSize="large" />,
      name: "Ashamtele",
      link: "/",
    },
    {
      icon: <ShoppingCart fontSize="large" />,
      name: "Telegebeya",
      link: "/",
    },
    {
      icon: <Warning fontSize="large" />,
      name: "Fraud Alert",
      link: "/",
    },
  ];
  const [count, setCount] = useState(0);
  const [stat, setStat] = useState([]);
  const [testimony, setTestimony] = useState([]);
  const { getBlogs } = useContentful();
  const { getTestimonial } = useTestimonial();
  const { getStats } = useStat();

  const navigate = useNavigate();

  useEffect(() => {
    getStats().then((response) => response && setStat(response));
    getTestimonial().then((response) => response && setTestimony(response));
    // getAuthors().then((response) => response && setAuthors(response));
  }, []);

  console.log(stat.sanitizedEntries);
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
            const link = pro.link;
            return (
              <div
                className="card"
                onClick={() => {
                  navigate(`${link}`);
                }}
              >
                <div className="icon">{pro.icon}</div>
                <span>{pro.name}</span>
              </div>
            );
          })}
        </div>
        {/* <div className="service">
          <div className="">
            <h2 className="headerTitle">
              Product <span>&</span> Services{" "}
            </h2>
            <div className="images">
              <div>
                <img src={service1} alt="" />
              </div>
              <div>
                <img src={service2} alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Blog />
      <Images />
      <div className="statistic">
        <h2 className="headerTitle">Our statistic</h2>
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
            <h2 className="headerTitle">TESTIMONIAL</h2>
            <p className="colortext">What they say.</p>
          </div>
          <div className="testimonials">
            {testimony?.sanitizedEntries?.slice(0, 3).map((test) => {
              return (
                <div className="testimony">
                  <p className="main">{test.description}</p>
                  <div className="name">
                    <img src={test.image} alt="H" />
                    <h3 className="name colortext">{test.author}</h3>
                  </div>
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
