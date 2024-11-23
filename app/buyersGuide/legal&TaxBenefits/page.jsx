import React from 'react';
import Link from 'next/link';

const LegalTaxInfo = () => {
  const sections = [
    {
      title: "Legal Advice",
      content: [
        "At Royal Crown Infra, our seasoned tax experts will help you save your income tax while investing in under construction flats and properties at Panvel, Navi Mumbai. Signing a title report (received from the solicitor of the property) with any fine print and specific government reservations is unadvisable. Accept clearance reports that are lucid and specific.",
        "Precautionary measures will prevent you from getting embroiled in any future disputes. They will also help ensure that your home loans aren't scrutinized."
      ],
      image: "/images/buyersGuide/legal&taxBenefits/legal-advice.jpg"
    },
    {
      title: "Permissions & Approvals",
      content: [
        "Before a construction begins; the builder must seek several permissions and approvals from relevant bodies. Without these clearances, the construction may come under litigation. Here is a list of documents and approvals that the builder must possess for all building work to commence Mumbai & Kalyan Dombivali Municipal Region.",
        "ULC order (in specific cases)",
        "IOD and CC of the project",
        "MCGM / KDMC approved plans"
      ],
      image: "/images/buyersGuide/legal&taxBenefits/permissions-approvals.png"
    },
    {
      title: "Tax Benefits",
      content: [
        "When buying a property with loans from specific financial institutions, tax authorities provide certain benefits and exemptions from tax payments.",
        "Section 24 of the Income Tax Act states that an investor is allowed to deduct an amount equivalent to the total interest payable on the housing loan from his/her taxable income within the same financial year.",
        "According to Section 80C of the Income Tax Act: A deduction u/s 80C (2) (xviii) is available on repayment of the principal during a financial year of up to Rs. 1,00,000/-"
      ],
      image: "/images/buyersGuide/legal&taxBenefits/tax-Benefits.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        style={{
          backgroundImage: `url('/images/buyersGuide/tax.jpg')`,
          backgroundColor: '#1a365d' // Fallback background color
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wider sm:tracking-widest text-center">
            Legal & Tax Benefits
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <section key={index} className="mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                {/* Left Side Content */}
                <div className="md:w-1/2 md:pr-4 order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-6">{paragraph}</p>
                  ))}
                </div>
                {/* Right Side Image */}
                <div className="md:w-1/2 relative h-72 md:h-96 mb-4 md:mb-0 order-1 md:order-2">
                  <img
                    src={section.image}
                    alt={`${section.title}`}
                    className="rounded-lg w-full h-full object-contain"
                  />
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">For more information, please contact us:</p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTaxInfo;