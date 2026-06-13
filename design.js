const journals = [
    {
        id: "nature2u",
        title: "Nature2U",
        coverLabel: "Nature2U",
        entries: [
            {
                image: "n2u1.jpg",
                alt: "Nature2U illustration sample 1",
                heading: "Mobile App Illustrations",
                body: "A collection of custom illustrations created for the Nature2U mobile application, designed to support a friendly and nature-inspired visual identity.",
                layout: "image-left"
            },
            {
                image: "n2u2.jpeg",
                alt: "Nature2U illustration sample 2",
                heading: "Visual System",
                body: "The illustrations were designed to feel consistent across screens while remaining approachable, warm, and easy to understand.",
                layout: "text-left"
            },
            {
                image: "n2u3.jpg",
                alt: "Nature2U illustration sample 3",
                heading: "Commission Outcome",
                body: "The final assets helped give the application a more polished and engaging personality through custom-made visuals.",
                layout: "image-left"
            }
        ]
    },
    {
        id: "nato-romania",
        title: "NATO Romania",
        coverLabel: "NATO Romania",
        entries: [
            {
                image: "nato1.jpg",
                alt: "NATO Romania design sample 1",
                heading: "Logo Concept",
                body: "A logo concept for NATO NSIP Romania, focused on professionalism, reliability, and institutional clarity.",
                layout: "image-left"
            },
            {
                image: "nato2.jpg",
                alt: "NATO Romania design sample 2",
                heading: "Poster Presentation",
                body: "The logo was presented in a poster-style format to show how the visual identity could appear in a formal communication context.",
                layout: "text-left"
            },
            {
                image: "nato3.jpg",
                alt: "NATO Romania design sample 3",
                heading: "Design Direction",
                body: "The design direction emphasized structure, symmetry, and a visual connection to national and international infrastructure programs.",
                layout: "image-left"
            },
            {
                image: "nato4.jpeg",
                alt: "NATO Romania design sample 4",
                heading: "Application",
                body: "Additional mockups show how the logo could function across documents, banners, or digital materials.",
                layout: "text-left"
            }
        ]
    },
    {
        id: "free-time",
        title: "In My Free Time",
        coverLabel: "In My Free Time",
        entries: [
            {
                image: "misc1.jpg",
                alt: "Personal design work sample 1",
                heading: "Personal Experiments",
                body: "A selection of visual experiments and design explorations created outside of formal commissions.",
                layout: "image-left"
            },
            {
                image: "misc2.jpg",
                alt: "Personal design work sample 2",
                heading: "Illustration Practice",
                body: "Personal illustration work allows me to test styles, compositions, and visual ideas in a looser context.",
                layout: "text-left"
            },
            {
                image: "misc3.jpg",
                alt: "Personal design work sample 3",
                heading: "Design Studies",
                body: "This section can include studies, sketches, poster concepts, or other visual pieces that show creative range.",
                layout: "image-left"
            },
            {
                image: "misc4.jpg",
                alt: "Personal design work sample 4",
                heading: "Playful Direction",
                body: "Free-time projects are often where I explore more playful, expressive, or experimental design choices.",
                layout: "text-left"
            },
            {
                image: "misc5.jpg",
                alt: "Personal design work sample 5",
                heading: "Portfolio Extras",
                body: "These works add personality to the portfolio and show interests beyond client-focused design.",
                layout: "image-left"
            },
            {
                image: "misc6.jpg",
                alt: "Personal design work sample 6",
                heading: "Ongoing Work",
                body: "This journal can continue growing over time as I create more personal illustrations and design pieces.",
                layout: "text-left"
            }
        ]
    }
];

const designSection = document.getElementById("designCommissions");
const shelf = document.getElementById("journalShelf");
const stage = document.getElementById("journalStage");
const widget = document.getElementById("journalWidget");
const closeButton = document.getElementById("journalClose");
const titleElement = document.getElementById("journalTitle");
const carousel = document.getElementById("spreadCarousel");

let activeJournal = null;
let activeSpreadIndex = 0;
let wheelLocked = false;
let wheelTotal = 0;

function buildShelf() {
    shelf.innerHTML = "";

    journals.forEach((journal) => {
        const book = document.createElement("button");
        book.className = "book-spine";
        book.type = "button";
        book.dataset.journalId = journal.id;
        book.setAttribute("aria-label", `Open ${journal.title} journal`);

        const label = document.createElement("span");
        label.className = "book-spine-title";
        label.textContent = journal.coverLabel;

        book.appendChild(label);

        book.addEventListener("click", () => {
            openJournal(journal.id);
        });

        shelf.appendChild(book);
    });
}

