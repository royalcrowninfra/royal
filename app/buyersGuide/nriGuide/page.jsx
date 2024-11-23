import React from 'react';

const NRIInfoComponent = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Investment Opportunities for NRIs</h1>
      <p className="text-lg text-gray-800">
        With property rates in Panvel, Navi Mumbai set to appreciate multifold, the focus of all NRI investment is right here, within NAINA’s smart zone. And so is the Royal Crown team of seasoned professionals ready to assist and update NRIs on Loans, tax benefits, power of attorney and RBI regulations.
      </p>
      <p className="text-lg text-gray-800 mt-4">
        Royal Crown are one of Navi Mumbai’s foremost property consultants commanding a portfolio of <span className="font-bold text-red-600">___ residential projects</span> spanning over <span className="font-bold text-red-600">___ sq.ft</span> across the length and breadth of the Panvel-Taloja corridor. All our projects bear the Royal Crown of affordable luxury delivered on time, everytime.
      </p>
      <p className="text-lg text-gray-800 mt-4">
        All our projects are poised to appreciate multi-fold in value due to their strategic positioning in the NAINA smart city district and offer Non-resident Indians an excellent investment option.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Documents Required for NRI Property Purchase</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li>Power of attorney in the name of someone in India who can carry out legal & financial proceedings on your behalf</li>
          <li>Your PAN Card. In case your PAN card is not available, then a copy of your passport.</li>
          <li>An NRE or NRO account via which you can transact with the builder</li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions by NRIs</h2>
        <ul className="list-disc list-inside text-lg text-gray-800">
          <li><span className="font-bold">Q1.</span> What is the definition of a Non Resident Indian?</li>
          <li><span className="font-bold">Q2.</span> What is the definition of a Person of Indian Origin (PIO)?</li>
          <li><span className="font-bold">Q3.</span> What are the facilities enjoyed by NRIs and OCBs?</li>
          {/* Add more FAQs as needed */}
        </ul>
      </div>
    </div>
  );
};

export default NRIInfoComponent;
