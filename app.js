const music = document.getElementById("music");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heartsContainer = document.querySelector(".hearts");

// Image Array - Make sure these files exist in your folder!
const slideshowImages = ['us1.jpg', 'us2.jpg', 'us3.jpg', 'us4.jpg'];
let imgIndex = 0;

function nextScreen() {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('card-screen').classList.add('active');
    music.play().catch(() => console.log("Music interaction required"));
}

// Run-away NO button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "%";
    noBtn.style.top = y + "%";
});

// YES Button: Show Side-by-Side Final Screen
yesBtn.addEventListener('click', () => {
    document.getElementById('card-screen').classList.remove('active');
    document.getElementById('final-screen').classList.add('active');
    
    // Make message area visible
    const contentArea = document.getElementById('final-content-area');
    if(contentArea) contentArea.style.display = 'block';
    
    const slideImg = document.getElementById('slideshow-img');
    startSlideshow(slideImg);
});

function startSlideshow(slideImg) {
    if (!slideImg) return;
    
    setInterval(() => {
        imgIndex++;
        if (imgIndex >= slideshowImages.length) imgIndex = 0;

        slideImg.style.opacity = 0;
        setTimeout(() => {
            slideImg.src = slideshowImages[imgIndex];
            slideImg.style.opacity = 1;
        }, 500);
    }, 3500);
}

function openWhatsApp() {
    const text = encodeURIComponent("I said YES 💜 Happy Valentine’s my love 😘");
    window.open("https://wa.me/?text=" + text, "_blank");
}

// Background Hearts
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💜";
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    
    const container = document.querySelector(".hearts");
    if(container) container.appendChild(heart);
    
    setTimeout(() => heart.remove(), 6000);
}, 400);