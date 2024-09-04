import { projects } from "../constants";

const Project = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-black font-montserrat tracking-wider py-4 font-semibold underline underline-offset-8 max-lg:text-center">
          PROJECTS
        </h1>
      </div>
      <div className=" flex flex-row   justify-evenly  gap-10 max-lg:flex-col max-lg:gap-12 max-lg:justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ imgURL, name, code }) => (
            <div
              key={name}
              className="flex flex-col gap-3 justify-center items-center rounded object-cover drop-shadow-xl"
            >
              <a href={code} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded transition-transform duration-300 ease-in-out transform hover:scale-110 max-lg:rounded-none max-lg:mt-10 max-lg:w-[13rem] max-lg:mr-10 max-lg:ml-10 object-cover w-[400px] h-[200px]"
                  src={imgURL}
                  alt={name}
                  width={400}
                  height={250}
                  draggable="false"
                />
              </a>
              <h1 className="text-black text-2xl font-mon">{name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
