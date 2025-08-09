import React, { useState } from "react";
import event from "../assets/event.jpg";
const faqs = [
  {
    id: 1,
    question: "What is DoTogether?",
    answer:
      "DoTogether is a collaborative platform designed to bring people together to work on projects, share ideas, and achieve goals as a community.",
  },
  {
    id: 2,
    question: "How do I create an account?",
    answer:
      "Click on the Log In button, fill out the registration form with your details, verify your email, and you’re ready to start collaborating!",
  },
  {
    id: 3,
    question: "Can I join existing projects or only create my own?",
    answer:
      "You can do both! Join existing projects that interest you or start your own and invite others to participate.",
  },
  {
    id: 4,
    question: "Is DoTogether free to use?",
    answer:
      "Yes, DoTogether offers a free plan with essential collaboration features. Premium plans are available for enhanced tools and priority support.",
  },
  {
    id: 5,
    question: "How is my data protected on DoTogether?",
    answer:
      "We use industry-standard encryption and security measures to ensure your data and communications are safe and private.",
  },
  {
    id: 6,
    question: " Who do I contact for support?",
    answer:
      "You can reach out to our support team via the contact Us section or email us at support@dotogether.com. We’re here to help!",
  },
];

const FaqSection = () => {
  // Track which accordion is open; only one open at a time (optional)
  const [openId, setOpenId] = useState(1);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24">
      <div className="mx-auto w-10/12 max-w-7xl ">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img
              src={event}
              alt="FAQ section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="inter text-[#FF6363] dark:text-white text-center font-medium text-5xl  mb-2 lg:text-left">
                  FAQs
                </h6>
                <h2 className="text-4xl dark:text-white text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div>
                {faqs.map(({ id, question, answer }) => {
                  const isOpen = id === openId;
                  return (
                    <div
                      key={id}
                      className={`accordion pb-8 border-b border-solid border-gray-200 ${
                        isOpen ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleOpen(id)}
                        className="accordion-toggle dark:text-white group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                        aria-expanded={isOpen}
                        aria-controls={`faq-content-${id}`}
                        id={`faq-heading-${id}`}
                        type="button"
                      >
                        <h5>{question}</h5>
                        <svg
                          className={`text-gray-900 dark:text-white transition duration-500 group-hover:text-indigo-600 ${
                            isOpen ? "rotate-180 text-indigo-600" : ""
                          }`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div
                          id={`faq-content-${id}`}
                          role="region"
                          aria-labelledby={`faq-heading-${id}`}
                          className="accordion-content w-full px-0 overflow-hidden pr-4 mt-3"
                        >
                          <p className="text-base dark:text-white font-normal text-gray-600">
                            {answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
