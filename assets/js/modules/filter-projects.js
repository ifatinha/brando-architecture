function activeLinks() {
    const buttons = document.querySelectorAll("#project-links button");

    const activeButtons = (index) => {
        buttons.forEach((button, i) => {
            button.classList.toggle("active-button-project", i === index);
        })
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => activeButtons(index));
    })

    activeButtons(0);
}

export function filterProjects() {
    const projects = document.querySelectorAll("[data-projects]");
    const valores = projects[7].dataset.projects;
    const arr = valores.length;

    console.log(valores.substr(1, arr - 2));


    activeLinks();
}