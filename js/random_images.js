const images = ["img/about_me.png", "img/about_me2.png"];
const size = images.length;

function updateAboutMeImage(p1, p2) {
    document.getElementById("random_image").src = images[Math.floor(size*Math.random())];
}

setInterval(updateAboutMeImage, 5000);
