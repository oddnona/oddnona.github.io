const cards = document.querySelectorAll(".project-card");
const infoPanel = document.querySelector(".project-info");
const infoTitle = document.querySelector("#info-title");
const infoDescription = document.querySelector("#info-description");
const flipButton = document.querySelector("#flip-button");
const desk = document.querySelector(".desk");
const pageDots = document.querySelectorAll(".page-dot");
const projectInfo = {
  weather: {
    pages: [
      {
        title: "Weather Data Web App",
        description:
          'This Web application leverages the "Forbes Top 100 Cities Weather Data (2020-YTD)" dataset to provide both basic and advanced weather data functionalities through a RESTful API and a user-friendly front-end interface.'
      },
      {
        title: "Video Demo",
        description:
          "Press play to watch a playthrough."
      },
      {
        title: "Tech Stack",
        description:
          "These are the languages and frameworks I used."
      },
      {
        title: "Architecture",
        description:
          "This is how I structured the project code."
      },
      {
        title: "Repo Link",
        description:
          "Open the GitHub repository for this project."
      }
    ]
  },

  rts: {
    pages: [
      {
        title: "RTS Game",
        description:
          "A Java real-time strategy battle simulator inspired by the Game of Thrones universe. I can create and edit a map made of locations and routes, place armies and events on the map, and simulate battles between different factions.\n\nThe goal of the game is to use army resources strategically, move through different regions, and conquer enemy territory."
      },
      {
        title: "Video Demo",
        description:
          "Press play to watch a playthrough."
      },
      {
        title: "Tech Stack",
        description:
          "These are the languages and frameworks I used."
      },
      {
        title: "Architecture",
        description:
          "This is how I structured the project code."
      },
      {
        title: "Repo Link",
        description:
          "Open the GitHub repository for this project."
      }
    ]
  },

  rpg: {
    pages: [
      {
        title: "RPG Game",
        description:
          "A Java text-based RPG dungeon crawler where I explore a dungeon, move through rooms, interact with doors and NPCs, collect items, fight enemies, complete quests, and save or load game progress.\n\nThe goal of the game is to survive the dungeon and reach the final room."
      },
      {
        title: "Video Demo",
        description:
          "Press play to watch a playthrough."
      },
      {
        title: "Tech Stack",
        description:
          "These are the languages and frameworks I used."
      },
      {
        title: "Architecture",
        description:
          "This is how I structured the project code."
      },
      {
        title: "Repo Link",
        description:
          "Open the GitHub repository for this project."
      }
    ]
  }
};
let activeCard = null;
let activePage = 1;
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

  if (activePage === 5) {
    closeCard();
    return;
  }

  activeCard.classList.add("is-turning");

  window.setTimeout(() => {
    activePage += 1;
    updateCardPage();
  }, 355);

  window.setTimeout(() => {
    activeCard.classList.remove("is-turning");
  }, 700);
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
  activePage = 1;

  card.style.zIndex = 50;
  card.classList.add("is-active");
  infoPanel.style.setProperty(
    "--active-button-bg",
    getComputedStyle(card).getPropertyValue("--card-button-bg")
  );

  infoPanel.style.setProperty(
    "--active-button-text",
    getComputedStyle(card).getPropertyValue("--card-button-text")
  );

  infoPanel.style.setProperty(
    "--active-button-hover-bg",
    getComputedStyle(card).getPropertyValue("--card-button-hover-bg")
  );

  infoPanel.style.setProperty(
    "--active-button-hover-text",
    getComputedStyle(card).getPropertyValue("--card-button-text")
  );

  cards.forEach((otherCard) => {
    if (otherCard !== card) {
      otherCard.classList.add("is-shadowed");
    }
  });

  updateCardPage();

  infoPanel.classList.add("is-visible");
}

function closeCard() {
  if (activeCard) {
    topPileIndex += 1;
    activeCard.style.zIndex = topPileIndex;
  }

  cards.forEach((card) => {
    card.classList.remove("is-active", "is-shadowed");

    const cardPages = card.querySelectorAll(".card-page");

    cardPages.forEach((page) => {
      page.classList.remove("is-current");
    });

    const firstPage = card.querySelector('.card-page[data-page="1"]');

    if (firstPage) {
      firstPage.classList.add("is-current");
    }
  });

  infoPanel.classList.remove("is-visible");
  flipButton.textContent = "Flip for more";

  activeCard = null;
  activePage = 1;
  pageDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === 0);
  });
}

function updateCardPage() {
  if (!activeCard) return;

  const projectKey = activeCard.dataset.project;
  const selectedProject = projectInfo[projectKey];
  const selectedPageInfo = selectedProject.pages[activePage - 1];

  const cardPages = activeCard.querySelectorAll(".card-page");

  cardPages.forEach((page) => {
    page.classList.remove("is-current");
  });

  const currentPage = activeCard.querySelector(
    `.card-page[data-page="${activePage}"]`
  );

  if (currentPage) {
    currentPage.classList.add("is-current");
  }

  infoTitle.textContent = selectedPageInfo.title;
  infoDescription.textContent = selectedPageInfo.description;

  flipButton.textContent =
    activePage === 5 ? "Put card down" : "Flip for more";
  pageDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activePage - 1);
  });
}