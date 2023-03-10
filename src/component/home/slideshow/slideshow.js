import React from "react";
import "./slideshow.css";

import home1 from "../../../assets/photo/slide3.webp";
import home2 from "../../../assets/photo/slide4.webp";

import {
  NavigateBeforeRounded,
  NavigateNextRounded,
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from "@mui/icons-material";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 5000;

const slideData = [
  {
    photo: home1,
    id: 454,
    title: "Ethio Telecome",
    message: "ethio telecom",
  },
  {
    photo: home2,
    id: 452,
    title: "Ethio Telecome",
    message: "ethio telecom",
  },
  // {
  //   photo: borena7,
  //   title: "Green legacy",
  //   message:
  //     "ourself is to lose yourself in the servic The best way to find yourself.",
  // },
];

export const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => handleNext(), delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleNext = () => {
    if (index + 1 < slideData.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (index - 1 < 0) {
      setIndex(slideData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow" id="heroSection">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          height: "100%",
        }}
      >
        {slideData.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.photo} />
            <div className="text">
              <h2>{slide.title}</h2>
              <p>{slide.message}</p>
              {/* <button>Donate</button> */}
              {/* <a href={`/campaign/${slide.id}`}>See campaign</a>
              <div className="arrows">
                <div className="arrow" onClick={handlePrevious}>
                  <ArrowCircleLeftOutlined className="icon" />
                </div>
                <div className="arrow" onClick={handleNext}>
                  <ArrowCircleRightOutlined className="icon" />
                </div>
              </div> */}
            </div>
          </div>
        ))}
        {/* {slideData.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))} */}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};
