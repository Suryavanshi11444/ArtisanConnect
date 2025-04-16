import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq12 = () => {
  const faqs = [
    {
      question: "What is Feedback?",
      answer: "Feedback is information about reactions to a product, a person's performance, etc., used as a basis for improvement."
    },
    {
      question: "Why should your organization use Feedback Application?",
      answer: "It helps in gathering insights from users to improve services, products, or performance."
    },
    {
      question: "How to Contact Us?",
      answer: "You can contact us via the Contact Us page or email support@feedbackapp.com."
    },
    {
      question: "Trust Level of Feedback Application?",
      answer: "Our feedback application ensures secure data handling and trusted insights with high accuracy."
    },
    {
      question: "What is Feedback?",
      answer: "Feedback refers to the information or reactions about a service, product, or performance."
    },
    {
      question: "Why should your organization use Feedback Application?",
      answer: "It enables better decision-making through user insights."
    },
    // Additional 10 questions and answers
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page, and follow the instructions sent to your email."
    },
    {
      question: "Is my data safe on this platform?",
      answer: "Yes, we use encryption protocols to ensure that your data is protected and handled securely."
    },
    {
      question: "Can I update my profile information?",
      answer: "Yes, you can update your profile by going to your account settings and editing your personal details."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription anytime by going to your account settings and selecting 'Cancel Subscription.'"
    },
    {
      question: "How do I provide feedback?",
      answer: "You can provide feedback by filling out the feedback form available in your dashboard or through the 'Give Feedback' button."
    },
    {
      question: "Can I get notifications about new features?",
      answer: "Yes, you can enable notifications in your account settings to stay updated with new features and updates."
    },
    {
      question: "How can I upgrade to a premium account?",
      answer: "To upgrade to a premium account, go to your account settings and select the 'Upgrade' option to choose a plan."
    },
    {
      question: "What should I do if I encounter a bug?",
      answer: "If you encounter a bug, please report it by using the 'Report a Bug' option in the help section or contacting our support team."
    },
    {
      question: "How can I delete my account?",
      answer: "If you wish to delete your account, please contact our support team via email, and they will assist you with the process."
    },
    {
      question: "Is there a mobile app for Feedback?",
      answer: "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play."
    },
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page

  const questionsPerPage = 6; // Number of questions to display per page

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const next = () => {
    if (currentPage < Math.floor(faqs.length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedFaqs = faqs.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  return (
    <div className="bg-white text-black py-20 font-['Roboto'] flex justify-center">
      <div className="w-[90%] max-w-6xl">
        <div className="relative text-center mb-6">
          {/* Background Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-[30px] lg:text-[70px] font-bold text-gray-500 opacity-10 z-5 mb-4 whitespace-nowrap select-none">
              Frequently Ask Question
            </h1>
          </div>

          {/* Foreground Text */}
          <div className="relative z-10 text-4xl font-bold">
            Frequently Ask Question <br />
            <span className="text-cyan-500 text-sm cursor-pointer">Click Here</span>
            <span className="text-black text-sm cursor-pointer"> ___to buy now</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-14">
          {/* Left Side */}
          <div className="lg:w-[55%] w-full">
            {displayedFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 mb-3"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-base font-medium">{faq.question}</p>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-cyan-500" />
                  ) : (
                    <FaChevronDown className="text-cyan-500" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
            <div className="text-center mt-4">
              <button
                className="bg-blue-900 hover:bg-cyan-500 text-white w-10 h-10 rounded-full mx-2 shadow-md"
                onClick={previous}
              >
                &lt;
              </button>
              <button
                className="bg-blue-900 hover:bg-cyan-500 text-white w-10 h-10 rounded-full mx-2 shadow-md"
                onClick={next}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[40%] w-full lg:mb-9 text-center">
            <img
              className="mx-auto w-[60%] mb-9"
              src="https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5b49e6atVeg9asBXzKcdUu5Po6FhjmvntTyM2"
              alt="question"
            />
            <div className="mb-4 -mt-6">
              <h2 className="text-3xl font-bold mb-2">Any Question?</h2>
              <p className="text-sm text-gray-500 ">
                You can ask anything you want to know about Feedback.
              </p>
              <h2 className="text-1xl font-bold mt-10 text-gray-500 text-left ml-1">Let me know</h2>

              <input
                type="text"
                placeholder="Enter Here"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
              <button className="bg-gradient-to-r from-blue-900 to-blue-900 text-white px-6 py-2 mt-9 rounded-full shadow-lg hover:shadow-6xl transition-all">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq12;