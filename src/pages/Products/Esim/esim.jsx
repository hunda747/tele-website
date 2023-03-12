import React from "react";
import "./esim.scss";

import photo from "../../../assets/photo/esim.webp";
import photoi from "../../../assets/photo/iPhone.webp";
import photos from "../../../assets/photo/samsung.webp";
import photog from "../../../assets/photo/Google.webp";

export default function Esim(params) {
  const lists = [
    {
      title: "Samsung",
      image: photos,
      list: [
        "Samsung Galaxy S20",
        "Samsung Galaxy S20+",
        "Samsung Galaxy S20 Ultra",
        "Samsung Galaxy S21",
        "Samsung Galaxy S21+ 5G",
        "Samsung Galaxy S21+ Ultra 5G",
        "Samsung Galaxy S22",
        "Samsung Galaxy S22+",
        "Samsung Galaxy Note 20",
        "Samsung Galaxy Note 20 Ultra 5G ",
        "Samsung Galaxy Fold",
        "Samsung Galaxy Z Fold2 5G",
        "Samsung Galaxy Z Fold3 5G",
        "Samsung Galaxy Z Flip",
      ],
    },
    {
      title: "iPhone",
      image: photoi,
      list: [
        "iPhone XR",
        "iPhone XS",
        "iPhone XS Max",
        "iPhone 11",
        "iPhone 11 Pro",
        "iPhone SE 2 (2020)",
        "iPhone 12",
        "iPhone 12 Mini",
        "iPhone 12 Pro",
        "iPhone 12 Pro Max",
        "iPhone 13",
        "iPhone 13 Mini",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone SE 3 (2022)",
      ],
    },
    {
      title: "Google",
      image: photog,
      list: [
        "Google Pixel 3a XL",
        "Google Pixel 4",
        "Google Pixel 4a",
        "Google Pixel 4 XL",
        "Google Pixel 5",
        "Google Pixel 5a",
        "Google Pixel 6",
        "Google Pixel 6 Pro.",
        "Google Pixel 3 XL",
        "Google Pixel 2 XL",
      ],
    },
  ];

  return (
    <div className="esim">
      <div className="header">
        <img src={photo} alt="" />
        <h3>eSIM </h3>
        {/* <p>Empower our Nation’s Technology-based Startups!</p> */}
      </div>
      <div className="main">
        <div className="wrapper">
          <div className="info">
            <h4>Benefits</h4>
            <ul>
              <li>Simple and efficient connection</li>
              <li>
                Allows to have more than one phone number (SIMs) in a device.
              </li>
              <li>
                No need to manage several SIM cards. Devices/operators can be
                switched with ease.
              </li>
              <li>
                It can connect laptop, smart watches, tablets with ease & also
                best solution to provide fast connection to manufacturers,
                retailers, transportation & logistics service providers and to
                be used to connect other digital devices.
              </li>
            </ul>
          </div>
          <div className="phones">
            {lists.map((list) => {
              return (
                <div className="phone">
                  <h3>{list.title}</h3>
                  <img src={list.image} alt="phone" />
                  <ul>
                    {list.list.map((lis) => {
                      return <li>{lis}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="main">
        <div className="wrapper">
          {lists.map((list) => {
            return (
              <div className="info">
                <h4>{list.title}</h4>
                <ul>
                  {list.list.map((lis) => {
                    return <li>{lis}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
