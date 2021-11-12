import React from "react";
import Question from "./Question";

const FAQs = () => {
  return (
    <div className="faq">
      <h2 className="center" data-aos="zoom-in" data-aos-duration="800">
        Frequently Asked Questions
      </h2>
      <Question
        q="Why does the world need Village?"
        a="We looked at innovation happening in DeFi and found there was a clear
        lack of focus on bringing the benefits of these financial products to the real world.
        At what point will these products be able to impact people beyond the vacuum of
        crypto wealth?

        This is the problem we are solving with Village. We are building a market that is
        necessary for both lenders and borrowers: web3 natives can earn a yield by lending
        stablecoins to borrowers, meanwhile we lower barriers for borrowers to access crypto
        financing and provide capital to support their own cause or livelihood."
      />
      <Question
        q="How can I use Village?"
        a="Frontier serves two parties: Lenders and Borrowers. 

        For borrowers, we are primarily focused on partnering with institutions, investors
        or companies that align with our goals of social or environmentally beneficial
        financing. Read more on borrowers and criteria from the Docs tab, or use the
        Contact Us tab to reach out to our team via email and see if you may be eligible
        for a loan. 
        
        For lenders, get involved by joining our Discord and following us on Twitter! The
        Village app will be launching in coming months, and soon you will be able to provide
        a credit line and earn yield through impact investing on Village. "
      />
      <Question
        q="How do you assess credit risk?"
        a="Village’s credit assessment process utilizes a model similar to that of the Credit
        Risk Algorithm (CRA), initially created by the credit team at Teller Finance. This
        process requires inputs of specific financial data and criteria for select borrowers
        to accurately assess risk. The team from Teller is core to credit risk operations
        at Village, and has over a decade of combined experience in refining this risk
        assessment process. To learn more about Teller, visit www.teller.finance,
        and to read more on our process, head to our Docs."
      />
      <Question
        q="What’s next? How can I stay up to date?"
        a="Enter your email above to subscribe to future newsletters, or stay up to date on
        announcements by following us on Twitter and joining the Village on Discord!
        All Villagers are welcome and we are always available to answer questions and hear your
        feedback!"
      />
    </div>
  );
};

export default FAQs;
