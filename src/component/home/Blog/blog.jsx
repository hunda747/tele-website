import React, { useState, useEffect } from "react";
import "./blog.scss";

import blog1 from "../../../assets/photo/blog.webp";
import blog2 from "../../../assets/photo/blog2.webp";

import useContentful from "../../../hooks/useContentful";
import { ContentfulClient, ContentfulProvider } from "react-contentful";

export default function Blog(params) {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContentful();

  useEffect(() => {
    getBlogs().then((response) => response && setBlogs(response));
    // getAuthors().then((response) => response && setAuthors(response));
  }, []);
  const story = [
    {
      id: 0,
      title:
        "Ethio Telecom Intends To Sign A One-Time Contract With The Finally Awarded Bidder(S).  ",
      story:
        "Ethio telecom intends to sign a One-time contract with the finally awarded bidder(s). Hence, ethio telecom invites all interested and eligible bidders by this National Competitive Bid (NCB) for procurement of “Building Construction works in Awash 7” with RFQ No. 4238209. The Tender remains floating from 08-MAR- 2023 up to 07-Apr-2023. Bid documents can be obtained from ethio telecom’s Semera Regional Office, Room No. 205 during office hours (Monday to Friday) upon payment of a non-refundable fee of Birr 100.00 (Birr One Hundred only).",
      image: blog1,
    },
    {
      id: 1,
      title:
        "Ethio Telecom Celebrates International Women’s Day Under The Theme “Digital Inclusion For Gender Equality”!",
      story:
        "It’s noted that our company has been committed to discharging its corporate social responsibilities particularly in ensuring women’s multifaceted participation, empowering and enabling them to actively participate in a wide range of societal affairs over its long and persistent years of service. The company has celebrated the International Women’s Day /March 8 which is celebrated for 112 years at international level and for 47th times at national level under the theme Digital Inclusion for Gender Equality.",
      image: blog2,
    },
    {
      id: 2,
      title: "Using Internet for Hobby & Entertainment",
      story:
        "Molestiae eos dolore temporibus sed, architecto laboriosam, doloremque dignissimos quasi blanditiis accusantium incidunt illum doloribus? Minus facilis quam dolorum minima ipsam earum temporibus perspiciatis non nihil dolor molestiae facere in eligendi esse itaque cum, neque asperiores nulla suscipit!",
      image: blog1,
    },
  ];
  const len = 150;
  const showLess = (desc) => {
    return desc ? desc.substring(0, len) + "...." : "";
  };

  // console.log(blogs);
  // console.log(blogs?.sanitizedEntries);

  return (
    <div className="blog">
      <div className="wrapper">
        <h2 className="headerTitle">
          Latest <span>News</span>{" "}
        </h2>
        <div className="cards">
          <div className="menu">
            {blogs?.sanitizedEntries?.map((sto) => {
              const date = new Date(sto.date);
              return (
                <div className="story">
                  <p className="title">{sto.title}</p>
                  <p className="date">{date.toDateString()}</p>
                </div>
              );
            })}
          </div>
          {!blogs?.sanitizedEntries
            ? ""
            : blogs?.sanitizedEntries.slice(0, 2).map((sto) => {
                const date = new Date(sto.date);
                // console.log(date);
                console.log(date.toDateString());
                return (
                  <div className="card">
                    <img src={sto.image} alt="" />
                    <h3>{sto.title}</h3>
                    <p className="date">{date.toDateString()}</p>
                    {/* <p className="sto">{sto.story}</p> */}
                    <p>
                      {sto.description?.length < len
                        ? sto.description
                        : showLess(sto.description)}
                    </p>
                    <a href="#">Read More</a>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
