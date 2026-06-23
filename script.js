// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ANIMAÇÃO AO ROLAR
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight / 1.3;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < trigger){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

// MENSAGEM FORMULÁRIO
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Mensagem enviada com sucesso! 🌱");

  form.reset();

});