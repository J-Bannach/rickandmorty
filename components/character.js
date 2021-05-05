import { createElement } from "../utils/elements.js";

export function createCharacter({ image, name, status, species, origin }) {
  return createElement("div", {
    className: "characterCard",
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("h3", { innerText: status }),
      createElement("p", { innerText: species }),
      createElement("p", { innerText: origin.name }),
    ],
  });
}
