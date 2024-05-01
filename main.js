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
