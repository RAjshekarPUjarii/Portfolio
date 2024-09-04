import image1 from "../assets/image1.png";
import diceImage from "../assets/dice-game.png";
import drumKitImage from "../assets/Drum-kit.png";
import todoListImage from "../assets/todoList.png";
import myPhoto from "../assets/myPhoto.jpg";
import bloodBankImage from "../assets/images/blood-bank.jpg";
import twitterImage from "../assets/twitter-clone.png";
import TinDogImage from "../assets/tindogclone.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

export const projects = [
  {
    imgURL: bloodBankImage,
    name: "Blood Bank Application",
    code: "https://github.com/RAjshekarPUjarii/Blood-Bank-Application",
  },
  {
    imgURL: twitterImage,
    name: "Blood Bank Application",
    code: "https://github.com/RAjshekarPUjarii/Twitter-Clone",
  },
  {
    imgURL: todoListImage,
    name: "Todo-List",
    code: "https://github.com/RAjshekarPUjarii/Todo-List",
  },

  {
    imgURL: diceImage,
    name: "Dice Game",
    code: "https://github.com/RAjshekarPUjarii/Dice-game",
  },

  {
    imgURL: drumKitImage,
    name: "Drum Kit",
    code: "https://github.com/RAjshekarPUjarii/drum-kit",
  },
  {
    imgURL: TinDogImage,
    name: "TinDog-Clone",
    code: "https://github.com/RAjshekarPUjarii/Tindog-project",
  },
];

export const about = {
  heading: "ABOUT",
  descriptions: `I graduated with a Bachelor of Engineering in Computer Science in 2024.
I'm passionate about learning and exploring new technologies.
My goal is to deepen my understanding of the field.
I have a keen interest in web development.
Creating user-friendly interfaces excites me.
I'm eager to contribute my skills to full stack development.`,
  imgURL: myPhoto,
};
