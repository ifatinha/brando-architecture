import { openModal } from "./modules/modal.js";
import { carousel } from "./modules/carousel.js";
import { openTab } from "./modules/tabs.js";

document.addEventListener("DOMContentLoaded", () => {
    openModal();
    carousel();
    openTab();
})