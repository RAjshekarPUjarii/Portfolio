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
        {projects.map(({ imgURL, name, live, code }) => (
          <div
            key={name}
            className="flex flex-col gap-3 justify-center items-center bg-violet-300 rounded-[2rem]  max-w-[30rem]   "
          >
            <img
              className=" rounded-[2rem] max-lg:rounded-none max-lg:mt-10 max-lg:w-[13rem] max-lg:mr-10 max-lg:ml-10  object-cover "
              src={imgURL}
              alt="image"
              width={500}
              height={300}
            />
            <h1 className="text-black text-2xl  font-mon ">{name}</h1>
            <div className="space-x-10 px-4 py-3 ">
              <button className="transition duration-700 ease-in-out hover:bg-light-black   bg-violet-400  hover:border-2  px-4 py-2 rounded-2xl text-black hover:text-white">
                {" "}
                <a href={live} target="_blank">
                  Live
                </a>
              </button>
              <button className="transition duration-75 ease-in-out hover:bg-light-black     bg-violet-400  hover:border-2  px-4 py-2 rounded-2xl text-black hover:text-white">
                {" "}
                <a href={code} target="_blank">
                  Github
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
