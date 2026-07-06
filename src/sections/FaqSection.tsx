"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in is from 14:00 and check-out is by 10:00. Early check-in and late check-out can be arranged subject to availability — please contact us in advance and we will do our best to accommodate your request.",
  },
  {
    question: "Is breakfast included in the rate?",
    answer:
      "A seasonal breakfast is included with all suite bookings. Prepared fresh each morning using produce from our kitchen garden and working farm, it is served in your suite or on your private terrace.",
  },
  {
    question: "Do you accommodate children or pets?",
    answer:
      "Enon Heights is designed as a retreat for adults. We welcome guests aged 16 and above. While we are unable to accommodate pets, our team is happy to recommend local kennelling should you require it.",
  },
  {
    question: "Is there a minimum stay requirement?",
    answer:
      "We require a minimum two-night stay across all suites. Over certain peak periods — including public holidays and festive seasons — a three-night minimum may apply. We recommend checking availability at the time of enquiry.",
  },
  {
    question: "What activities are available nearby?",
    answer:
      "The surrounding landscape offers hiking, cycling, wine estate tours, and coastal drives. Our team curates personalised itineraries on request and can arrange private guides, transfers, and reservations throughout your stay.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section general-padding">
    <div className="container-fluid-lg">
      <div className="faq-section-heading-row">
        <div className="title title-dark-olive">
          <h2>Stay FAQs</h2>
        </div>
      </div>

      <div className="faq-section-body">
        <div className="faq-section-image-col" aria-hidden="true">
          <Image
            src="/assets/faq-bg.jpg"
            alt=""
            role="presentation"
            fill
            sizes="(max-width: 992px) 0px, 50vw"
            className="faq-section-image"
          />
        </div>

        <div className="faq-section-accordion-col">
          <div className="faq-section-list" role="list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-section-item${isOpen ? " is-open" : ""}`}
                  role="listitem"
                >
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} FAQ: ${item.question}`}
                    className="faq-section-trigger"
                    onClick={() => toggle(index)}
                  >
                    <div className="title title-dark-olive">
                    <h5 className="faq-section-question">{item.question}</h5>
                    </div>
                    <div
                      className={`faq-section-icon${isOpen ? " is-open" : ""}`}
                      aria-hidden="true"
                    >
                      <Image
                        src="/icons/faq-plus.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="faq-section-answer">
                          <div className="content content-dark-light">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
