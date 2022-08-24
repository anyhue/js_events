const title = document.querySelector("div.hello");

console.dir(title);

function whenMouseEnter() {
    title.style.color = "blue"
}

function whenMouseLeave() {
    title.style.color = "black"
}

title.addEventListener("mouseenter", whenMouseEnter);
title.addEventListener("mouseleave", whenMouseLeave);
