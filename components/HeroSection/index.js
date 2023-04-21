import React from "react";
import Button from "../Button";
import ScrollToSeeMore from "../ScrollToSeeMore";

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="background">
        <div className="mobile-backdrop"></div>
        <img className="actor-1" src="/image/actor-1.png" alt="actor-1" />
        <img className="actor-2" src="/image/actor-2.png" alt="actor-1" />
        <img className="actor-3" src="/image/city.png" alt="actor-1" />
      </div>
      <div className="empty"></div>
      <div className="intro">
        <div className="heading">Migente</div>
        <div className="sub-heading">
          <div className="vertical-bar"></div>
          <div className="content">
            The Genesis of the Mi Gente Project was not only fueled by a deep
            appreciation for the Hispanic and Latin American culture and its
            abundant legacy, but also by a strong aspiration to equip the
            upcoming cohort of change-makers with the necessary resources and
            expertise to establish a legacy of wealth across generations. While
            emphasizing the Latino culture, Mi Gente embodies the tenacity and
            determination of all individuals.
          </div>
        </div>
        <div className="action-btns">
          <Button variant="fill" value="Mint" />
          <Button variant="outline" value="Join us" />
        </div>
        <ScrollToSeeMore scrollRef="project" />
      </div>
    </section>
  );
}

export default HeroSection;
