export function filterProjects() {
    const projects = Array.from(document.querySelectorAll("[data-types]"));
    const buttons = document.querySelectorAll("#project-links button");

    const setActiveButton = (index) => {
        buttons.forEach((button, i) => {
            button.classList.toggle("active-button-project", i === index);
        })
    }

    const applyFilter = (type) => {
        projects.forEach(project => {
            const matchesFilter = type === "all" || project.dataset.types.includes(type);
            project.classList.toggle("remove-element", !matchesFilter);
        })
    }

    const handleButtonClick = (button, index) => {
        setActiveButton(index);
        applyFilter(button.dataset.type);
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => handleButtonClick(button, index));
    })

    setActiveButton(0);
    applyFilter("all");
}