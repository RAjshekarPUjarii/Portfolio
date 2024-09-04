import { about } from "../constants";
const About = () => {
  const { heading, descriptions, imgURL } = about;
  return (
    <section>
      <div>
        <h1 className="text-3xl text-black font-montserrat tracking-wider py-4 font-semibold underline underline-offset-8 max-lg:text-center ">
          {heading}
        </h1>
      </div>
      <div className="flex flex-row gap-12 max-lg:flex-col justify-center items-center">
        <div>
          <img
            className="rounded-full max-lg:w-[12rem] text-center max-w-full  "
            src={imgURL}
            alt="images"
            width={800}
            height={400}
          />
        </div>
        <div>
          <h1 className="text-2xl text-black  tracking-wider leading-10 max-lg:text-xl font-montserrat max-lg:leading-relaxed">
            {descriptions}
            <span className="px-1 text-sm cursor-pointer hover:underline">
              <a
                href="https://www.linkedin.com/in/rajshekar-pujari/"
                target="_blank"
              >
                Know more about me..
              </a>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
