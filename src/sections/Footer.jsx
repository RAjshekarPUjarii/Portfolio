import React from "react";
import {
  FaBars,
  FaGithub,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
  FaRandom,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  var currentTime = new Date();
  return (
    <footer>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="font-montserrat text-black">
          RAjshekar PUjari {currentTime.getFullYear()}{" "}
        </h1>
        <div className="flex flex-row gap-4">
          <span>
            <a
              href="https://www.instagram.com/r.a.j.s.h.e.k.a.r.p.u.j.a.r.i/"
              target="_blank"
              className="hover:text-red-500 text-[2rem]"
            >
              {" "}
              <FaInstagram />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/rajshekar-pujari/"
              target="_blank"
              className="hover:text-blue-600 text-[2rem]"
            >
              <FaLinkedin />
            </a>
          </span>

          <span>
            <a
              href="https://github.com/RAjshekarPUjarii"
              target="_blank"
              className="hover:text-black text-[2rem]"
            >
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/Rajshkr_pujari/"
              target="_blank"
              className="hover:text-blue-500 text-[2rem]"
            >
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
