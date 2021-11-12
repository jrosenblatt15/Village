import React, { useState, useEffect } from "react";

import globe from "../images/Untitled_Artwork-removebg-preview.png";

const Hero = () => {
  const [viewPort, setViewport] = useState(window.innerWidth);

  const updateMedia = () => {
    setViewport(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      <section id="hero" className="flex">
        <div className="globe full">
          <img id="globe" src={globe} alt="globe-img" />
        </div>

        <div className="hero-content full">
          <h1 className="center hero-title">
            Make your crypto {viewPort > 950 ? <br /> : ""}
            matter
          </h1>
          <p>
            The Village Protocol is
            <strong> bringing access to impact investing</strong> on-chain. We
            enable crypto loans to support socially or environmentally impactful
            companies and initiatives
          </p>
        </div>
        <div className="arrow-up bigt hide-small"></div>
        <div className="rect bigr hide-small"></div>
        <div className="chimney hide-small"></div>
        <div className="arrow-up  smallt hide-small"></div>
        <div className="rect smallr hide-small"></div>
      </section>
      {/* <div className="flex hero-line">
        <img className="vlg" src={vlg} alt="village-logo" />
        <h3>... it takes one to fund one</h3>
      </div> */}

      <div className="cta flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://village.gitbook.io/village/";
          }}
          className="cta-button btn btn-lg hero-btn"
        >
          <a
            href="https://village.gitbook.io/village/"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://us20.list-manage.com/contact-form?u=12cf845d2866bf06908250683&form_id=547d0fe7541d796319c27137928c693f";
          }}
          className="cta-button btn btn-lg hero-btn"
        >
          <a
            href="https://us20.list-manage.com/contact-form?u=12cf845d2866bf06908250683&form_id=547d0fe7541d796319c27137928c693f"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </button>
      </div>
      <div className="center">
        {viewPort > 1024 && (
          <h3 className="cta-line" data-aos="zoom-in">
            Interested in borrowing?
          </h3>
        )}

        <button
          className="cta-button btn btn-lg hero-btn cta-line bb"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0";
          }}
          data-aos="zoom-in-down"
          data-aos-delay="250"
        >
          <a
            href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0"
            target="_blank"
            rel="noreferrer"
          >
            {viewPort > 1024 ? "Start Here" : "Interested in borrowing?"}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
