// import Nav from "./components/Nav";
import ScrollHandler from "./components/ScrollHandler";
import { Hero, Project, About, Contact, Footer } from "./sections";

export default function App() {
  return (
    <main id="home">
      <section className="border-solid border-2 text-black  w-full ">
        <ScrollHandler />
      </section>
      <section className=" sm:px-16 px-8 sm:py-10 py-12 mt-[4.3rem] border-solid border-1 border-red-600 bg-light-black text-white ">
        <Hero />
      </section>

      <section
        id="project"
        className="sm:px-16 px-8 sm:py-10 py-12 border-solid border-1 border-red-600 bg-light-black text-white "
      >
        <Project />
      </section>

      <section
        id="about"
        className="sm:px-16 px-8 sm:py-10 py-12  border-solid border-1 border-red-600 bg-light-black text-white"
      >
        <About />
      </section>

      <section
        id="skills"
        className="sm:px-16 px-8 sm:py-10 py-12 bg-light-black border-solid border-1 border-red-600 text-white"
      >
        <Contact />
      </section>

      <section
        id="#footer"
        className="sm:px-16 px-8 sm:py-8 py-12 bg-violet-600 border-solid border-1 border-red-600  text-white"
      >
        <Footer />
      </section>
    </main>
  );
}