function openJournal(journalId) {
    activeJournal = journals.find((journal) => journal.id === journalId);
    activeSpreadIndex = 0;
    wheelLocked = true;
    wheelTotal = 0;

    if (!activeJournal) {
        return;
    }

    titleElement.textContent = activeJournal.title;
    buildSpreads();

    designSection.classList.add("journal-is-open");
    stage.classList.add("is-open");
    stage.setAttribute("aria-hidden", "false");

    updateSpreadPositions();

    setTimeout(() => {
        wheelLocked = false;
    }, 650);
}

function closeJournal() {
    activeJournal = null;
    activeSpreadIndex = 0;
    wheelLocked = false;
    wheelTotal = 0;

    designSection.classList.remove("journal-is-open");
    stage.classList.remove("is-open");
    stage.setAttribute("aria-hidden", "true");

    setTimeout(() => {
        if (!activeJournal) {
            carousel.innerHTML = "";
        }
    }, 300);
}

function buildSpreads() {
    carousel.innerHTML = "";

    activeJournal.entries.forEach((entry, index) => {
        const spread = document.createElement("article");
        spread.className = "journal-spread";
        spread.dataset.index = index;

        const imagePage = createImagePage(entry);
        const textPage = createTextPage(entry);

        if (entry.layout === "text-left") {
            spread.appendChild(textPage);
            spread.appendChild(imagePage);
        } else {
            spread.appendChild(imagePage);
            spread.appendChild(textPage);
        }

        carousel.appendChild(spread);
    });
}

function createImagePage(entry) {
    const page = document.createElement("div");
    page.className = "journal-page page-image";

    const img = document.createElement("img");
    img.src = entry.image;
    img.alt = entry.alt;

    page.appendChild(img);

    return page;
}

function createTextPage(entry) {
    const page = document.createElement("div");
    page.className = "journal-page page-text";

    const heading = document.createElement("h4");
    heading.textContent = entry.heading;

    const body = document.createElement("p");
    body.textContent = entry.body;

    page.appendChild(heading);
    page.appendChild(body);

    return page;
}

function updateSpreadPositions() {
    const spreads = carousel.querySelectorAll(".journal-spread");

    spreads.forEach((spread, index) => {
        spread.classList.remove(
            "is-active",
            "is-prev",
            "is-next",
            "is-hidden-left",
            "is-hidden-right"
        );

        if (index === activeSpreadIndex) {
            spread.classList.add("is-active");
        } else if (index === activeSpreadIndex - 1) {
            spread.classList.add("is-prev");
        } else if (index === activeSpreadIndex + 1) {
            spread.classList.add("is-next");
        } else if (index < activeSpreadIndex) {
            spread.classList.add("is-hidden-left");
        } else {
            spread.classList.add("is-hidden-right");
        }
    });
}

function goToPreviousSpread() {
    if (!activeJournal) {
        return;
    }

    if (activeSpreadIndex > 0) {
        activeSpreadIndex -= 1;
        updateSpreadPositions();
    }
}

function goToNextSpread() {
    if (!activeJournal) {
        return;
    }

    if (activeSpreadIndex < activeJournal.entries.length - 1) {
        activeSpreadIndex += 1;
        updateSpreadPositions();
    }
}

function handleWheelNavigation(event) {
    if (!activeJournal) {
        return;
    }

    event.preventDefault();

    if (wheelLocked) {
        return;
    }

    wheelTotal += event.deltaY + event.deltaX;

    if (Math.abs(wheelTotal) < 90) {
        return;
    }

    wheelLocked = true;

    if (wheelTotal > 0) {
        goToNextSpread();
    } else {
        goToPreviousSpread();
    }

    wheelTotal = 0;

    setTimeout(() => {
        wheelLocked = false;
    }, 620);
}

closeButton.addEventListener("click", closeJournal);

stage.addEventListener("click", (event) => {
    if (!widget.contains(event.target)) {
        closeJournal();
    }
});

document.addEventListener("keydown", (event) => {
    if (!activeJournal) {
        return;
    }

    if (event.key === "Escape") {
        closeJournal();
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousSpread();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextSpread();
    }
});

document.addEventListener("wheel", handleWheelNavigation, { passive: false });

buildShelf();