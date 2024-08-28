import { openModal } from "./modules/modal.js";
import { carousel } from "./modules/carousel.js";
import { openTab } from "./modules/tabs.js";
import { animaNumbers } from "./modules/countNumbers.js";

document.addEventListener("DOMContentLoaded", () => {
    openModal();
    carousel();
    openTab();
    animaNumbers();
})