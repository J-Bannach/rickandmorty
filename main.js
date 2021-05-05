import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { createCharacter } from "./components/character";
import { getCharacters } from "./utils/api";
import { debounce } from "./utils/timer";

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
        createElement("input", {
          className: "input",
          placeholder: "search name",
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(characterSection);

            const search = event.target.value;
            getCharacters(search).then((characters) => {
              const characterElements = characters.map(createCharacter);
              characterSection.append(...characterElements);
            });
          }, 300),
        }),
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
