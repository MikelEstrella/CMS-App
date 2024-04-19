import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim
            officia ipsum rem, sunt qui nisi voluptate facere voluptas
            asperiores consequatur veritatis ut iusto suscipit provident quas
            nihil et ratione.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="office" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
