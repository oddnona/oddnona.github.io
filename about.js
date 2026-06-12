const scene = document.querySelector(".about-scene");
const portrait = document.querySelector(".portrait-layer");
const panel = document.querySelector(".about-panel");
const panelContent = document.querySelector(".panel-content");
const cardInfo = document.querySelector(".portrait-card-info");

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

function lerp(start, end, progress) {
    return start + (end - start) * progress;
}

function updateAboutScene() {
    const sceneTop = scene.offsetTop;
    const scrollY = window.scrollY - sceneTop;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    /*
        PHASE 1:
        Right panel reveals from top to bottom.
        Scroll range: 0vh → 100vh
    */
    const revealStart = 0;
    const revealEnd = viewportHeight;

    let revealProgress = (scrollY - revealStart) / (revealEnd - revealStart);
    revealProgress = clamp(revealProgress, 0, 1);

    /*
        PHASE 2:
        Text content moves upward inside the right panel.
        Scroll range: 100vh → 400vh
    */
    const contentStart = viewportHeight;
    const contentEnd = viewportHeight * 4;

    let contentProgress = (scrollY - contentStart) / (contentEnd - contentStart);
    contentProgress = clamp(contentProgress, 0, 1);

    const contentMove = contentProgress * 300;
    panelContent.style.transform = `translateY(-${contentMove}vh)`;

    /*
        PHASE 3:
        Right panel disappears from bottom upward,
        revealing the full photo again.
        Scroll range: 400vh → 500vh
    */
    const hideStart = viewportHeight * 4;
    const hideEnd = viewportHeight * 5;

    let hideProgress = (scrollY - hideStart) / (hideEnd - hideStart);
    hideProgress = clamp(hideProgress, 0, 1);

    let panelHeight;

    if (scrollY < hideStart) {
        panelHeight = revealProgress * 100;
    } else {
        panelHeight = (1 - hideProgress) * 100;
    }

    panel.style.width = "50vw";
    panel.style.height = `${panelHeight}vh`;

    /*
        PHASE 4:
        The full portrait itself shrinks into the compact card.
        Scroll range: 500vh → 650vh
    */
    const cardStart = viewportHeight * 5;
    const cardEnd = viewportHeight * 5.8;

    let cardProgress = (scrollY - cardStart) / (cardEnd - cardStart);
    cardProgress = clamp(cardProgress, 0, 1);

    const finalCardWidth = 620;
    const finalCardHeight = 260;

    const startLeft = 0;
    const startTop = 0;
    const startWidth = viewportWidth;
    const startHeight = viewportHeight;

    const endLeft = (viewportWidth - finalCardWidth) / 2;
    const endTop = (viewportHeight - finalCardHeight) / 2;

    const currentLeft = lerp(startLeft, endLeft, cardProgress);
    const currentTop = lerp(startTop, endTop, cardProgress);
    const currentWidth = lerp(startWidth, finalCardWidth, cardProgress);
    const currentHeight = lerp(startHeight, finalCardHeight, cardProgress);
    const currentRadius = 0;
    const currentShadow = cardProgress * 0.18;

    portrait.style.left = `${currentLeft}px`;
    portrait.style.top = `${currentTop}px`;
    portrait.style.width = `${currentWidth}px`;
    portrait.style.height = `${currentHeight}px`;
    portrait.style.borderRadius = `${currentRadius}px`;
    portrait.style.boxShadow = `0 20px 60px rgba(0, 0, 0, ${currentShadow})`;

    /*
        Card text appears only after the photo has mostly become a card.
    */
    let infoProgress = (cardProgress - 0.45) / 0.55;
    infoProgress = clamp(infoProgress, 0, 1);

    cardInfo.style.opacity = infoProgress;
}

window.addEventListener("scroll", updateAboutScene);
window.addEventListener("resize", updateAboutScene);

updateAboutScene();