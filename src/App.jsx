import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <div className="w-40 h-40 bg-blue-500 rounded-full overflow-hidden">
          <img
            src="/public/img/profile_pict.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">M. Rifki Nurul Ramdani Alamsyah</h1>
        <p className="text-lg text-gray-400">Software Developer | Tech Enthusiast</p>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-8 bg-gray-800 flex flex-col items-center text-center">
  <h2 className="text-3xl font-semibold">Experience</h2>
  <ul className="mt-6 space-y-6 max-w-2xl text-gray-400 text-left">
    <li>🚀 2+ years of experience as a Frontend Developer at PT Bank Rakyat Indonesia (BRI).</li>
    <li>💼 Running a business focused on designing, developing, and selling self-made products under the brand name <span className="font-semibold text-white">Mexv</span>.</li>
    <li>🔧 Gained two internship experiences: 
      <ol className="list-disc list-inside ml-5 space-y-2">
        <li>BRI IT Internship Bootcamp as Frontend Developer - 4 months (May - July 2023)</li>
        <li>Magang Kampus Merdeka as Fullstack Developer - 6 months (August - December 2022)</li>
      </ol>
    </li>
  </ul>
</section>


      {/* Projects Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">A cool web app using React.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">A responsive landing page with TailwindCSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400 mt-2">A dynamic dashboard built with Next.js.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
