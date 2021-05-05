import "./style.css";
import { createElement } from "./utils/elements";
import { createCharacter } from "./components/character";

const characters = [
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
  {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
  },
];

const mainElement = createElement("main", {
  className: "mainPage",
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", { innerText: "Rick and Morty Fun" }),
        createElement("input", { placeholder: "search name" }),
      ],
    }),
    createElement("section", {
      className: "resultsSection",
      children: characters.map(createCharacter),
    }),
    createElement("footer", {
      className: "footerSection",
      children: [
        createElement("p", { innerText: "look at me, I'm a footer!" }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
