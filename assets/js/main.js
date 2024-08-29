import { openModal } from "./modules/modal.js";
import { carousel } from "./modules/carousel.js";
import { openTab } from "./modules/tabs.js";
import { animaNumbers } from "./modules/countNumbers.js";
import { filterProjects } from "./modules/filter-projects.js";

document.addEventListener("DOMContentLoaded", () => {
    openModal();
    carousel();
    openTab();
    animaNumbers();
    filterProjects();
})