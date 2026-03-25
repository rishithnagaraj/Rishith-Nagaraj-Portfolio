"use client";

const Dashboard = () => {
  return (
    <main className="fixed top-4 right-6 text-sm flex gap-4 z-50">
      <a
        href="#about"
        className="text-white font-extrabold hover:font-bold hover:bg-cyan-900 px-3 py-1 rounded-md"
      >
        About
      </a>

      <a
        href="#projects"
        className="text-white font-extrabold hover:font-bold hover:bg-cyan-800 px-3 py-1 rounded-md"
      >
        Project
      </a>

      <a
        href="#resume"
        className="text-white font-extrabold hover:font-bold hover:bg-cyan-800 px-3 py-1 rounded-md"
      >
        Resume
      </a>

      <a
        href="#contact"
        className="text-white font-extrabold hover:font-bold hover:bg-cyan-800 px-3 py-1 rounded-md"
      >
        Contact
      </a>
    </main>
  );
};

export default Dashboard;
