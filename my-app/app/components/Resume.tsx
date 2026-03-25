const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-zinc-950 text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        My <span className="text-cyan-400 hover: ">Resume</span>
      </h2>

      <div className="mb-8 flex gap-4">
        <a
          href="/Rishith%20Nagaraj%20Resume%20(1).pdf"
          target="_blank"
          className="bg-cyan-300 text-black px-5 py-2 rounded-lg font-semibold hover:font-bold hover:bg-cyan-900"
        >
          Open Resume
        </a>

        <a
          href="/Rishith%20Nagaraj%20Resume%20(1).pdf"
          download
          className="border border-zinc-700 px-5 py-2 rounded-lg font-semibold hover:font-bold hover:bg-zinc-700"
        >
          Download
        </a>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[800px] h-[1000px] bg-white rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
          <iframe
            src="/Rishith%20Nagaraj%20Resume%20(1).pdf#zoom=100"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
