import React, { useState } from "react";
import ScrollToSeeMore from "../ScrollToSeeMore";

function ProjectSection() {
  return (
    <div className="project-section" id="project">
      <div className="spot-light"></div>

      <div className="project-section-inner">
        <div className="project-inner-container">
          <div className="left-text-div">
            <div className="heading-wrapper">
              <div className="title">
                 <span>The Project</span>
                {/* <div className="vertical-line"></div>
                <div className="horizontal-line"></div> */}
              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                The genesis of the Mi Gente Project was not only fueled by a
                deep appreciation for the Hispanic and Latin American culture
                and its abundant legacy,
              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                but also by a strong aspiration to equip the upcoming cohort of
                change-makers with the necessary resources and expertise to
                establish a legacy of wealth across generations.
              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                While emphasizing the Latino culture, Mi Gente embodies the
                tenacity and determination of all individuals.
              </div>
            </div>

            <div className="scroll-to-see-more">
              <ScrollToSeeMore scrollRef="team" />
            </div>
          </div>
          <div className="right-image-div">
            {/* <div className={`spotlight-container ${isSpotlightActive ? 'active' : ''}
            `}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              <div className="spotlight" style={{ left: spotlightPosition.x, top: spotlightPosition.y }} />
            </div> */}
            {/* <img src="http://upload.wikimedia.org/wikipedia/commons/5/51/Fox_Head.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
