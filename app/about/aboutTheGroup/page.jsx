import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 text-white p-4 md:p-8">
      {/* Header Section with Background Image */}
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/whoweare.jpg')" }}>
        <div className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Architectural Agency</h1>
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        
        {/* Planning Section */}
        <div className="bg-purple-200 p-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Image src="/images/img.jpg" alt="Planning Icon" width={40} height={40} className="mr-2" />
            <h3 className="text-xl font-semibold">Planning</h3>
          </div>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque accusamus tempore fuga pariatur expedita eius officiis laudantium obcaecati earum? Iure iste dicta earum nisi non aliquid totam vel architecto!
          Consequuntur atque, ut harum totam, explicabo exercitationem labore dolores dignissimos provident optio ipsam? Reprehenderit corporis numquam rem obcaecati voluptatum, minima mollitia quibusdam ducimus explicabo, voluptates quas blanditiis soluta a. Ducimus.</p>
        </div>
        
        {/* Buildings Section */}
        <div className="bg-purple-200 p-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Image src="/images/img.jpg" alt="Buildings Icon" width={40} height={40} className="mr-2 invert" />
            <h3 className="text-xl font-semibold">Buildings</h3>
          </div>
          <p className="text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo quod repudiandae inventore doloremque corrupti, commodi distinctio? Beatae, animi at reprehenderit nemo voluptatem magnam eveniet ad et, blanditiis tenetur error.
          Eum voluptates iusto provident perferendis nihil delectus maxime fugit modi, laboriosam velit odit similique debitis sequi ipsa praesentium accusantium reprehenderit dolorum nulla alias eos temporibus quo illo labore? Aliquam, odio?</p>
        </div>
        
        {/* Our Projects Section */}
        <div className="bg-purple-200 p-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Image src="/images/img.jpg" alt="Projects Icon" width={40} height={40} className="mr-2" />
            <h3 className="text-xl font-semibold">Our Projects</h3>
          </div>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sint dicta, cum quia delectus optio explicabo temporibus molestias saepe commodi unde, pariatur numquam quisquam laudantium quae cupiditate. Vel, eum culpa.
          Pariatur sit aspernatur officiis, quas eius impedit fugiat ratione saepe eos veniam harum dolores qui cum doloremque culpa nihil similique provident suscipit iste accusamus! Minus nihil soluta odio nam labore?</p>
        </div>
        
      </div>

      {/* Secondary Section */}
      <div className="flex flex-col md:flex-row bg-white text-black">
        <div className="md:w-1/2 relative">
          <Image src="/images/img.jpg" alt="Modern House" width={600} height={400} className="w-full h-full object-cover" />
          <div className="absolute top-0 bottom-0 -left-4 w-4 bg-red-500"></div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Company</h2>
          <p className="mb-6 text-gray-600">Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className="bg-white text-black border border-black py-2 px-4 inline-block">VIEW MORE</button>
        </div>
      </div>
      
    </div>
  );
}
