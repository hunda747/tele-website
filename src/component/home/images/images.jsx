import React from "react";
import "./images.scss";

import useSlider from "../../../hooks/useSliderImage";

import img1 from "../../../assets/photo/box1.jpg";
import img2 from "../../../assets/photo/box2.jpg";
import img3 from "../../../assets/photo/box3.jpg";
import img4 from "../../../assets/photo/box4.png";

export default function Images(params) {
  const [slide, setSlides] = React.useState([]);
  const { getSlider } = useSlider();

  React.useEffect(() => {
    // getSlider();
    getSlider().then((response) => response && setSlides(response));
  }, []);

  return (
    <div className="community">
      <div className="header">
        <h2 className="headerTitle">
          CORPORATE <span>SOCIAL</span> RESPONSIBILITY
        </h2>
        <p>
          At the heart of our company's business is our commitment to Corporate
          Social Responsibility. Our CSR interventions have a positive impact on
          society, environment, and all stakeholders. Our CSR projects focus on
          strengthening communities by targeting the fundamental drivers of
          long-term development such as education, health, environmental
          protection, greening and beautification.
        </p>
      </div>
      <div class="container">
        {slide?.sanitizedEntries?.map((slide) => {
          return (
            <div class="box">
              <img src={slide.image} />
              <div className="info">
                <p className="cause">{slide?.description}</p>
                <p className="money">{slide?.title}</p>
              </div>
              {/* <span>{slide.title}</span> */}
            </div>
          );
        })}
        {/* <div class="box">
          <img src={img2} title={"help someone"} />
          <span>Image</span>
        </div>
        <div class="box">
          <img src={img3} />
          <span>Hover</span>
        </div>
        <div class="box">
          <img src={img4} />
          <span>Effect</span>
        </div> */}
      </div>
    </div>
  );
}
