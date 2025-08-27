import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, className = "" }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(expandedFAQ === question ? null : question);
  };

  return (
    <div className={`mb-8 ${className}`}>
      <h3 className="text-lg font-bold pl-3 text-white my-4">FAQs</h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 ease-in-out transform ${
              expandedFAQ === faq.question
                ? "bg-[#3a4556] shadow-lg"
                : "bg-[#2a3546]"
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.question)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-[#3a4556] transition-all duration-200 ease-in-out"
            >
              <span
                className={`font-bold text-sm transition-all duration-200 ${
                  expandedFAQ === faq.question ? "text-white" : "text-[#A7B5CA]"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`text-sm transition-transform duration-300 ease-in-out ${
                  expandedFAQ === faq.question ? "rotate-180" : "rotate-0"
                }`}
              >
                <img
                  src="/icons/arrow-up.svg"
                  alt="arrow-down"
                  className="w-4 h-4"
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedFAQ === faq.question
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
