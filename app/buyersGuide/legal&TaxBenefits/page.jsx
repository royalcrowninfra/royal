import Image from 'next/image';
import Link from 'next/link';
import BankingPartner from '@/components/BankingPartner';

const LegalTaxInfo = () => {
  const sections = [
    {
      title: "Legal Advice",
      content: [
        "At Qualcom Dreams, our seasoned tax experts will help you save your income tax while investing in under construction flats and properties at Panvel, Navi Mumbai. Signing a title report (received from the solicitor of the property) with any fine print and specific government reservations is unadvisable. Accept clearance reports that are lucid and specific.",
        "Precautionary measures will prevent you from getting embroiled in any future disputes. They will also help ensure that your home loans aren't scrutinized."
      ],
      image: "/images/legal.jpg"
    },
    {
      title: "Permissions & Approvals",
      content: [
        "Before a construction begins; the builder must seek several permissions and approvals from relevant bodies. Without these clearances, the construction may come under litigation. Here is a list of documents and approvals that the builder must possess for all building work to commence Mumbai & Kalyan Dombivali Municipal Region.",
        "ULC order (in specific cases)",
        "IOD and CC of the project",
        "MCGM / KDMC approved plans"
      ],
      image: "/images/approvals.jpg"
    },
    {
      title: "Tax Benefits",
      content: [
        "When buying a property with loans from specific financial institutions, tax authorities provide certain benefits and exemptions from tax payments.",
        "Section 24 of the Income Tax Act states that an investor is allowed to deduct an amount equivalent to the total interest payable on the housing loan from his/her taxable income within the same financial year.",
        "According to Section 80C of the Income Tax Act: A deduction u/s 80C (2) (xviii) is available on repayment of the principal during a financial year of up to Rs. 1,00,000/-"
      ],
      image: "/images/tax.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header Section with Background Image */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/header/whoweare.jpg')" }}
      >
        <div className="container mx-auto py-16 sm:py-24 md:py-32 lg:py-48 xl:py-64 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-wider sm:tracking-widest text-center">
            Future Panvel Development
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
                <div className="md:w-1/2 relative h-72 md:h-auto mb-4 md:mb-0 order-1 md:order-2">
                  <Image
                    src={section.image}
                    alt={`${section.title} Image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">For more information, please contact us:</p>
            <Link href='/contact'>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTaxInfo;
