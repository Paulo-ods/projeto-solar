document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});

// Envio do Formulário com Mensagem de Agradecimento
const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    thankYouMessage.style.display = "block";
    setTimeout(() => {
        thankYouMessage.style.display = "none";
    }, 3000);
    form.reset();
});

// Contador de Fatos Interessantes
const counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
    function updateCount() {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 50);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
});