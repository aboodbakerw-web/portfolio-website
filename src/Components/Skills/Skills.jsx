import React from 'react'

export const Skills = () => {
  return (
    <>  
  <section className="skills-section min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <span className="section-small-title">MY SPECIALTY</span>

            <h2 className="section-title mt-4 mb-5">MY SKILLS</h2>

            <p className="skills-text mb-5">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way.
            </p>

            <div className="row g-5">
              <div className="col-lg-6">
                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>Photoshop</h4>
                    <span className="skill-blue">75%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-blue" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>HTML5</h4>
                    <span className="skill-yellow">85%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-yellow" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>WordPress</h4>
                    <span className="skill-green">70%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-green" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>jQuery</h4>
                    <span className="skill-red">60%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-red" style={{ width: "60%" }}></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>CSS3</h4>
                    <span className="skill-purple">90%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-purple" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="skill-item mb-4">
                  <div className="skill-info">
                    <h4>SEO</h4>
                    <span className="skill-dark-blue">80%</span>
                  </div>
                  <div className="skill-line">
                    <div className="skill-fill bg-dark-blue" style={{ width: "80%" }}></div>
                  </div>
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
