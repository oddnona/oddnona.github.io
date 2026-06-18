const journals = [
    {
        id: "nature2u",
        title: "Nature2U",
        coverLabel: "Nature2U",
        themeClass: "theme-nature",
        logo: {
            image: "n2ulogo.png",
            x: 52,
            y: 28,
            width: 87,
            rotate: 0
        },
        book: {
            x: 50,
            bottom: 35,
            width: 178,
            height: 430,
            spineWidth: 58,
            spineImage: "n2uspine.jpg",
            spineColor: "#efe1cc",
            coverColor: "#b05a32",
            textColor: "#4b2f1f",
            tilt: "-1deg"
        },
        entries: [
            {
                image: "n2u1.jpg",
                alt: "Nature2U illustration sample 1",
                heading: "Mobile App Illustrations",
                body: "s.",
                layout: "image-left"
            },
            {
                image: "n2u2.JPEG",
                alt: "Nature2U illustration sample 2",
                heading: "merch",
                body: "d",
                layout: "text-left"
            },
            {
                image: "n2u3.jpg",
                alt: "Nature2U illustration sample 3",
                heading: "Commission Outcome",
                body: "r",
                layout: "image-left"
            }
        ]
    },
    {
        id: "nato-romania",
        title: "NATO Romania",
        coverLabel: "NATO Romania",
        themeClass: "theme-nato",
        logo: {
            image: "natologo.png",
            x: 50,
            y: 26,
            width: 95,
            rotate: 1
        },
        book: {
            x: 57,
            bottom: 30,
            width: 170,
            height: 205,
            spineWidth: 56,
            spineImage: "natospine.jpg",
            spineColor: "#9b5d34",
            coverColor: "#17243a",
            textColor: "#efe8d2",
            tilt: "0deg"
        },
        entries: [
            {
                image: "nato1.JPG",
                alt: "NATO Rom      ania design sample 1",
                heading: "Logo ",
                body: "A logo concept for NATO NSIP Romania, focused on professionalism, reliability, and institutional clarity.",
                layout: "image-left"
            },
            {
                image: "nato2.JPG",
                alt: "NATO Romania design sample 2",
                heading: "banner",
                body: "f",
                layout: "text-left"
            },
            {
                image: "nato3.JPG",
                alt: "NATO Romania design sample 3",
                heading: "d",
                body: "d",
                layout: "image-left"
            },
            {
                image: "nato4.jpeg",
                alt: "NATO Romania design sample 4",
                heading: "f",
                body: "r",
                layout: "text-left"
            }
        ]
    },
    {
        id: "free-time",
        title: "In My Free Time",
        coverLabel: "In My Free Time",
        themeClass: "theme-free-time",
        logo: {
            image: "misclogo.png",
            x: 50,
            y: 45,
            width: 76,
            rotate: 0
        },
        book: {
            x: 63,
            bottom: 30,
            width: 190,
            height: 355,
            spineWidth: 60,
            spineImage: "miscspine.jpg",
            spineColor: "#c58a65",
            coverColor: "#000000",
            textColor: "#dca89a",
            tilt: "1deg"
        },
        entries: [
            {
                image: "misc2.JPG",
                alt: "Personal design work sample 1",
                heading: "d",
                body: "d",
                layout: "image-left"
            },
            {
                image: "misc6.jpg",
                alt: "Personal design work sample 2",
                heading: "d",
                body: "d.",
                layout: "text-left"
            },
            {
                image: "misc4.JPG",
                alt: "Personal design work sample 3",
                heading: "x",
                body: "x",
                layout: "image-left"
            },
            {
                image: "misc3.JPG",
                alt: "Personal design work sample 4",
                heading: "e",
                body: "s",
                layout: "text-left"
            },
            {
                image: "misc5.jpg",
                alt: "Personal design work sample 5",
                heading: "s",
                body: "x",
                layout: "image-left"
            },
            {
                image: "misc1.JPG",
                alt: "Personal design work sample 6",
                heading: "x",
                body: "x",
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
let previewedJournalId = null;
function buildShelf() {
    shelf.innerHTML = "";

    journals.forEach((journal, index) => {
        const book = document.createElement("button");
        book.className = "book";

        if (index === 0) {
            book.classList.add("book-left");
        }

        if (index === 1) {
            book.classList.add("book-center");
        }

        if (index === 2) {
            book.classList.add("book-right");
        }

        book.type = "button";
        book.dataset.journalId = journal.id;
        book.setAttribute("aria-label", `Preview ${journal.title} journal`);

        book.style.setProperty("--book-x", `${journal.book.x}%`);
        book.style.setProperty("--book-bottom", `${journal.book.bottom}%`);
        book.style.setProperty("--book-width", `${journal.book.width}px`);
        book.style.setProperty("--book-height", `${journal.book.height}px`);
        book.style.setProperty("--spine-width", `${journal.book.spineWidth}px`);
        book.style.setProperty("--spine-image", `url("${journal.book.spineImage}")`);
        book.style.setProperty("--spine-color", journal.book.spineColor);
        book.style.setProperty("--cover-color", journal.book.coverColor);
        book.style.setProperty("--book-text-color", journal.book.textColor);
        book.style.setProperty("--book-tilt", journal.book.tilt);
        const inner = document.createElement("div");
        inner.className = "book-inner";

        const spine = document.createElement("div");
        spine.className = "book-spine";

        const cover = document.createElement("div");
        cover.className = "book-cover";

        const spineLogo = document.createElement("img");
        spineLogo.className = "book-spine-logo";
        spineLogo.src = journal.logo.image;
        spineLogo.alt = "";
        spineLogo.setAttribute("aria-hidden", "true");

        const coverLogo = document.createElement("img");
        coverLogo.className = "book-cover-logo";
        coverLogo.src = journal.logo.image;
        coverLogo.alt = "";
        coverLogo.setAttribute("aria-hidden", "true");

        const spineTitle = document.createElement("span");
        spineTitle.className = "book-spine-title";
        spineTitle.textContent = journal.coverLabel;

        const coverTitle = document.createElement("span");
        coverTitle.className = "book-cover-title";
        coverTitle.textContent = journal.coverLabel;

        spine.appendChild(spineLogo);
        spine.appendChild(spineTitle);

        cover.appendChild(coverLogo);
        cover.appendChild(coverTitle);

        inner.appendChild(cover);
        inner.appendChild(spine);

        book.appendChild(inner);

        book.addEventListener("click", (event) => {
            event.stopPropagation();

            const clickedAlreadyPreviewed = previewedJournalId === journal.id;

            if (clickedAlreadyPreviewed) {
                openJournal(journal.id);
                return;
            }

            previewedJournalId = journal.id;

            shelf.querySelectorAll(".book").forEach((shelfBook) => {
                shelfBook.classList.remove("is-previewed");
                shelfBook.setAttribute(
                    "aria-label",
                    `Preview ${journals.find((item) => item.id === shelfBook.dataset.journalId).title} journal`
                );
            });

            book.classList.add("is-previewed");
            book.setAttribute("aria-label", `Open ${journal.title} journal`);
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

    widget.classList.remove("theme-nature", "theme-nato", "theme-free-time");
    widget.classList.add(activeJournal.themeClass);

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
    previewedJournalId = null;

    shelf.querySelectorAll(".book").forEach((book) => {
        book.classList.remove("is-previewed");
    });

    designSection.classList.remove("journal-is-open");
    stage.classList.remove("is-open");
    stage.setAttribute("aria-hidden", "true");

    setTimeout(() => {
        if (!activeJournal) {
            carousel.innerHTML = "";
            widget.classList.remove("theme-nature", "theme-nato", "theme-free-time");
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
    const clickedPage = event.target.closest(".journal-page");
    const clickedCloseButton = event.target.closest(".journal-close");

    if (clickedPage || clickedCloseButton) {
        return;
    }

    closeJournal();
});

document.addEventListener("click", (event) => {
    if (activeJournal) {
        return;
    }

    if (event.target.closest(".book")) {
        return;
    }

    previewedJournalId = null;

    shelf.querySelectorAll(".book").forEach((book) => {
        book.classList.remove("is-previewed");
    });
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