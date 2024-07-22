import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BankingPartner from '@/components/BankingPartner';

const HomeLoans = () => {
  const sections = [
    {
      title: "Business Applicants",
      items: [
        "Updated pass book or statement of accounts (6 months)",
        "Xerox copy of ration card",
        "Business profile (nature, clients, suppliers, employees, etc.)",
        "For partnerships: Partnership deed, 3 years financials, CA certification",
        "For Pvt. Ltd: Remuneration details, board resolution, annual reports, IT returns"
      ]
    },
    {
      title: "Employed Persons",
      items: [
        "Latest salary certificate or slip",
        "Xerox of Form 16A (TDS Form)",
        "Certificate for additional allowances",
        "Updated bank statement (6 months)",
        "ID proof (voter ID, company ID, passport, or ration card)",
        "Passport size photographs (applicant & co-applicant)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Loan Application Document Requirements
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-4">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              </div>
              <ul className="p-6 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">For more information, please contact us:</p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <BankingPartner />
    </div>
  );
};

export default HomeLoans;