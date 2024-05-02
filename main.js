// webnav animation

let webnav = gsap.timeline()
webnav.from(".webnav h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.2,
})
webnav.from(".webnav ul a",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.1
})
gsap.from(".webnav .menu",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.2,
})
// responsive nav  animation
document.getElementById("humburger").addEventListener("click", function () {
    gsap.from(".respnav h2",{
        y:-30,
        opacity:0,
        duration:1,
        delay:0.2,
    })

    gsap.from(".respnav .cross",{
        y:-30,
        opacity:0,
        duration:1,
        delay:0.2,
    })

    gsap.from(".respnav ul a",{
        x:-30,
        opacity:0,
        duration:1,
        stagger:0.2
    })
});

// hero-section animation

gsap.from(".hero-detail h2",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.2
})
gsap.from(" .hero-btn",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:0.8
})
gsap.from(".hero-img-div img",{
    x:1000,
    opacity:0,
    duration:1,
    delay:0.5,
})

// icons animation


gsap.from("#icons .social",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5
})


// about section animation 

gsap.from(".about-detail",{
    // x:-1000,
    scale:0,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-detail",
        scroller:"body",
        start:"top 150%",
        end:"top 30%",
        scrub:2
    }
})
gsap.from(".about-img-div img",{
    // x:1000,
    scale:0,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-img-div img",
        scroller:"body",
        start:"top 150%",
        end:"top 30%",
        scrub:2,
    }
})


// about section animation 


// gsap.from(".about-detail",{
//     // x:-1000,
//     scale:0,
//     opacity:0,
//     duration:1,
//     delay:0.5,
//     scrollTrigger:{
//         trigger:".about-detail",
//         scroller:"body",
//         start:"top 150%",
//         end:"top 30%",
//         scrub:2
//     }
// })
gsap.from(".services-outer .row .col",{
    // x:1000,
    // y:500,
    scale:0,
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.2,
    scrollTrigger:{
        trigger:".services-outer .row .col",
        scroller:"body",
        start:"top 150%",
        end:"top 30%",
        scrub:2,
    }
})

















// cursor mover

let body = document.getElementById("body");
let cursor = document.getElementById("cursor");
let about = document.getElementById("about");
let service = document.getElementById("services");


body.addEventListener("mousemove",function(cur){
    gsap.to(cursor,{
        x:cur.x,
        y:cur.y
    })
})

// about section cursor

about.addEventListener("mousemove",function(cur){
    cursor.innerHTML="About"
    gsap.to(cursor,{
       scale:3
    })
})

about.addEventListener("mouseleave",function(cur){
    cursor.innerHTML=""
    gsap.to(cursor,{
       scale:1
    })
})

// service section cursor

service.addEventListener("mousemove",function(cur){
    cursor.innerHTML="services"
    gsap.to(cursor,{
       scale:3
    })
})

service.addEventListener("mouseleave",function(cur){
    cursor.innerHTML=""
    gsap.to(cursor,{
       scale:1
    })
})





























gsap.to(".project-outer .projects",{
    transform:"translateX(-440%)",
    scrollTrigger:{
     trigger: "#project-sec",
     scroller:"body",
     start:"top 0%",
     end:"top -300%",
     scrub:2,
     pin:true
    }
   
})
