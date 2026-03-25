import Image from "next/image";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      <Dashboard />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m <span className="text-blue-800">Rishith Nagaraj</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-300 md:text-2xl">
            Computer Science student focused on software engineering, web
            development, real-world problem solving.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#about">
              <button className="rounded-xl bg-blue-800 px-6 py-3 font-semibold text-black  hover:font-bold hover:bg-blue-950">
                Discover more
              </button>
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative h-[500px] w-[380px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <Image
              src="/Pfp.png"
              alt="Rishith Nagaraj"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Resume />
      <Contact />
    </main>
  );
}
