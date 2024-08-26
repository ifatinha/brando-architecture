function createdCarousel(buttons, carouselItens, interval = 4000) {

    let currentIndex = 0;
    let autoSlide;

    const showSlide = (index) => {

        carouselItens.forEach((item, i) => {
            item.classList.toggle("active-carousel", index === i);
        })

        buttons.forEach((button, i) => {
            button.firstElementChild.classList.toggle("active-dot", index === i);
        })

        currentIndex = index;
    }

    const nextSlide = () => {
        const nextSlide = (currentIndex + 1) % carouselItens.length;
        showSlide(nextSlide);
    }

    const startAutoSlide = () => {
        autoSlide = setInterval(nextSlide, interval);
    }

    const stopAutoSlide = () => {
        clearInterval(autoSlide);
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        })
    })

    showSlide(currentIndex);
    startAutoSlide();
}

export function carousel() {
    const buttons = document.querySelectorAll(".carousel__dots-dot");
    const carouselItens = document.querySelectorAll(".carousel__item");

    createdCarousel(buttons, carouselItens);
}