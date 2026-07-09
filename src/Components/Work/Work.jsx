import React, { useState } from "react";
import { GraphicDesign } from "./GraphicDesign.jsx";
import { Apps } from "./Apps.jsx";
import { Software } from "./Software.jsx";

export const Work = () => {
  const [activeTab, setActiveTab] = useState("graphic");

  return (
    <section className="work-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <span className="section-small-title">MY WORK</span>

            <h2 className="section-title mt-4 mb-5">RECENT WORK</h2>

            <div className="work-tabs mb-4">
              <button
                className={activeTab === "graphic" ? "active" : ""}
                onClick={() => setActiveTab("graphic")}
              >
                Graphic Design
              </button>

              <button
                className={activeTab === "apps" ? "active" : ""}
                onClick={() => setActiveTab("apps")}
              >
                Apps
              </button>

              <button
                className={activeTab === "software" ? "active" : ""}
                onClick={() => setActiveTab("software")}
              >
                Software
              </button>
            </div>

            {activeTab === "graphic" && <GraphicDesign />}
            {activeTab === "apps" && <Apps />}
            {activeTab === "software" && <Software />}
          </div>
        </div>
      </div>
    </section>
  );
};