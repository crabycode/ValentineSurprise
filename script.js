document.getElementById("startButton").addEventListener("click", function() {
    document.body.classList.add("gradient-bg");
    this.style.display = "none";
            
    let valentineDiv = document.getElementById("valentine");
    valentineDiv.classList.remove("hidden");
    setTimeout(() => valentineDiv.style.opacity = 1, 100);
            
    let slider = document.getElementById("slider");
    slider.classList.remove("hidden");
    slider.style.visibility = "visible";
            
    startHearts();
    startSlider();
});
        
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

function startSlider() {
    let images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png", "img9.png", "img10.png"];
    let track = document.getElementById("slideTrack");
            
    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        track.appendChild(img);
    });
}