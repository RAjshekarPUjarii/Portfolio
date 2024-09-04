import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";

const Contact = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-black font-montserrat tracking-wider py-4 font-semibold underline underline-offset-8 max-lg:text-center">
          Skills
        </h1>
      </div>
      <div>
        <Carousel
          plugins={[Autoplay({ delay: 1000 })]}
          className="w-full py-10"
        >
          <CarouselContent className="flex gap-2 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem
                  key={id}
                  className="basis-1/3 lg:basis-1/6 flex flex-col justify-center items-center"
                >
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-1/4 object-contain"
                  />
                  {/* <p className="text-xl"> {name}</p> */}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Contact;
