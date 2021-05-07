import styles from "./details.module.css";
import "./style.css";
import { createElement } from "./utils/elements";
import { getCharacter } from "./utils/api";
import { createCharacterDetails } from "./components/characterDetails";

const params = new URLSearchParams(location.search);
const characterId = params.get("id");

getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement("main", {
  className: styles.main,
  innerText: "Hello visitor, here's what you're looking for:",
});

document.querySelector("#app").append(mainElement);
