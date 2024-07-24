import React from 'react';

const values = [
  { title: 'Integrity', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  { title: 'Care', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  { title: 'Excellence', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  { title: 'Respect', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  { title: 'Commitment', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
  { title: 'Relationships', description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
];

export default function OurValues() {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-normal text-center text-black mb-4">Our Values</h2>
        <p className="text-center text-black mb-8 max-w-3xl mx-auto text-sm">
          Our vision is to continue to "set standards" in the industry through the provision of
          innovative, sustainable construction solutions that exceed client's expectations.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {values.map((value, index) => (
            <div key={index} className="bg-yellow-400 rounded-lg p-4 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-xs mb-4 flex-grow">{value.description}</p>
              {/* <button className="text-xs font-semibold uppercase bg-transparent text-left">MORE</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}