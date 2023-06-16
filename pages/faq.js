import React from "react";
import styles from "@/styles/Faq.module.css";
import { Accordion } from "react-bootstrap";
import Meta from "@/components/Shared/Meta";

const parentsFAQ = [
  {
    question: "How does the care take place and what are the costs?",
    content: `<div>We do NOT charge a usage fee for the provision of silversitting.com as a digital platform. This platform is completely free for seniors and parents to use for anyone who is currently signing up. You can use our <a href="">search function</a> to find available seniors who offer childcare in your area without registering. This gives you a good overview of all the childcare workers who are registered in the vicinity of your whereabouts and you can use the photos and personal information to make a first impression.</div> <div>Many seniors offer their care services free of charge and on a voluntary basis. This can be recognized by a symbol with two hearts hugging each other. If one or more child carers have aroused your interest, you will be invited to register free of charge before contacting the child career.</div>`,
  },
  {
    question:
      "Suppose a SilverSitter does not work on a voluntary basis but asks for money. What to look out for?",
    content: "Items added letter",
  },
  {
    question:
      "Why is an age of 55 or older set as a participation requirement for childcare workers?",
    content: "Items added letter",
  },
  {
    question: "Is my personal data freely accessible?",
    content: "Items added letter",
  },
  {
    question: "Does SilverSitting pre-select the child careers?",
    content: "Items added letter",
  },
  {
    question:
      "How can I best prepare my children and the caregiver for their first childcare?",
    content: "Items added letter",
  },
  {
    question:
      "Why am I currently finding so few supervisors in my search radius?",
    content: "Items added letter",
  },
];

const FAQ = () => {
  return (
    <>
      <Meta>Frequently Asked Question</Meta>
      <section className={`container mx-auto ${styles.faqMainContainer}`}>
        {/* banner */}
        <div className={styles.faqBanner}>
          <div>FAQ for parents</div>
        </div>

        <div>
          {parentsFAQ.map((item, idx) => (
            <Accordion
              defaultActiveKey={["0"]}
              alwaysOpen
              className={styles.accordionContainer}
            >
              <Accordion.Item eventKey={`${idx}`}>
                <Accordion.Header>{item?.question}</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
