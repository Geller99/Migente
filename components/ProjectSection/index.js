import React, { useState } from 'react'
import ScrollToSeeMore from '../ScrollToSeeMore'

function ProjectSection() {

  return (
    <div className="project-section" id="project">
      <div className="spot-light"></div>

      <div className="project-section-inner">

        <div className="project-inner-container">
          <div className="left-text-div">
            <div className="heading-wrapper">
              <div className="title">
                THE <span>Project</span>
                {/* <div className="vertical-line"></div>
                <div className="horizontal-line"></div> */}
              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant imperdiet eget mi.

              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant imperdiet eget mi.

              </div>
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant imperdiet eget mi.

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
  )
}

export default ProjectSection