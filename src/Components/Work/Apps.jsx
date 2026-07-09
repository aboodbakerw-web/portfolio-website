import React, { useState } from "react";

import work1 from "../../assets/images/work14.jpg";
import work2 from "../../assets/images/work15.jpg";
import work3 from "../../assets/images/work16.png";
import work4 from "../../assets/images/work4.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";

export const Apps = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const images = [work1, work2, work3, work4, work5, work6];

  return (
    <>
      <div className="row g-4 work-gallery-animate">
        {images.slice(0, visibleCount).map((img, index) => (
          <div className="col-md-6 work-card-wrap" key={index}>
            <div className="work-card">
              <img src={img} alt={`app ${index + 1}`} />

              <div className="work-overlay">
  <div className="work-overlay-content">
    <span className="work-category">Apps</span>

    <h3>APP 0{index + 1}</h3>

    <p>
      Modern app interface with clean layout and smooth user experience.
    </p>
  </div>

  <div className="work-icons">
    <span><i className="fa-solid fa-share-nodes"></i></span>
    <span><i className="fa-solid fa-eye"></i> 100</span>
    <span><i className="fa-regular fa-heart"></i> 49</span>
  </div>
</div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <button className="btn btn-primary mt-4" onClick={() => setVisibleCount(6)}>
          Show More
        </button>
      )}
    </>
  );
};