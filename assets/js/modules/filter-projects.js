export function filterProjects() {
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