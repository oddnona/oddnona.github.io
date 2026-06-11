const cards = document.querySelectorAll(".project-card");
const infoPanel = document.querySelector(".project-info");
const infoTitle = document.querySelector("#info-title");
const infoDescription = document.querySelector("#info-description");
const flipButton = document.querySelector("#flip-button");
const desk = document.querySelector(".desk");

const projectInfo = {
  weather: {
    title: "Weather Data Web App",
    description:
      "A full-stack web application for exploring weather data through an interactive interface."
  },
  rts: {
    title: "RTS Game",
    description:
      "A real-time strategy school project focused on game systems, interaction, and tactical play."
  },
  rpg: {
    title: "RPG Game",
    description:
      "A mini dungeon crawler RPG built around exploration, combat, and simple progression systems."
  }
};

let activeCard = null;
let topPileIndex = 5;

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation();

    if (activeCard && activeCard !== card) return;

    if (activeCard === card) return;

    openCard(card);
  });
});
flipButton.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!activeCard) return;

  activeCard.classList.toggle("is-flipped");

  flipButton.textContent = activeCard.classList.contains("is-flipped")
    ? "Turn Card Back"
    : "Turn Card Over";
});

desk.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".project-card");
  const clickedInfo = event.target.closest(".project-info");

  if (!clickedCard && !clickedInfo) {
    closeCard();
  }
});

function openCard(card) {
  closeCard();

  activeCard = card;
  const projectKey = card.dataset.project;
  const selectedProject = projectInfo[projectKey];

  card.style.zIndex = 50;
  card.classList.add("is-active");

  cards.forEach((otherCard) => {
    if (otherCard !== card) {
      otherCard.classList.add("is-shadowed");
    }
  });

  infoTitle.textContent = selectedProject.title;
  infoDescription.textContent = selectedProject.description;
  flipButton.textContent = "Turn Card Over";

  infoPanel.classList.add("is-visible");
}

function closeCard() {
  if (activeCard) {
    topPileIndex += 1;
    activeCard.style.zIndex = topPileIndex;
  }

  cards.forEach((card) => {
    card.classList.remove("is-active", "is-flipped", "is-shadowed");
  });

  infoPanel.classList.remove("is-visible");
  activeCard = null;
}