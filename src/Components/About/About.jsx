import React from 'react'

export const About = () => {
  return (
    <> 
      <section className="about-section min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <span className="section-small-title">ABOUT US</span>

            <h2 className="section-title mt-4 mb-5">WHO AM I?</h2>

            <p className="about-text mb-4">
              <strong>Hi Im Jackson Ford</strong> On her way she met a copy.
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times and everything that was
              left from its origin would be the word (and) and the Little Blind
              Text should turn around and return to its own, safe country.
            </p>

            <p className="about-text mb-5">
              Even the all-powerful Pointing has no control about the blind texts
              it is an almost unorthographic life One day however a small line of
              blind text by the name of Lorem Ipsum decided to leave for the far
              World of Grammar.
            </p>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="service-card shadow-lg bg-white p-4 border-blue">
                  <i className="fa-regular fa-lightbulb service-icon text-primary mb-4"></i>
                  <h3 className="service-title">Graphic Design</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="service-card shadow-lg bg-white p-4 border-red">
                  <i className="fa-solid fa-earth-americas service-icon text-danger mb-4"></i>
                  <h3 className="service-title">Web Design</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="service-card shadow-lg bg-white p-4 border-yellow">
                  <i className="fa-solid fa-database service-icon text-warning mb-4"></i>
                  <h3 className="service-title">Software</h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="service-card shadow-lg bg-white p-4 border-purple">
                  <i className="fa-solid fa-mobile-screen-button service-icon text-purple mb-4"></i>
                  <h3 className="service-title">Application</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>

  )
}
