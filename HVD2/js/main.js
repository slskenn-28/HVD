const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

/* Moving No Button */
function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

/* Yes Button */
yesBtn.addEventListener("click", () => {
    document.getElementById("result").style.display = "block";
    music.play();
    startFalling();

    setTimeout(() => {
        document.getElementById("page2").style.display = "flex";
    }, 1500);
});

/* Page Navigation */
function goPage(num) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById("page" + num).style.display = "flex";
}

/* Falling Images */
function startFalling() {
    setInterval(() => {
        const img = document.createElement("img");
        img.src = "images/me.jpg";
        img.className = "fall-img";

        img.style.left = Math.random() * 100 + "vw";
        img.style.width = "60px";
        img.style.position = "fixed";
        img.style.top = "-80px";

        document.body.appendChild(img);

        img.animate(
            [{ transform: "translateY(0)" }, { transform: "translateY(110vh)" }],
            { duration: 5000 }
        );

        setTimeout(() => img.remove(), 5000);
    }, 300);
}
