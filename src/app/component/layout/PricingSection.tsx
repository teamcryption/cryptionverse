"use client";
import { Layout, Layers, Square, CheckCircle } from "lucide-react";

export default function PricingComponent() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto text-left px-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Simple <br />
          <span className=" text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            transparent pricing
          </span>
        </h2>
        <p className="mt-2 text-gray-600">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Basic Plan */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl text-indigo-500 flex justify-center">
              <Layout size={30} color="black" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Basic plan</h3>
            <p className="text-5xl text-gray-900">$10/mth</p>
            <p className="text-sm text-gray-500">Billed annually.</p>
            <ul className="mt-6 space-y-4 text-left text-gray-600">
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Access to all basic
                features
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Basic reporting and
                analytics
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Up to 10 individual
                users
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> 20 GB individual data
                each user
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Basic chat and email
                support
              </li>
            </ul>
            <button className="mt-8 bg-black text-white py-2 px-6 rounded-lg w-2/3">
              Get started
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl text-green-500 flex justify-center">
              <Layers size={30} color="black" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Business plan</h3>
            <p className="text-5xl text-gray-900">$20/mth</p>
            <p className="text-sm text-gray-500">Billed annually.</p>
            <ul className="mt-6 space-y-4 text-left text-gray-600">
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> 200+ integrations
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Advanced reporting
                and analytics
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Up to 20 individual
                users
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> 40 GB individual data
                each user
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Priority chat and
                email support
              </li>
            </ul>
            <button className="mt-8 bg-black text-white py-2 px-6 rounded-lg w-2/3">
              Get started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl text-purple-500 flex justify-center">
              <Square size={30} color="black" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Enterprise plan</h3>
            <p className="text-5xl text-gray-900">$40/mth</p>
            <p className="text-sm text-gray-500">Billed annually.</p>
            <ul className="mt-6 w-full  space-y-4 text-left text-gray-600">
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Advanced custom
                fields
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Audit log and data
                history
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Unlimited individual
                users
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Unlimited individual
                data
              </li>
              <li className="flex ">
                <CheckCircle size={20} className="mr-3" /> Personalized +
                priority service
              </li>
            </ul>
            <button className="mt-8 bg-black text-white py-2 px-6 rounded-lg w-2/3">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
