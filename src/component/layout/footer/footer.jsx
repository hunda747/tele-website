import React from "react";
import "./footer.scss";

import {
  Phone,
  FmdGood,
  Sms,
  Email,
  Telegram,
  Facebook,
  Twitter,
  Shop,
  Search,
} from "@mui/icons-material";

export default function Footer(params) {
  const lists = [
    {
      name: "ONLINE SERVICES",
      list: ["telegebeya", "Online Service Request", "Ethio ecare Service"],
    },
    {
      name: "PERSONAL",
      list: [
        "Getting Started",
        "telecloud",
        "Recurring Mobile Package",
        "Long Validity Package",
        "Mobile Package",
        "Fixed BB Internet",
        "Airtime Top Up",
        "Airtime and Package Credit",
        "VAS",
        "CRBT",
        "Phones & Devices",
        "Women’s device offer",
      ],
    },
    {
      name: "BUSINESS",
      list: [
        "telecloud",
        "eSIM",
        "Fixed Broadband",
        "Business Mobile Packages",
        "Mobile Packages",
        "Mobile Group Offering Package",
        "VPN",
        "Corporate CRBT",
        "DNS & Web Hosting",
        "Mobile Conference Call",
        "Wavelength Service",
      ],
    },
    {
      name: "INTERNATIONAL",
      list: [
        "Call & SMS",
        "Roaming Service",
        "Airtime Top Up",
        "Data Service",
        "VAS",
        "Wholesale Business",
        "International Visitors Plan",
      ],
    },
    {
      name: "CUSTOMER SERVICE",
      list: [
        "Ashamtele",
        "Shop Locations",
        "Bill Payment Options",
        "Bill Compliant",
        "Ethio telecom App Store",
        "ISupplier Portal",
        "Ethio telecom – Local Speed Test",
        "International – Ookla Speed Test",
        "Contact Us",
        "FAQ",
      ],
    },
    {
      name: "COMPANY",
      list: [
        "Profile",
        "History",
        "Gallery",
        "CSR",
        "Fraud Alerts",
        "Supplier Portal",
        "Partner's Portal",
        "Vacancy",
        "Tender",
        "Press Release",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="">
        <div className="top">
          {lists.map((list, index) => {
            return (
              <div className="section">
                <h3>{list.name}</h3>
                <ul>
                  {list.list.map((li, index) => {
                    return <li>{li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="middle">
          <div className="left">
            <div className="social">
              <div className="icon">
                <Phone />
              </div>
              <span>+251-994/+251-980</span>
            </div>
            <div className="social">
              <div className="icon">
                <Email />
              </div>
              <span>994@ethionet.et</span>
            </div>
            <div className="social">
              <div className="icon">
                {" "}
                <Sms />{" "}
              </div>
              <span>8994</span>
            </div>{" "}
          </div>
          <div className="right">
            <div className="text">Follow Us:</div>
            <div className="media">
              <div>
                <Facebook />
              </div>
              <div>
                <Twitter />
              </div>
              <div>
                <Telegram />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright 1894 - 2023 © Ethio telecom. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
