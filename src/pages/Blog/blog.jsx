import React, { useEffect, useState } from "react";
import "./blog.scss";
import { useNavigate, useParams } from "react-router-dom";

import useContentful from "../../hooks/useContentful";
import ShareLinks from "../../component/Share/share";

export default function Blog(params) {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs } = useContentful();
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    getBlogs().then((response) => response && setBlogs(response));
  }, []);

  console.log(blogs);

  const len = 150;
  const showLess = (desc) => {
    return desc ? desc.substring(0, len) + "...." : "";
  };

  return (
    <div className="blogPage">
      <div className="wrapper">
        <div className="left">
          <h3>Recent Posts</h3>
          <div className="stories">
            {blogs?.sanitizedEntries?.map((sto, index) => {
              const date = new Date(sto.date);
              return (
                <div
                  className="story"
                  onClick={() => {
                    navigate(`/blog/${index}`);
                  }}
                >
                  <div className="left">
                    <img src={sto.image} alt="" />
                  </div>
                  <div className="right">
                    <p className="title">{sto.title}</p>
                    <p className="date">{date.toDateString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          {!blogs?.sanitizedEntries
            ? ""
            : blogs?.sanitizedEntries.slice(id, id + 1).map((sto) => {
                const date = new Date(sto.date);
                // console.log(date);
                // console.log(date.toDateString());
                return (
                  <div className="card">
                    <img src={sto.image} alt="" />
                    <h3>{sto.title}</h3>
                    <p className="date">{date.toDateString()}</p>
                    {/* <p className="sto">{sto.story}</p> */}
                    <p>{sto?.description}</p>
                  </div>
                );
              })}
          <div className="share">
            <h3>Share: </h3>
            <ShareLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
