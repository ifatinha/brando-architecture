export function animaNumbers() {
    let counts = document.querySelectorAll("[data-count]");
    const sectionCounts = document.querySelector("#count");
    const speed = 200;
    const initialDelay = 600;

    const startCounting = () => {
        counts.forEach(counter => {
            const count = +counter.getAttribute("data-count");
            let start = 0;
            const increment = Math.max(Math.ceil(count / speed), 1); // Garante que o incremento seja ao menos 1

            setTimeout(() => {
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= count) {
                        counter.innerText = count;
                        clearInterval(timer);
                    } else {
                        counter.innerText = start;
                    }
                }, 25 * Math.random());
            }, initialDelay);
        });
    }

    const checkIfView = () => {
        const rect = sectionCounts.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            startCounting();
            counts = [];
        }
    }

    window.addEventListener("scroll", checkIfView);
    checkIfView();

}
