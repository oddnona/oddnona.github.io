import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();

scene.fog = new THREE.Fog(
    0x03070b,
    10,
    70
);

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.setClearColor(0x000000, 0);

document
    .getElementById("scene-container")
    .appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.5
);

scene.add(ambientLight);

const points = [
    new THREE.Vector3(-80, 4, -2),
    new THREE.Vector3(-60, 2, 1),
    new THREE.Vector3(-40, 0, -1),
    new THREE.Vector3(-20, -1, 1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(18, -1, -1),
    new THREE.Vector3(36, -3, 1),
    new THREE.Vector3(54, -2, -1),
    new THREE.Vector3(72, -5, 0),
    new THREE.Vector3(90, -7, 1),
    new THREE.Vector3(110, -6, -2),
    new THREE.Vector3(130, -9, 0)
];
const curve = new THREE.CatmullRomCurve3(points);

const geometry = new THREE.TubeGeometry(
    curve,
    200,
    0.25,
    24,
    false
);

const material = new THREE.MeshPhongMaterial({
    color: 0x909b8a,
    transparent: true,
    opacity: 0.28,
    shininess: 80,
    side: THREE.DoubleSide
});

const tube = new THREE.Mesh(
    geometry,
    material
);

scene.add(tube);
tube.position.y = -2;
const haloGeometry = new THREE.TubeGeometry(
    curve,
    200,
    0.38,
    32,
    false
);

const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0xa7b19f,
    transparent: true,
    opacity: 0.035,
    side: THREE.DoubleSide
});

const haloTube = new THREE.Mesh(haloGeometry, haloMaterial);
scene.add(haloTube);
haloTube.position.y = -2;
const particleCount = 900;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = [];

const pulseGeometry = new THREE.TubeGeometry(
    curve,
    200,
    0.29,
    24,
    false
);

const pulseMaterial = new THREE.MeshBasicMaterial({
    color: 0xc8d0c2,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide
});

const pulseTube = new THREE.Mesh(pulseGeometry, pulseMaterial);
scene.add(pulseTube);
pulseTube.position.y = -2;
for (let i = 0; i < particleCount; i++) {
    particlePositions.push(
        (Math.random() - 0.5) * 180,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
    );
}

particleGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(particlePositions, 3)
);

const particleMaterial = new THREE.PointsMaterial({
    color: 0xd6d8d2,
    size: 0.07,
    transparent: true,
    opacity: 0.75,
    depthWrite: false
});

const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
);

scene.add(particles);

const stations = [
    {
        kicker: "Film Intro",
        title: "The Life of a Plastic Particle",
        description: `
            A thesis film and immersive visualization project about nanoplastic trajectories in the ocean.
            The project follows the unseen movement of plastic particles through marine environments,
            translating scientific processes into an atmospheric visual narrative.
        `,
        button: null,
        action: null,
        t: 0.25
    },
    {
        kicker: "Thesis Abstract",
        title: "Researching the unseen journey",
        description: `
            Marine plastic pollution poses a global threat. Large plastic objects, discarded at the surface
            of the ocean, fragment into smaller particles, which then settle in deeper ocean layers. Recent
            scientific findings highlight the hazard of these microplastics and nanoplastics for marine ecologies,
            food supply and human health.
        `,
        fullDescription: `
            Marine plastic pollution poses a global threat. Large plastic objects, discarded at the surface
            of the ocean, fragment into smaller particles, which then settle in deeper ocean layers. Recent
            scientific findings highlight the hazard of these microplastics and nanoplastics for marine ecologies,
            food supply and human health. Currently, the general public does not accurately perceive the
            urgency of these threats because picturing microscopic particles is difficult.

            Engaging and immersive scientific visualization can serve as a valuable educational tool for the
            general public. This project implemented a narrative-driven 3D visualization of nanoplastic
            trajectories in an immersive virtual environment, depicting the transport and transformation of
            an average particle from surface drift to deeper ocean layers.
        `,
        expanded: false,
        button: null,
        action: null,
        t: 0.35
    },
    {
        kicker: "Watch Film",
        title: "Follow the trajectory",
        description: `
            Watch the final film documenting the movement and transformation of plastic particles
            through ocean layers.
        `,
        button: "Watch Film",
        action: "film",
        t: 0.45
    },
    {
        kicker: "Toolkit Used",
        title: "Built as an immersive visualization",
        description: `
            <ul class="toolkit-list">
                <li>Unity</li>
                <li>C#</li>
                <li>3D modelling and asset integration</li>
                <li>Scientific data visualization techniques</li>
                <li>User study design and analysis</li>
            </ul>
        `,
        button: null,
        action: null,
        t: 0.55
    },
    {
        kicker: "Thesis Paper",
        title: "Read the full thesis",
        description: `
            Open the written thesis paper, including the research background, methodology,
            user study, and conclusions.
        `,
        button: "Open PDF",
        action: "pdf",
        t: 0.65
    },
    {
        kicker: "Source Code",
        title: "Explore the project files",
        description: `
            View the GitHub repository for the implementation and project source files.
        `,
        button: "Open GitHub",
        action: "github",
        t: 0.75
    }
];

