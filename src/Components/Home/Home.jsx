import React, { useEffect, useState } from "react";

import hero1 from "../../assets/images/img_bg_1-PzvG2r05.jpg";
import hero2 from "../../assets/images/img_bg_2-DzCs5o-0.jpg";

export const Home = () => {
  const slides = [
    {
      image: hero1,
      title: (
        <>
          Hi! <br />
          Im Jackson
        </>
      ),
      buttonText: "DOWNLOAD CV",
      icon: "fa-solid fa-download",
    },
    {
      image: hero2,
      title: (
        <>
          I am <br />
          a Designer
        </>
      ),
      buttonText: "VIEW PORTFOLIO",
      icon: "fa-solid fa-briefcase",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const slider = setInterval(() => {
      setShowText(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setShowText(true);
      }, 500);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="home-section min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt=""
          className={`home-bg-img ${index === currentSlide ? "active" : ""}`}
        />
      ))}

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-6 offset-lg-2">
            <div className={`home-text ${showText ? "show" : "hide"}`}>
              <h1 className="textColor">
                {slides[currentSlide].title}
              </h1>

              <p className="home-paragraph mb-4">
                100% html5 bootstrap templates Made <br />
                By <a href="#" className="animated-link">Colorlib.com</a>
              </p>

              <button className="btn btn-outline-dark rounded-0 px-4 py-2 home-btn">
                {slides[currentSlide].buttonText}{" "}
                <i className={slides[currentSlide].icon}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};