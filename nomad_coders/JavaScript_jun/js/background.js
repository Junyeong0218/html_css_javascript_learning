const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

// const background = document.querySelector("#container");
const bgImage = document.createElement("img");
bgImage.src = `images/${images[randNum()]}`;
bgImage.classList.add("background_image");

document.body.appendChild(bgImage);

function randNum() {
    return Math.floor(Math.random() * images.length);
}