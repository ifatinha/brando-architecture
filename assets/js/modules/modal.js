export function openModal() {
    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");

    function toggleModal() {
        modal.classList.toggle("open-modal")
    }

    openModalButton.addEventListener("click", toggleModal);
    closeModalButton.addEventListener("click", toggleModal);
}