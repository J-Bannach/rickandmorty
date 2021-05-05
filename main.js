import "./style.css";
import { createElement } from "./utils/elements";
import { createCharacter } from "./components/character";
import { getCharacters } from "./utils/api";

const characterSection = createElement("section", {
  className: "resultsSection",
});

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacter);
  characterSection.append(...characterElements);

  console.log(characters.results);
});
// createCharacter.map(data.results);

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
    characterSection,
    // createElement("section", {
    //   className: "resultsSection",
    //   // children: characters.map(createCharacter),
    // }),

    createElement("footer", {
      className: "footerSection",
      children: [
        createElement("p", { innerText: "look at me, I'm a footer!" }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
