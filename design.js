const journals = [
    {
        id: "nature2u",
        title: "Nature2U",
        coverLabel: "Nature2U",
        themeClass: "theme-nature",
        logo: {
            image: "n2ulogo.png",
            x: 50,
            y: 13,
            width: 91,
            rotate: 0
        },
        coverLogo: {
            x: 50,
            y: 50,
            width: 96,
            rotate: 0,
            skewY: -4,
            scaleX: 0.94
        },
        book: {
            x: 48,
            bottom: 35,
            width: 180,
            height: 230,
            spineWidth: 63,
            spineImage: "n2uspine.jpg",
            spineColor: "#939f5d",
            coverColor: "#a34021",
            textColor: "#403534",
            tilt: "0deg",
            spineTitleX: "50%",
            spineTitleY: "34%",
            spineTitleSize: 0.47
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
            y: 25,
            width: 83,
            rotate: 0
        },
        coverLogo: {
            x: 50,
            y: 42,
            width: 100,
            rotate: 0,
            skewY: -4,
            scaleX: 0.94
        },
        book: {
            x: 54,
            bottom: 33,
            width: 170,
            height: 270,
            spineWidth: 60,
            spineImage: "natospine.jpg",
            coverColor: "#17243a",
            spineColor: "#000000",
            textColor: "#efe8d2",
            tilt: "0deg",
            spineTitleX: "50%",
            spineTitleY: "65%",
            spineTitleSize: 0.27
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
            y: 48,
            width: 66,
            rotate: 0
        },
        coverLogo: {
            x: 50,
            y: 49,
            width: 85,
            rotate: 0,
            skewY: -4,
            scaleX: 0.94
        },
        book: {
            x: 60,
            bottom: 35,
            width: 170,
            height: 185,
            spineWidth: 73,
            spineImage: "miscspine.jpg",
            coverColor: "#dca89a",
            spineColor: "#b98779",
            textColor: "#000000",
            tilt: "0deg",
            spineTitleX: "50%",
            spineTitleY: "25%",
            spineTitleSize: 0.22
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

let isFlipAnimating = false;
let flipDirection = null;
let outgoingSpreadIndex = null;
let incomingSpreadIndex = null;
let flipMidpointTimer = null;
let flipFinishTimer = null;
const FLIP_ANIMATION_MS = 800;
const SCENE_BASE_WIDTH = 1686;
const BOOK_SCENE_SCALE = 1.25;

function sceneVw(pixelValue) {
    return `${((pixelValue * BOOK_SCENE_SCALE) / SCENE_BASE_WIDTH) * 100}vw`;
}
const NEIGHBOR_MOVES = {
    n2uPreviewCenter: 50,
    n2uPreviewRight: 45,

    natoPreviewLeft: -35,
    natoPreviewRight: 25,

    miscPreviewLeft: -22,
    miscPreviewCenter: -30
};

function setShelfMovementVariables() {
    shelf.style.setProperty("--move-n2u-preview-center", sceneVw(NEIGHBOR_MOVES.n2uPreviewCenter));
    shelf.style.setProperty("--move-n2u-preview-right", sceneVw(NEIGHBOR_MOVES.n2uPreviewRight));

    shelf.style.setProperty("--move-nato-preview-left", sceneVw(NEIGHBOR_MOVES.natoPreviewLeft));
    shelf.style.setProperty("--move-nato-preview-right", sceneVw(NEIGHBOR_MOVES.natoPreviewRight));

    shelf.style.setProperty("--move-misc-preview-left", sceneVw(NEIGHBOR_MOVES.miscPreviewLeft));
    shelf.style.setProperty("--move-misc-preview-center", sceneVw(NEIGHBOR_MOVES.miscPreviewCenter));
}

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
        book.style.setProperty("--book-width", sceneVw(journal.book.width));
        book.style.setProperty("--book-height", sceneVw(journal.book.height));
        book.style.setProperty("--spine-width", sceneVw(journal.book.spineWidth));
        book.style.setProperty("--spine-color", journal.book.spineColor);
        book.style.setProperty("--cover-color", journal.book.coverColor);
        book.style.setProperty("--book-text-color", journal.book.textColor);
        book.style.setProperty("--book-tilt", journal.book.tilt);
        book.style.setProperty("--spine-title-x", journal.book.spineTitleX ?? "50%");
        book.style.setProperty("--spine-title-y", journal.book.spineTitleY ?? "32%");
        book.style.setProperty("--spine-title-size", journal.book.spineTitleSize ?? 0.22);

        const inner = document.createElement("div");
        inner.className = "book-inner";

        const object = document.createElement("div");
        object.className = "book-object";

        const bottomPlane = document.createElement("div");
        bottomPlane.className = "book-bottom-plane";
        bottomPlane.setAttribute("aria-hidden", "true");

        const spineFace = document.createElement("div");
        spineFace.className = "book-face book-spine";

        const coverFace = document.createElement("div");
        coverFace.className = "book-face book-cover";

        const coverLogo = document.createElement("img");
        coverLogo.className = "book-cover-logo";
        coverLogo.src = journal.logo.image;
        coverLogo.alt = "";
        coverLogo.setAttribute("aria-hidden", "true");

        coverLogo.style.setProperty("--logo-x", `${journal.coverLogo?.x ?? 50}%`);
        coverLogo.style.setProperty("--logo-y", `${journal.coverLogo?.y ?? 42}%`);
        coverLogo.style.setProperty("--logo-width", `${journal.coverLogo?.width ?? 64}%`);
        coverLogo.style.setProperty("--logo-rotate", `${journal.coverLogo?.rotate ?? 0}deg`);

        const spineTitle = document.createElement("span");
        spineTitle.className = "book-spine-title";
        spineTitle.textContent = journal.coverLabel;

        spineFace.appendChild(spineTitle);
        coverFace.appendChild(coverLogo);

        object.appendChild(bottomPlane);
        object.appendChild(spineFace);
        object.appendChild(coverFace);

        inner.appendChild(object);
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
                const shelfBookJournal = journals.find((item) => {
                    return item.id === shelfBook.dataset.journalId;
                });

                shelfBook.classList.remove("is-previewed");
                shelfBook.setAttribute(
                    "aria-label",
                    `Preview ${shelfBookJournal.title} journal`
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

    clearFlipTimers();

    isFlipAnimating = false;
    flipDirection = null;
    outgoingSpreadIndex = null;
    incomingSpreadIndex = null;

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

    clearFlipTimers();

    isFlipAnimating = false;
    flipDirection = null;
    outgoingSpreadIndex = null;
    incomingSpreadIndex = null;

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

        spread.appendChild(imagePage);
        spread.appendChild(textPage);

        carousel.appendChild(spread);
    });

    const flipAxis = document.createElement("div");
    flipAxis.className = "journal-flip-axis";
    flipAxis.setAttribute("aria-hidden", "true");

    const flipPage = document.createElement("div");
    flipPage.className = "journal-flip-page";

    flipAxis.appendChild(flipPage);
    carousel.appendChild(flipAxis);
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

function createPageForSide(entry, side) {
    if (side === "left") {
        return createImagePage(entry);
    }

    return createTextPage(entry);
}

function setFlipPageContent(entry, side) {
    const flipPage = carousel.querySelector(".journal-flip-page");

    if (!flipPage) {
        return;
    }

    const page = createPageForSide(entry, side);
    const content = document.createElement("div");

    content.className = "journal-flip-content";

    if (page.classList.contains("page-image")) {
        content.classList.add("is-image");
    }

    if (page.classList.contains("page-text")) {
        content.classList.add("is-text");
    }

    flipPage.innerHTML = "";
    flipPage.classList.remove("page-image", "page-text");

    while (page.firstChild) {
        content.appendChild(page.firstChild);
    }

    flipPage.appendChild(content);
}

function clearFlipTimers() {
    if (flipMidpointTimer) {
        clearTimeout(flipMidpointTimer);
        flipMidpointTimer = null;
    }

    if (flipFinishTimer) {
        clearTimeout(flipFinishTimer);
        flipFinishTimer = null;
    }
}

function updateSpreadPositions() {
    const spreads = carousel.querySelectorAll(".journal-spread");

    spreads.forEach((spread, index) => {
        spread.classList.remove(
            "is-active",
            "is-prev",
            "is-next",
            "is-hidden-left",
            "is-hidden-right",
            "is-flip-out-next",
            "is-flip-in-next",
            "is-flip-out-prev",
            "is-flip-in-prev",
            "is-stable-out-next",
            "is-stable-in-next",
            "is-stable-out-prev",
            "is-stable-in-prev"
        );

        if (isFlipAnimating && index === outgoingSpreadIndex) {
            if (flipDirection === "next") {
                spread.classList.add("is-stable-out-next");
            } else {
                spread.classList.add("is-stable-out-prev");
            }

            return;
        }

        if (isFlipAnimating && index === incomingSpreadIndex) {
            if (flipDirection === "next") {
                spread.classList.add("is-stable-in-next");
            } else {
                spread.classList.add("is-stable-in-prev");
            }

            return;
        }

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

function startSpreadFlip(targetIndex, direction) {
    if (!activeJournal || isFlipAnimating) {
        return;
    }

    if (targetIndex < 0 || targetIndex > activeJournal.entries.length - 1) {
        return;
    }

    clearFlipTimers();

    outgoingSpreadIndex = activeSpreadIndex;
    incomingSpreadIndex = targetIndex;
    flipDirection = direction;
    isFlipAnimating = true;
    wheelLocked = true;

    const flipAxis = carousel.querySelector(".journal-flip-axis");
    const flipPage = carousel.querySelector(".journal-flip-page");

    if (!flipAxis || !flipPage) {
        return;
    }

    flipAxis.classList.remove(
        "is-flipping-next",
        "is-flipping-prev",
        "has-swapped"
    );

    flipPage.classList.remove(
        "page-image",
        "page-text"
    );

    if (direction === "next") {
        setFlipPageContent(activeJournal.entries[outgoingSpreadIndex], "right");
        flipAxis.classList.add("is-flipping-next");
    } else {
        setFlipPageContent(activeJournal.entries[outgoingSpreadIndex], "left");
        flipAxis.classList.add("is-flipping-prev");
    }

    updateSpreadPositions();

    flipMidpointTimer = setTimeout(() => {
        if (!activeJournal || !isFlipAnimating) {
            return;
        }

        if (direction === "next") {
            setFlipPageContent(activeJournal.entries[incomingSpreadIndex], "left");
        } else {
            setFlipPageContent(activeJournal.entries[incomingSpreadIndex], "right");
        }

        flipAxis.classList.add("has-swapped");
    }, FLIP_ANIMATION_MS / 2);

    flipFinishTimer = setTimeout(() => {
        activeSpreadIndex = targetIndex;

        isFlipAnimating = false;
        flipDirection = null;
        outgoingSpreadIndex = null;
        incomingSpreadIndex = null;
        wheelTotal = 0;

        updateSpreadPositions();

        requestAnimationFrame(() => {
            flipAxis.classList.remove(
                "is-flipping-next",
                "is-flipping-prev",
                "has-swapped"
            );

            flipPage.classList.remove(
                "page-image",
                "page-text"
            );

            flipPage.innerHTML = "";
        });

        setTimeout(() => {
            wheelLocked = false;
        }, 90);
    }, FLIP_ANIMATION_MS);
}

function goToPreviousSpread() {
    if (!activeJournal || isFlipAnimating) {
        return;
    }

    if (activeSpreadIndex > 0) {
        startSpreadFlip(activeSpreadIndex - 1, "prev");
    }
}

function goToNextSpread() {
    if (!activeJournal || isFlipAnimating) {
        return;
    }

    if (activeSpreadIndex < activeJournal.entries.length - 1) {
        startSpreadFlip(activeSpreadIndex + 1, "next");
    }
}
function handleWheelNavigation(event) {
    if (!activeJournal) {
        return;
    }

    event.preventDefault();

    if (wheelLocked || isFlipAnimating) {
        return;
    }

    wheelTotal += event.deltaY + event.deltaX;

    if (Math.abs(wheelTotal) < 90) {
        return;
    }

    if (wheelTotal > 0) {
        goToNextSpread();
    } else {
        goToPreviousSpread();
    }

    wheelTotal = 0;
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

setShelfMovementVariables();
buildShelf();