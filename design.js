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
                    "In 2023, I was part of a software developer team that helped N2U with adding a new feature to their mobile apps."
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
                    "The client put heavy emphasys on clear instructions for older users, nature hobbyists, and anyone who was not comfortable with mobile technology. This meant simple text instructions, but naturally my instinct was to provide supporting illustrations as well."
                ],
                layout: "image-left"
            },
            {
                image: "n2u1.jpg",
                alt: "Nature2U illustration sample 1",
                heading: "N2U: The Initial Project",
                body: ["I volunteered to digitally draw three simple illustrations to support the written instructions. I chose to mirror the Tuinvogelgids visual identity, employing the logo bird species and the same color palette used on the app. This way it was clear to the user: 'The anthropomorphized robin scans a QR code with its phone, and so should I'.",
                    "The bottom two illustrations would be shown to the user depending on the success of the transfer, 'Something went wrong' or 'Transfer done!'."
                ],
                layout: "image-left"
            },
            {
                image: "n2u2.JPEG",
                alt: "Nature2U illustration sample 2",
                heading: "N2U: Client Satisfied!",
                body: ["Our N2U client was happy with our software feature, but they were even happier with the illustrations. At the end of the project, they surprised the whole team with printed mugs to show their gratitude.",
                    "My illustrations motivated the client to commission me after the project as well. They wanted me to remake six new instructional illustrations to replace older generic visuals used across their app ecosystem."
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
                alt: "NSIP identity reference",
                heading: "NATO: What is NSIP?",
                body: [
                    "NSIP stands for NATO Security Investment Programme. It is a NATO-funded programme for building and upgrading defence infrastructure such as military airfields, communication systems, fuel facilities, and command-and-control capabilities.",
                    "Romania implements NSIP projects through its defence institutions, operating within the Ministry of National Defence.",
                    "In 2021, I was asked to create a logo for Romania’s NSIP division as an independent design contribution."
                ],
                layout: "image-left"
            },
            {
                image: "nato0.png",
                alt: "NSIP Romania logo design",
                heading: "The Brief",
                body: [
                    "I was asked to combine three symbols: the NSIP identity, NATO affiliation, and Romania.",
                    "The logo needed to remain readable, and appropriate for an institutional defence context.",
                    "Beyond those requirements, the visual direction was left open, so the final composition, hierarchy, and integration of symbols were my own design decisions."
                ],
                layout: "image-left"
            },
            {
                image: "nato1.JPG",
                alt: "NSIP Romania logo close-up",
                heading: "Logo Design",
                body: [
                    "It maintains the established font, slant and white color of the original NSIP logo, and builds on top of it the Romanian tricolour and its esteemed NATO heritage.",
                    "The design focuses on institutional clarity. It has strong contrast, simple geometry, and a composition that can remain legible at different sizes."
                ],
                layout: "image-left"
            },
            {
                image: "nato2.JPG",
                alt: "NSIP Romania logo banner displayed at the Ministry of National Defence",
                heading: "Logo Banner",
                body: [
                    "The logo went on to be used across official NSIP Romania materials.",
                    "This is a picture of the logo banner displayed on the MAPN quarters, the Romanian Ministry of National Defense in Bucharest."
                ],
                layout: "text-left"
            },
            {
                image: "nato3.JPG",
                alt: "NSIP Romania insignia and badges",
                heading: "Insignia",
                body: [
                    "The logo came in useful at conferences, as NSIP group members were able to advertise themselves through badges and various insignia that could clearly identify their authority.",
                    "Access the Romanian ordinance that first introduces the logo:"
                ],
                button: {
                    label: "M36 NSIP PDF",
                    href: "M36.pdf",
                    download: false,
                    external: true
                },
                layout: "image-left"
            },
            {
                image: "nato4.jpeg",
                alt: "NSIP Romania logo applied to official vehicle",
                heading: "Other Applications",
                body: [
                    "I designed the logo with reproduction in mind, so printing assets came naturally afterwards.",
                    "The NSIP Romania logo went on to be applied to various tools of the organization, including cars."
                ],
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
                image: "misc6.png",
                alt: "Personal design work sample 2",
                heading: "Eunomia",
                body:[ "Eunomia is my friend's Honors Degree dissertation project. It is an educational web application focused on constructing Logic Proofs.",
                "I designed the presentation poster for him, focusing on depicting all the necessary text content in an organized structure.",
                "The poster theme is Ancient Greece, because Eunomia is a minor Greek goddess of law and legislation, playing on maintaining balance and reality."
                ],
                button: {
                    label: "view full poster",
                    href: "eunomia.pdf",
                    download: false,
                    external: true
                },
                layout: "text-left"
            },
            {
                image: "misc4.JPG",
                alt: "Personal design work sample 3",
                heading: "Burning Cold",
                body: "This is a cover art for the song Burning Cold from the rock band Out 'n' About. It depicts the contrast between fire and ice, as well as the members of the band as a united group.",
                button: {
                    label: "listen on YouTube",
                    href: "https://youtu.be/uKXe78NP71A?si=a_rM8JLucm8r1ijC",
                    download: false,
                    external: true
                },
                layout: "image-left"
            },
            {
                image: "misc3.JPG",
                alt: "Personal design work sample 4",
                heading: "Soulscar",
                body: "This is a cover art for the song Soulscar from the metal band Saryn. The illustration uses the color palette chosen by the client band. It is meant to reflect the despair felt in the lyrics and instrumentals of the song.",
                button: {
                    label: "listen to the song",
                    href: "https://youtu.be/uKXe78NP71A?si=a_rM8JLucm8r1ijC",
                    download: false,
                    external: true
                },
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

let activeEntryIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function openJournal(journalId) {
    activeJournal = journals.find((journal) => journal.id === journalId);
    activeEntryIndex = 0;
    wheelLocked = false;
    wheelTotal = 0;

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

    buildEditorialSections();

    designSection.classList.add("journal-is-open");
    stage.classList.add("is-open");
    stage.setAttribute("aria-hidden", "false");

    carousel.scrollTop = 0;
    updateRouteCamera();
}

function closeJournal() {
    activeJournal = null;
    activeEntryIndex = 0;
    wheelLocked = false;
    wheelTotal = 0;
    previewedJournalId = null;

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

function buildEditorialSections() {
    carousel.innerHTML = "";

    const world = document.createElement("div");
    world.className = "journal-world";
    world.style.setProperty("--entry-count", activeJournal.entries.length);
    world.style.height = `${activeJournal.entries.length * 88 + 38}vh`;

    const routeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    routeSvg.classList.add("journal-route-svg");
    routeSvg.setAttribute("aria-hidden", "true");

    const routePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    routePath.classList.add("journal-route-path");

    routeSvg.appendChild(routePath);
    world.appendChild(routeSvg);

    activeJournal.entries.forEach((entry, index) => {
        const section = document.createElement("article");
        section.className = "journal-editorial-section";
        section.dataset.index = index;

        section.style.setProperty("--node-y", `${index * 88 + 12}vh`);
        section.style.setProperty("--node-x", `${8 + index * 18}vw`);

        if (entry.layout === "text-left") {
            section.classList.add("text-first");
        }

        const chapterMarker = document.createElement("div");
        chapterMarker.className = "journal-chapter-marker";
        chapterMarker.textContent = String(index + 1).padStart(2, "0");

        const textWrap = document.createElement("div");
        textWrap.className = "journal-editorial-text";

        const imageWrap = document.createElement("div");
        imageWrap.className = "journal-editorial-image";

        const titleWrap = document.createElement("div");
        titleWrap.className = "journal-editorial-title";

        const img = document.createElement("img");
        img.src = entry.image;
        img.alt = entry.alt;

        imageWrap.appendChild(img);

        const heading = document.createElement("h4");
        heading.textContent = entry.heading;
        titleWrap.appendChild(heading);

        const paragraphs = Array.isArray(entry.body)
            ? entry.body
            : [entry.body];

        paragraphs.forEach((paragraphText) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = paragraphText;
            textWrap.appendChild(paragraph);
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

            textWrap.appendChild(button);
        }

        section.appendChild(chapterMarker);
        section.appendChild(textWrap);
        section.appendChild(imageWrap);
        section.appendChild(titleWrap);

        world.appendChild(section);
    });

    carousel.appendChild(world);

    requestAnimationFrame(() => {
        drawJournalRoute();
        updateActiveEntryFromScroll();
        updateRouteCamera();
    });
}

function drawJournalRoute() {
    const world = carousel.querySelector(".journal-world");
    const routeSvg = carousel.querySelector(".journal-route-svg");
    const routePath = carousel.querySelector(".journal-route-path");
    const markers = carousel.querySelectorAll(".journal-chapter-marker");

    if (!world || !routeSvg || !routePath || markers.length < 2) {
        return;
    }

    const worldWidth = world.scrollWidth;
    const worldHeight = world.scrollHeight;

    routeSvg.setAttribute("viewBox", `0 0 ${worldWidth} ${worldHeight}`);
    routeSvg.setAttribute("width", worldWidth);
    routeSvg.setAttribute("height", worldHeight);

    const points = Array.from(markers).map((marker) => {
        const section = marker.closest(".journal-editorial-section");

        return {
            x: section.offsetLeft + marker.offsetLeft + marker.offsetWidth / 2,
            y: section.offsetTop + marker.offsetTop + marker.offsetHeight / 2
        };
    });

    let pathData = `M ${points[0].x} ${points[0].y}`;

    for (let index = 1; index < points.length; index += 1) {
        const previousPoint = points[index - 1];
        const currentPoint = points[index];

        const distanceX = currentPoint.x - previousPoint.x;
        const controlOffsetX = distanceX * 0.45;

        const controlPointOneX = previousPoint.x + controlOffsetX;
        const controlPointOneY = previousPoint.y;

        const controlPointTwoX = currentPoint.x - controlOffsetX;
        const controlPointTwoY = currentPoint.y;

        pathData += ` C ${controlPointOneX} ${controlPointOneY}, ${controlPointTwoX} ${controlPointTwoY}, ${currentPoint.x} ${currentPoint.y}`;
    }

    routePath.setAttribute("d", pathData);
}

function updateRouteCamera() {
    if (!activeJournal) {
        return;
    }

    const world = carousel.querySelector(".journal-world");

    if (!world) {
        return;
    }

    const maxScroll = carousel.scrollHeight - carousel.clientHeight;
    const progress = maxScroll > 0
        ? carousel.scrollTop / maxScroll
        : 0;

    const maxShift = window.innerWidth * 0.18 * Math.max(activeJournal.entries.length - 1, 0);

    world.style.setProperty("--route-shift-x", `${progress * -maxShift}px`);
}

function scrollToEntry(index) {
    if (!activeJournal) {
        return;
    }

    const maxIndex = activeJournal.entries.length - 1;
    const safeIndex = Math.max(0, Math.min(index, maxIndex));
    const targetSection = carousel.querySelector(
        `.journal-editorial-section[data-index="${safeIndex}"]`
    );

    if (!targetSection) {
        return;
    }

    activeEntryIndex = safeIndex;

    carousel.scrollTo({
        top: Math.max(0, targetSection.offsetTop - carousel.clientHeight * 0.12),
        behavior: "smooth"
    });
}

function goToPreviousSpread() {
    scrollToEntry(activeEntryIndex - 1);
}

function goToNextSpread() {
    scrollToEntry(activeEntryIndex + 1);
}

function updateActiveEntryFromScroll() {
    if (!activeJournal) {
        return;
    }

    const sections = carousel.querySelectorAll(".journal-editorial-section");

    if (!sections.length) {
        return;
    }

    const focusY = carousel.scrollTop + carousel.clientHeight * 0.42;
    let closestIndex = 0;
    let closestDistance = Infinity;

    sections.forEach((section) => {
        const sectionFocusY = section.offsetTop + section.offsetHeight * 0.45;
        const distance = Math.abs(sectionFocusY - focusY);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = Number(section.dataset.index);
        }
    });

    activeEntryIndex = closestIndex;

    sections.forEach((section) => {
        const sectionIndex = Number(section.dataset.index);
        const distanceFromActive = Math.abs(sectionIndex - activeEntryIndex);

        section.classList.remove("is-current", "is-near", "is-far");

        if (distanceFromActive === 0) {
            section.classList.add("is-current");
        } else if (distanceFromActive === 1) {
            section.classList.add("is-near");
        } else {
            section.classList.add("is-far");
        }
    });
}

function handlePopupTouchStart(event) {
    if (!activeJournal) {
        return;
    }

    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
}

function handlePopupTouchEnd(event) {
    if (!activeJournal) {
        return;
    }

    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;

    const swipeX = touchEndX - touchStartX;
    const swipeY = touchEndY - touchStartY;

    if (Math.abs(swipeX) < 80) {
        return;
    }

    if (Math.abs(swipeX) < Math.abs(swipeY)) {
        return;
    }

    if (swipeX < 0) {
        goToNextSpread();
    } else {
        goToPreviousSpread();
    }
}

closeButton.addEventListener("click", closeJournal);

stage.addEventListener("click", (event) => {
    const clickedInsideWidget = event.target.closest(".journal-widget");
    const clickedCloseButton = event.target.closest(".journal-close");

    if (clickedInsideWidget || clickedCloseButton) {
        return;
    }

    closeJournal();
});
carousel.addEventListener("scroll", () => {
    updateActiveEntryFromScroll();
    updateRouteCamera();
});
carousel.addEventListener("touchstart", handlePopupTouchStart, { passive: true });
carousel.addEventListener("touchend", handlePopupTouchEnd, { passive: true });
window.addEventListener("resize", () => {
    drawJournalRoute();
    updateRouteCamera();
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

setShelfMovementVariables();
buildShelf();