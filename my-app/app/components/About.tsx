import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        About <span className="text-cyan-400">Me</span>
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex justify-center w-full md:w-1/2">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
            <Image
              src="/rhead.png"
              alt="Rishith Nagaraj"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Hello there 👋</h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a Computer Science student at George Mason University with a
            strong interest in software engineering and web development.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I enjoy building projects, learning new technologies, and
            continuously improving my skills as a developer.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-cyan-400">
              Interests
            </h4>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                Computer Vision
              </span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                Open Source
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
