const Contact = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl text-black font-montserrat tracking-wider py-4 font-semibold underline underline-offset-8 max-lg:text-center">
          Contact Me
        </h1>
      </div>
      <div>
        <div>
          <form action="post" className="flex flex-col gap-4">
            <label className="text-black text-2xl  font-mon " htmlFor="name">
              Your Name
            </label>
            <input
              className="h-12 text-black px-4 placeholder-black bg-violet-400 border-white-400 border-2"
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Name"
              required
            />
            <label className="text-black text-2xl  font-mon " htmlFor="email">
              Email
            </label>
            <input
              className=" h-12 text-black px-4 placeholder-black bg-violet-400 border-white-400 border-2 "
              type="text"
              name=""
              id="email"
              placeholder="Enter Your Email"
            />

            <label
              className="text-black text-2xl  font-mon "
              htmlFor="something"
            >
              Message
            </label>

            <textarea
              className="px-4 py-4 text-black  font-montserrat placeholder-black bg-violet-400 border-white-400 bottom-8 border-solid border-2 "
              name=""
              id="something"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <button
              className="transition duration-75 ease-in-out hover:bg-light-black mt-4    bg-violet-400  hover:border-2  px-4 py-2 rounded-3xl text-black hover:text-white  "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
