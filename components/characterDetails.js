import styles from "./characterDetails.module.css";
import { createElement } from "../utils/elements.js";

export function createCharacterDetails({
  name,
  status,
  species,
  gender,
  origin,
  location,
}) {
  return createElement("section", {
    className: styles.characterDetailCard,
    children: [
      createElement("h1", { innerText: name }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: gender }),
      createElement("p", { innerText: origin.name }),
      createElement("p", { innerText: location.name }),
    ],
  });
}
