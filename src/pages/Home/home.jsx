import React from "react";
import "./home.scss";
import { Slideshow } from "../../component/home/slideshow/slideshow";

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

  // client.getEntry("<entry_id>").then(function (entry) {
  //   // logs the entry metadata
  //   console.log(entry.sys);

  //   // logs the field with ID title
  //   console.log(entry.fields.productName);
  // });

  client.getEntries({ "sys.id": "48vuKCHQ3vJMYoHa7cAmsv" }).then((response) => {
    console.log(response.items[0]);
    console.log(response);
    // console.log(response.items[0].fields.image.fields.file.url);
    // console.log(response.items[0].fields.image.fields.file.url);
  });

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
    </div>
  );
}
