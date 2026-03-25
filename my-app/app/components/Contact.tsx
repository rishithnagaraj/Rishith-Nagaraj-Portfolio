import Link from "next/link";
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-950 text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Contact <span className="text-cyan-400">Me</span>
      </h2>

      <div className="max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-md shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">Let’s connect</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I’m always open to opportunities, collaborations, and conversations
          about tech, projects, and growth. Feel free to reach out through any
          of the platforms below.
        </p>

        <div className="flex flex-col  gap-6 md:grid-cols-2 ">
          <a
            href="mailto:rishithn35@gmail.com"
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 hover:border-cyan-400/40 transition"
          >
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="text-lg font-semibold">rishithn35@gmail.com</p>
          </a>

          <Link
            href="https://github.com/rishithnagaraj"
            target="_blank"
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 hover:border-cyan-400/40 transition"
          >
            <p className="text-sm text-gray-500 mb-1">GitHub</p>
            <p className="text-lg font-semibold">github.com/rishithnagaraj</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/rishith-nagaraj-303a23354/"
            target="_blank"
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 hover:border-cyan-400/40 transition"
          >
            <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
            <p className="text-lg font-semibold">
              inkedin.com/in/rishith-nagaraj
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
