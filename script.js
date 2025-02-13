const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const widthLimit = 150; // Half of the width of the rectangle (300 / 2)
const heightLimit = 150; // Half of the height of the rectangle (300 / 2)

// Function to handle the running "No" button within a 300x300 rectangle around the center
noButton.addEventListener('mouseover', function() {
    // Calculate new random position within the rectangular bounds
    let x = centerX - widthLimit + Math.random() * (2 * widthLimit) - noButton.clientWidth / 2;
    let y = centerY - heightLimit + Math.random() * (2 * heightLimit) - noButton.clientHeight / 2;

    // Ensure the "No" button stays within the viewport boundaries
    x = Math.max(0, Math.min(x, window.innerWidth - noButton.clientWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - noButton.clientHeight));

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Make the "Yes" button larger
    const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    const newSize = currentSize + 2;
    yesButton.style.fontSize = `${newSize}px`;
    yesButton.style.padding = `${newSize + 2}px ${newSize + 10}px`;
});

// Function to handle the "Yes" button click event
yesButton.addEventListener('click', function() {
    alert("Yay! Luv you so much, Pu Pu layy!");
});

// Animate the images in a circle
const images = document.querySelectorAll('.grid-item');
const totalImages = images.length;
const radius = 200; // Radius of the circle
let angle = 0;

function animateImages() {
    for (let i = 0; i < totalImages; i++) {
        const img = images[i];
        const theta = angle + (2 * Math.PI * i) / totalImages;
        const x = (window.innerWidth / 2) + radius * Math.cos(theta) - img.clientWidth / 2;
        const y = (window.innerHeight / 2) + radius * Math.sin(theta) - img.clientHeight / 2;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    }
    angle += 0.01; // Adjust this value to change the speed
    requestAnimationFrame(animateImages);
}

// Set the background images
images[0].style.backgroundImage = "url('background1.jpg')";
images[1].style.backgroundImage = "url('background2.jpg')";
images[2].style.backgroundImage = "url('background3.jpg')";
images[3].style.backgroundImage = "url('background4.jpg')";
images[4].style.backgroundImage = "url('background5.jpg')";

// Start the animation
animateImages();
