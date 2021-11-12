import React from "react";

import vlg from "../images/village.png";
import ra from "../images/right-arrow.png";

const Footer = () => {
  return (
    <div className="footer flex">
      <div className="two logo-footer">
        <img src={vlg} alt="village-logo" />
      </div>
      <div className="one fix">
        <ul>
          <li className="bold">Product</li>
          <li>
            <a
              href="https://village.gitbook.io/village/"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://village.gitbook.io/village/faqs/"
              target="_blank"
              rel="noreferrer"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div className="one fix">
        <ul>
          <li className="bold">Engage</li>
          <li>
            <a
              href="https://twitter.com/Village_fi"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://t.co/Nbynvms1Rh?amp=1"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@Villagefi"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
      <div className="one borrow">
        <ul>
          <li className="bold">Borrowing?</li>
          <li>
            <a
              href="https://us20.list-manage.com/contact-form?u=12cf845d2866bf06908250683&form_id=547d0fe7541d796319c27137928c693f"
              target="_blank"
              rel="noreferrer"
            >
              Fill out borrower form
            </a>
          </li>
          <li>
            <a
              href="https://us20.list-manage.com/contact-form?u=12cf845d2866bf06908250683&form_id=547d0fe7541d796319c27137928c693f"
              target="_blank"
              rel="noreferrer"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div id="footer-signup">
        <form
          action="https://impactvillage.us20.list-manage.com/subscribe/post?u=12cf845d2866bf06908250683&amp;id=7a6b4425d0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <h4>
            Subscribe to our <br /> newsletter for updates
          </h4>
          <div className="flex">
            <input type="email" placeholder="your.name@email.com" />
            <div id="patch"></div>

            <button class="btn ">
              <img id="img-ftr" src={ra} alt="Signup" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
