import Link from "next/link";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-950 text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Workout  */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-md shadow-xl hover:-translate-y-1 hover:border-cyan-400/40 transition">
          <h3 className="text-2xl font-semibold mb-3">Workout Tracker App</h3>

          <p className="text-gray-400 mb-5 leading-relaxed">
            Full-stack workout tracking app with authentication and real-time
            logging of sets, reps, and weights.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              Supabase
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              React
            </span>
          </div>

          <div className="flex gap-3">
            <Link
              href="https://github.com/rishithnagaraj/RepWise-Fitness-Tracker"
              target="_blank"
              className="bg-cyan-300 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:font-bold hover:bg-cyan-900"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Sports  */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-md shadow-xl hover:-translate-y-1 hover:border-cyan-400/40 transition">
          <h3 className="text-2xl font-semibold mb-3">
            Sports Match Predictor
          </h3>

          <p className="text-gray-400 mb-5 leading-relaxed">
            Machine learning model built using Python to predict match outcomes
            using historical data and feature engineering.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              Python
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              pandas
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              scikit-learn
            </span>
          </div>

          <div className="flex gap-3">
            <Link
              href="https://github.com/rishithnagaraj/EPL-Match-Prediction"
              target="_blank"
              className="bg-cyan-300 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:font-bold hover:bg-cyan-900"
            >
              View Project
            </Link>
          </div>
        </div>

        {/* Grocery  */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-md shadow-xl hover:-translate-y-1 hover:border-cyan-400/40 transition">
          <h3 className="text-2xl font-semibold mb-3">
            Grocery Store Simulation
          </h3>

          <p className="text-gray-400 mb-5 leading-relaxed">
            Event-driven simulation using custom data structures like queues,
            stacks, and linked lists to model real-world systems.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              Java
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              Data Structures
            </span>
            <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
              OOP
            </span>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="bg-cyan-300 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:font-bold hover:bg-cyan-900"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
