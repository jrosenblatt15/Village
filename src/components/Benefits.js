import React, { useState, useEffect } from "react";
import invest from "../images/invest.png";
import thinking from "../images/thinking.png";
import { Carousel } from "react-bootstrap";
import withdraw from "../images/withdraw.png";

const Benefits = () => {
  const [viewPort, setViewport] = useState(window.innerWidth);

  const updateMedia = () => {
    setViewport(window.innerWidth);
    console.log(viewPort);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="flex benefits">
      {viewPort > 960 ? (
        <>
          <div className="third">
            <img className="ben-img" src={invest} alt="invest" />
            <div
              className="ben-content fir-ben-cont"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <h3 id="first-ben">For Lenders</h3>
              <p>
                Interested in the next real-world application of DeFi? Looking
                to earn a yield while making an impact?{" "}
                {viewPort > 950 && <br />} Subscribe for updates or follow us on
                Twitter.
              </p>
            </div>
          </div>
          <div className="third">
            <img className="ben-img " src={withdraw} alt="withdraw" />
            <div
              className="ben-content sec-ben-cont"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <h3>For Borrowers</h3>
              <p>
                If you represent an impact-focused fund, a micro-finance
                institution (MFI), or any impactful business with an inspiring
                mission. <br />
                Fill out the Borrower Form or use the Contact Us tab to reach
                us!
              </p>
            </div>
          </div>
          <div className="third">
            <img className="ben-img fix" src={thinking} alt="thinking" />
            <div
              className="ben-content"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <h3>Explain like I'm five?</h3>
              <p>
                Lenders let a borrower use their money to support an impactful
                initiative, and the borrower receives that money through their
                fund on Village. Over a period of time, the borrower fulfills
                their goals and repays the lender plust interest!
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <div className="third">
                    <img className="ben-img" src={invest} alt="invest" />
                    <div
                      className="ben-content"
                      data-aos="flip-left"
                      data-aos-delay="200"
                    >
                      <h3>For Lenders</h3>
                      <p>
                        Interested in the next real-world application of DeFi?
                        Looking to earn a yield while making an impact?{" "}
                        {viewPort > 950 && <br />} Subscribe for updates or
                        follow us on Twitter.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="third">
                    <img className="ben-img " src={withdraw} alt="withdraw" />
                    <div
                      className="ben-content"
                      data-aos="flip-left"
                      data-aos-delay="400"
                    >
                      <h3>For Borrowers</h3>
                      <p>
                        If you represent an impact-focused fund, a micro-finance
                        institution (MFI), or any impactful business with an
                        inspiring mission. <br />
                        Fill out the Borrower Form or use the Contact Us tab to
                        reach us!
                      </p>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="third">
                    <img className="ben-img " src={thinking} alt="thinking" />
                    <div
                      className="ben-content"
                      data-aos="flip-left"
                      data-aos-delay="600"
                    >
                      <h3>Explain like I'm five?</h3>
                      <p>
                        Lenders let a borrower use their money to support an
                        impactful initiative, and the borrower receives that
                        money through their fund on Village. Over a period of
                        time, the borrower fulfills their goals and repays the
                        lender plust interest!
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefits;
