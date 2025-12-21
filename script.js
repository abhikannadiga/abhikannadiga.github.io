// Accordion open/close
const accButtons = document.querySelectorAll(".accordion-btn");

accButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const content = btn.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
