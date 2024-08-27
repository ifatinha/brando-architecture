export function openTab() {
    const tabLinks = document.querySelectorAll(".tab__list-button");
    const tabContents = document.querySelectorAll(".tab__contents-item");

    const setActiveTab = (activeIndex) => {
        tabLinks.forEach((link, index) => {
            link.classList.toggle("tab__button-active", activeIndex === index);
            tabContents[index].classList.toggle("tab__content-active", activeIndex === index);
        })
    }

    tabLinks.forEach((link, index) => {
        link.addEventListener("click", () => setActiveTab(index));
    })

    setActiveTab(0);
}