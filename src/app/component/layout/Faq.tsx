"use client";

import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can easily change your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time before your next billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add your company details, VAT, and other information to your invoice.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill you on a monthly or yearly basis, depending on your chosen plan.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email in your profile settings.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-50">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Frequently asked questions
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Everything you need to know about the product and billing.
        </p>

        <div className="mt-10 divide-y divide-gray-800 border-y border-gray-800">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                {faq.question}
                <span className="ml-4">
                  {openIndex === index ? (
                    <MinusCircle className="w-5 h-5" />
                  ) : (
                    <PlusCircle className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black mt-12 p-8 rounded-xl flex flex-col items-center">
          <div className="flex -space-x-2 mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-black"
            />
          </div>
          <h3 className="text-lg font-semibold">Still have questions?</h3>
          <p className="text-gray-400 text-sm mt-1 mb-4 text-center">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
