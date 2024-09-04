import image1 from "../assets/images/hero.svg";
import image2 from "../assets/image2.png";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section>
      {/* main-heading */}
      <div className="flex flex-row justify-around gap-9 max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="flex flex-col max-lg:text-center gap-3">
          <h1 className="text-8xl text-black font-extrabold font-montserrat max-lg:text-center max-lg:text-4xl tracking-[0.3rem] bg-clip-text text-transparent bg-gradient-to-r from-black to-violet-600 ">
            <span className=" text-2xl ">Hello,</span>
            <br />
            I'am RAJSHEKAR PUJARI
            {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
          </h1>

          {/* hire me button */}
          <div className=" hover:border-solid hover:border-light-black ">
            <Button className="hover:bg-light-black mt-4    bg-violet-400  hover:border-2  px-4 py-2 rounded-2xl text-black hover:text-white">
              <a
                href="https://www.linkedin.com/in/rajshekar-pujari/"
                target="_blank"
              >
                Hire Me
              </a>
            </Button>
          </div>
        </div>
        {/* image */}
        <div className="max-lg:flex  max-lg:flex-col max-lg:gap-9  flex flex-col gap-9 justify-center items-center">
          <img
            className="rounded max-lg:w-[20rem]"
            src={image1}
            alt="images"
            width={700}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