let currentStation = 0;
let currentProgress = stations[0].t;
let targetProgress = stations[0].t;

const kickerElement =
    document.querySelector(".station-kicker");

const titleElement =
    document.querySelector("#station-card h1");

const descriptionElement =
    document.querySelector(".station-description");

const buttonElement =
    document.querySelector("#station-button");

const readMoreButton =
    document.querySelector("#read-more-button");

function updateStationUI() {
    const station = stations[currentStation];
    const card = document.querySelector("#station-card");

    card.classList.remove("flipped");

    kickerElement.textContent = station.kicker;
    titleElement.textContent = station.title;

    if (station.fullDescription && station.expanded) {
        descriptionElement.innerHTML = station.fullDescription;
        readMoreButton.textContent = "Show less";
        readMoreButton.style.display = "inline-block";
        card.classList.add("expanded");
    } else {
        descriptionElement.innerHTML = station.description;
        card.classList.remove("expanded");

        if (station.fullDescription) {
            readMoreButton.textContent = "Read more";
            readMoreButton.style.display = "inline-block";
        } else {
            readMoreButton.style.display = "none";
        }
    }

    if (station.button) {
        buttonElement.textContent = station.button;
        buttonElement.style.display = "inline-block";
    } else {
        buttonElement.style.display = "none";
    }
}
updateStationUI();
readMoreButton.addEventListener("click", () => {
    const station = stations[currentStation];

    if (!station.fullDescription) return;

    station.expanded = !station.expanded;
    updateStationUI();
});

buttonElement.addEventListener("click", () => {
    const station = stations[currentStation];

    if (station.action === "pdf") {
        window.open("Thesis_Paper.pdf", "_blank");
    }

    if (station.action === "github") {
        window.open("https://github.com/oddnona/The-Life-of-a-Plastic-Particle", "_blank");
    }

    if (station.action === "film") {
        document
            .querySelector("#station-card")
            .classList.add("flipped");
    }
});

let isCardAnimating = false;

function moveToStation(index) {
    const nextStation = Math.max(
        0,
        Math.min(stations.length - 1, index)
    );

    if (nextStation === currentStation || isCardAnimating) return;

    const card = document.querySelector("#station-card");

    isCardAnimating = true;

    card.classList.add("card-exit");

    setTimeout(() => {
        currentStation = nextStation;
        targetProgress = stations[currentStation].t;

        updateStationUI();

        card.classList.remove("card-exit");
        card.classList.add("card-enter");

        requestAnimationFrame(() => {
            card.classList.remove("card-enter");
        });

        setTimeout(() => {
            isCardAnimating = false;
        }, 500);

    }, 260);
}

let canNavigate = true;

window.addEventListener("wheel", (event) => {
    if (!canNavigate) return;

    if (Math.abs(event.deltaY) < 20) return;

    if (event.deltaY > 0) {
        moveToStation(currentStation + 1);
    } else {
        moveToStation(currentStation - 1);
    }

    canNavigate = false;

    setTimeout(() => {
        canNavigate = true;
    }, 850);
});

window.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        moveToStation(currentStation + 1);
    }

    if (event.key === "ArrowLeft") {
        moveToStation(currentStation - 1);
    }

});

let targetPosition = curve.getPoint(0);

function animate() {

    requestAnimationFrame(animate);

    currentProgress += (targetProgress - currentProgress) * 0.025;

    targetPosition = curve.getPoint(currentProgress);

    camera.position.lerp(
        new THREE.Vector3(
            targetPosition.x,
            targetPosition.y + 1.2,
            6
        ),
        0.08
    );

    camera.lookAt(targetPosition);

    const time = performance.now() * 0.001;

    tube.rotation.z = Math.sin(time * 0.18) * 0.015;
    haloTube.rotation.z = Math.sin(time * 0.14) * 0.025;

    particles.rotation.y = time * 0.015;
    particles.rotation.z = Math.sin(time * 0.08) * 0.02;

    pulseTube.rotation.z = Math.sin(time * 0.22) * 0.008;
    pulseTube.scale.setScalar(1 + Math.sin(time * 1.4) * 0.012);
    pulseMaterial.opacity = 0.05 + Math.sin(time * 1.4) * 0.025;

    renderer.render(
        scene,
        camera
    );
}

animate();

window.addEventListener("resize", () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});

document
    .querySelector("#close-video-button")
    .addEventListener("click", () => {
        document
            .querySelector("#station-card")
            .classList.remove("flipped");
    });
