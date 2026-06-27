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
                image: "n2u0.png",
                alt: "Who is Nature2U ?",
                heading: "Who is Nature2U?",
                body: ["Nature2U is a Dutch nature-education company that develops accessible digital field guides and various nature apps since 2011.",
                    "The company focuses on combining nature knowledge with user-friendly mobile tools: species descriptions, professional nature photography, bird sounds, spotting/logging features, and maps. It works with nature professionals to make nature recognition easy for beginners as well as enthusiasts.",
                    "In 2023, I was part of a software developing team that helped N2U with adding a new feature to their mobile apps."
                ],
                button: {
                    label: "N2U website",
                    href: "https://nature2u.nl/",
                    download: false,
                    external: true
                },
                layout: "image-left"
            },
            {
                image: "n2u01.png",
                alt: "Nature2U illustration sample 1",
                heading: "N2U: The Initial Project",
                body: ["Our team had one primary task: implement a data transfering feature for the Tuinvogelgids app, so users can move their data from one device to another without authentication. Our solution consisted of a QR scanning system.",
                    "The client put heavy emphasis on user-friendly instructions, something that anyone with little understanding of mobile devices would understand. This meant clear text instructions, but naturally my instict was to provide supporting illustrations as well."
                ],
                layout: "image-left"
            },
            {
                image: "n2u1.jpg",
                alt: "Nature2U illustration sample 1",
                heading: "N2U: The Initial Project",
                body: ["The digital drawings were done by me. The design was intended to mirror the Tuinvogelgids logo, down to the color palette and bird species. This way it was clear to the user: 'The anthropomorphized robin scans a QR code with its phone, and so should I'.",
                    "The bottom two illustrations would be shown to the user depending on the success of the transfer, 'Something went wrong' or 'Transfer done!'."
                ],
                layout: "image-left"
            },
            {
                image: "n2u2.JPEG",
                alt: "Nature2U illustration sample 2",
                heading: "N2U: Client Satisfied!",
                body: ["Our N2U client was happy with our software feature, but they were even happier with the illustrations. At the end of the project, they surprised the whole team with printed mugs to show their gratitude.",
                    "My illustrations motivated the client to commission me after the project as well. They wanted me to remake some of their older app instruction illustrations."
                ],
                button: {
                    label: "Read the LinkedIn Post",
                    href: "https://www.linkedin.com/posts/timvisscher_nature2u-softwareengineering-unico-activity-7079408300617814016-2-PK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk_PrUBZXhR_di3LlrepX-DoQxF1A4zMQo",
                    download: false,
                    external: true
                },
                layout: "text-left"
            },
            {
                image: "n2u30.jpg",
                alt: "Nature2U illustration sample 3",
                heading: "N2U: Commission Scope",
                body: "These were the set of instructive illustrations that Nature2U were using prior to our collaboration. They are functional, but they do not match the company's visual identity.",
                layout: "image-left"
            },
            {
                image: "n2u3.png",
                alt: "Nature2U illustration sample 3",
                heading: "N2U: Commission Outcome",
                body: "These were the illustration replacements I drew. They maintain the sillhouetes and narrative of the original illustrations, while preserving Nature2U's core visual identity: brown tones and signature neon green, gardening and sightseeing hobbies, youthful affability.",
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
                image: "nsip.jpg",
                alt: "NATO Romania design sample 1",
                heading: "NATO: What is NSIP?",
                body:[ "NSIP stands for NATO Security Investment Programme. It is a NATO-funded program for building and upgrading security defence infrastructure, such as military airfields, command-and-control systems, fuel facilities, communications, and other capabilities needed by NATO.",
                "Romania participates in NSIP and implements projects through its defence institutions. In 2021, I was charged with creating a logo for the specific division of the Romanian NSIP programme, something that builds on this established international logo."
                ],
                layout: "image-left"
            },
            {
                image: "nato1.JPG",
                alt: "NATO Romania design sample 1",
                heading: "Logo",
                body: ["The logo focuses on professionalism, reliability, and institutional clarity. It merges three requested symbols: NSIP, NATO, and Romania.",
                    "It maintains the established font, slant and white color of the original NSIP logo, and builds on top of it the Romanian flag and its esteemed NATO heritage.",
                ],
                layout: "image-left"
            },
            {
                image: "nato2.JPG",
                alt: "NATO Romania design sample 2",
                heading: "Logo Banner",
                body: "The logo was applied to several physical and digital assets of the programme. This is a picture of the logo banner displayed on the MAPN quarters, the Romanian Ministry of National Defense in Bucharest.",
                layout: "text-left"
            },
            {
                image: "nato3.JPG",
                alt: "NATO Romania design sample 3",
                heading: "Insignia",
                body: ["The logo came in useful at conferences, as NSIP group members were able to advertise themselves through badges and various insignia that could clearly identify their authority.",
                "Access the Romanian ordinance that first introduces the logo:"
                ],
                button: {
                    label: "M36 NSIP PDF",
                    href: "x.pdf",
                    download: true,
                    external: false
                },
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
        id: "disruptive-delivery",
        title: "Disruptive Delivery",
        coverLabel: "Disruptive Delivery",
        themeClass: "theme-delivery",
        logo: {
            image: "ddlogo.png",
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
            x: 59,
            bottom: 35,
            width: 145,
            height: 215,
            spineWidth: 46,
            spineImage: "miscspine.jpg",
            coverColor: "#6e5422",
            spineColor: "#86611e",
            textColor: "#f9e0a1", 
            tilt: "0deg",
            spineTitleX: "50%",
            spineTitleY: "38%",
            spineTitleSize: 0.32
        },
        entries: [
            {
                image: "misc0.jpg",
                alt: "Disruptive Delivery software identity concept",
                heading: "Disruptive Delivery - Software Identity Concept",
                body: [
                    "Disruptive Delivery is a fictional parcel delivery company. My team built a web application prototype for tracking deliveries, to be used by the company employees and the clients alike.",
                    "I went one step further: I gave Disruptive Delivery a distinctive look."
                ],
                layout: "image-left"
            },
            {
                image: "misc1.JPG",
                alt: "Disruptive Delivery design decisions",
                heading: "Disruptive Delivery - Design Decisions",
                body: [
                    "All illustrations were drawn by me digitally. I wanted Disruptive Delivery to communicate several things at once: we are friendly, we focus on our client's needs, we are Dutch.",
                    "The logo, two 'D's slanted in a circle, is meant to be a play on the company name alliteration, imitate a spinning wheel, and keep an identifiable shape that can be applied to multiple color palettes.",
                    "The capybaras were a result of 2023's newly-found infatuation with obscure species. They are a warm and welcoming symbol of focused direction."
                ],
                layout: "image-left"
            },
            {
                image: "misc7.png",
                alt: "Disruptive Delivery presentation",
                heading: "Disruptive Delivery - Presentation",
                body: "Become more familiar with the application prototype and Disruptive Delivery's personality by watching the slide presentation of its key features!",
                button: {
                    label: "see canva presentation",
                    href: "https://canva.link/wyfkbqrctoolg9c",
                    download: false,
                    external: true
                },
                layout: "image-left"
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
            x: 64,
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
const FLIP_ANIMATION_MS = 300;
const SCENE_BASE_WIDTH = 1686;
const BOOK_SCENE_SCALE = 1.25;

function sceneVw(pixelValue) {
    return `${((pixelValue * BOOK_SCENE_SCALE) / SCENE_BASE_WIDTH) * 100}vw`;
}
const NEIGHBOR_MOVES = {
    naturePreviewNato: 42,
    naturePreviewDelivery: 46,
    naturePreviewFree: 46,

    natoPreviewNature: -28,
    natoPreviewDelivery: 42,
    natoPreviewFree: 44,

    deliveryPreviewNature: -24,
    deliveryPreviewNato: -34,
    deliveryPreviewFree: 38,

    freePreviewNature: -20,
    freePreviewNato: -30,
    freePreviewDelivery: -42
};

function setShelfMovementVariables() {
    shelf.style.setProperty("--move-nature-preview-nato", sceneVw(NEIGHBOR_MOVES.naturePreviewNato));
    shelf.style.setProperty("--move-nature-preview-delivery", sceneVw(NEIGHBOR_MOVES.naturePreviewDelivery));
    shelf.style.setProperty("--move-nature-preview-free", sceneVw(NEIGHBOR_MOVES.naturePreviewFree));

    shelf.style.setProperty("--move-nato-preview-nature", sceneVw(NEIGHBOR_MOVES.natoPreviewNature));
    shelf.style.setProperty("--move-nato-preview-delivery", sceneVw(NEIGHBOR_MOVES.natoPreviewDelivery));
    shelf.style.setProperty("--move-nato-preview-free", sceneVw(NEIGHBOR_MOVES.natoPreviewFree));

    shelf.style.setProperty("--move-delivery-preview-nature", sceneVw(NEIGHBOR_MOVES.deliveryPreviewNature));
    shelf.style.setProperty("--move-delivery-preview-nato", sceneVw(NEIGHBOR_MOVES.deliveryPreviewNato));
    shelf.style.setProperty("--move-delivery-preview-free", sceneVw(NEIGHBOR_MOVES.deliveryPreviewFree));

    shelf.style.setProperty("--move-free-preview-nature", sceneVw(NEIGHBOR_MOVES.freePreviewNature));
    shelf.style.setProperty("--move-free-preview-nato", sceneVw(NEIGHBOR_MOVES.freePreviewNato));
    shelf.style.setProperty("--move-free-preview-delivery", sceneVw(NEIGHBOR_MOVES.freePreviewDelivery));
}

function buildShelf() {
    shelf.innerHTML = "";

    journals.forEach((journal, index) => {
        const book = document.createElement("button");
        book.className = "book";

        book.classList.add(`book-${journal.id}`);

        if (index === 0) {
            book.classList.add("book-left");
        }

        if (index === 1) {
            book.classList.add("book-center-left");
        }

        if (index === 2) {
            book.classList.add("book-center-right");
        }

        if (index === 3) {
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

    widget.classList.remove(
        "theme-nature",
        "theme-nato",
        "theme-free-time",
        "theme-delivery"
    );

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
            widget.classList.remove(
                "theme-nature",
                "theme-nato",
                "theme-free-time",
                "theme-delivery"
            );
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

    page.appendChild(heading);

    const paragraphs = Array.isArray(entry.body)
        ? entry.body
        : [entry.body];

    paragraphs.forEach((paragraphText) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphText;
        page.appendChild(paragraph);
    });

    if (entry.button) {
        const button = document.createElement("a");
        button.className = "journal-page-button";
        button.textContent = entry.button.label;
        button.href = entry.button.href;

        if (entry.button.download) {
            button.setAttribute("download", "");
        }

        if (entry.button.external) {
            button.target = "_blank";
            button.rel = "noopener noreferrer";
        }

        page.appendChild(button);
    }

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