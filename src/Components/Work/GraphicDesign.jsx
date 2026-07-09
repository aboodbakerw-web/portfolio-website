import React, { useState } from "react";

import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.jpg";
import work3 from "../../assets/images/work3.jpg";
import work4 from "../../assets/images/work4.jpg";
import work5 from "../../assets/images/work5.jpg";
import work6 from "../../assets/images/work6.jpg";

export const GraphicDesign = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const images = [work1, work2, work3, work4, work5, work6];

  return (
    <>
      <div className="row g-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <div className="col-md-6" key={index}>
            <div className="work-card">
              <img src={img} alt={`work ${index + 1}`} />

            <div className="work-overlay">
  <div className="work-overlay-content">
    <span className="work-category">Creative Project</span>

    <h3>WORK 0{index + 1}</h3>

    <p>
      Modern visual design with clean layout, bold colors, and creative direction.
    </p>

    <div className="work-tags">
      <span>Branding</span>
      <span>UI Design</span>
    </div>
  </div>

  <div className="work-icons">
    <span>
      <i className="fa-solid fa-share-nodes"></i>
    </span>

    <span>
      <i className="fa-solid fa-eye"></i> 100
    </span>

    <span>
      <i className="fa-regular fa-heart"></i> 49
    </span>
  </div>
</div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <button
          className="btn btn-primary mt-4"
          onClick={() => setVisibleCount(6)}
        >
          Show More
        </button>
      )}
    </>
  );
};