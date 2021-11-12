import React, { useState, useEffect } from "react";

const Signup = () => {
  const [viewPort, setViewport] = useState(window.innerWidth);

  const updateMedia = () => {
    setViewport(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <section id="signup">
      <h2 className="signup-title" data-aos="fade-up" data-aos-duration="500">
        Expand your access to impact.
      </h2>
      <p
        className="signup-content"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="500"
      >
        Village uses the blockchain to provide capital opportunities without
        intermediaries - think of our platform as a vehicle for your money,
        rather than a custodian. The result is expanded access to impact,
        allowing lenders to support inspiring causes while borrowers appreciate
        easier access to capital.{" "}
      </p>
      <div id="mc_embed_signup">
        <form
          action="https://impactvillage.us20.list-manage.com/subscribe/post?u=12cf845d2866bf06908250683&amp;id=7a6b4425d0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div className="flex signup-input" data-aos="flip-left">
            <input
              className="signup-form"
              type="email"
              placeholder="your.name@email.com"
            />
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_12cf845d2866bf06908250683_7a6b4425d0"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="patch"></div>
            <button className="btn signup-btn">
              {viewPort > 760 ? "Stay up to date!" : "Sign Up!"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
