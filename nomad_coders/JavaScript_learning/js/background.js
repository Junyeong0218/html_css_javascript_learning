const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const IMAGES_LENGTH = images.length;

const chosenImage = images[randomIndex()];
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);

function randomIndex() {
    return Math.floor(Math.random() * IMAGES_LENGTH);
}