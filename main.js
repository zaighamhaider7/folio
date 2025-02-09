// webnav animation

let webnav = gsap.timeline()
webnav.from(".webnav .logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
webnav.from(".webnav ul a", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
gsap.from(".webnav .menu", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
})
// responsive nav  animation
document.getElementById("humburger").addEventListener("click", () => {
    gsap.from(".respnav .logo", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav .cross", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
    })

    gsap.from(".respnav ul a", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
});

// hero-section animation

gsap.from(".hero-detail h2", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.2
})
gsap.from(" .hero-btn", {
    x: -1000,
    opacity: 0,
    duration: 1,
    delay: 0.8
})
gsap.from(".hero-img-div img", {
    x: 1000,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})




// arrow hide show

window.addEventListener("scroll", () => {
    let verticalScrollpx = window.scrollY || window.pageYOffset
    let arrow = document.getElementById('up')

    if (verticalScrollpx < 100) {
        arrow.style.display = "none"
    }


    if (verticalScrollpx < 1600 && verticalScrollpx > 100) {
        // if(cardprod.length <7 ){
        arrow.style.display = "flex";
    }
})

// cursor mover

let body = document.getElementById("body");
let cursor = document.getElementById("cursor");


body.addEventListener("mousemove", function (cur) {
    gsap.to(cursor, {
        x: cur.x,
        y: cur.y
    })
})





let projects = document.querySelectorAll(".griditems");

let toggleCursor = (isVisible) => {
    cursor.style.display = isVisible ? "block" : "none";
};

projects.forEach((project) => {
    project.addEventListener("mouseenter", () => toggleCursor(false)); // Hide cursor
    project.addEventListener("mouseleave", () => toggleCursor(true));  // Show cursor
});


























