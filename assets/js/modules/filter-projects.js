export function filterProjects() {
    const projects = Array.from(document.querySelectorAll("[data-types]"));
    const buttons = document.querySelectorAll("#project-links button");

    const activeButton = (index) => {
        buttons.forEach((button, i) => {
            button.classList.toggle("active-button-project", i === index);
        })
    }

    const filterProjects = (button, index) => {
        activeButton(index);
        const datasetButton = button.dataset.type;

        projects.forEach(item => {
            const isContains = item.dataset.types.includes(datasetButton);

            if (!isContains) {
                item.classList.toggle("remove-element");
            }
        })
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => filterProjects(button, index));
    })

    activeButton(0);
}