import image1 from "../assets/image1.png";
import diceImage from "../assets/dice-game.png";
import drumKitImage from "../assets/Drum-kit.png";
import todoListImage from "../assets/todoList.png";
import myPhoto from "../assets/myPhoto.jpg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Project" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Me" },
];

export const projects = [
  {
    imgURL: diceImage,
    name: "Dice Game",
    live: "https://rajshekarpujarii.github.io/Dice-game/",
    code: "https://github.com/RAjshekarPUjarii/Dice-game",
  },

  {
    imgURL: drumKitImage,
    name: "Drum Kit",
    live: "https://rajshekarpujarii.github.io/drum-kit/",
    code: "https://github.com/RAjshekarPUjarii/drum-kit",
  },
  {
    imgURL: todoListImage,
    name: "Todo-List",
    live: "https://rajshekarpujarii.github.io/Todo-List/",
    code: "https://github.com/RAjshekarPUjarii/Todo-List",
  },
];

export const about = {
  heading: "ABOUT",
  descriptions:
    "I'm Rajshekar Pujari, i'am from Wadi Junction,Kalaburgi, Karnataka. Currently in the final year of my Bachelors degree in Computer Science and Engineering at Sharnbasva University in Kalaburagi , I am deeply passionate about web development. My genuine interest lies in creating user-friendly interfaces, and I'm excited about contributing my skills to Frontend web development.",
  imgURL: myPhoto,
};
