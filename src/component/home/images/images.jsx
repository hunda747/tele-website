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
    <div>
      <div class="container">
        {slide?.sanitizedEntries?.map((slide) => {
          return (
            <div class="box">
              <img src={slide.image} />
              {/* <div className="info">
                <p className="money">45M</p>
                <p className="cause">For cancer</p>
              </div> */}
              <span>{slide.title}</span>
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
