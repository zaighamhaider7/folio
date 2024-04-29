let nav = gsap.timeline()
nav.from("nav h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.2,
})
nav.from("ul li",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})
let desc = gsap.timeline()
desc.from("#first",{
    x:1000,
    opacity:0,
    duration:1,
    delay:0.2,
})
desc.from("#second",{
    x:1000,
    opacity:0,
    duration:1.5,
    // delay:1,
})
desc.from("#third",{
    x:1000,
    opacity:0,
    duration:1.5,
    // delay:1.5,
})
desc.from("#icons img",{
    x:-30,
    opacity:0,
    duration:1,
    stagger:0.5
})

gsap.from(".hero-detail h1",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".hero-detail h1",
        scroller:"body",
        start:"top 150%",
        end:"top 10%",
        scrub:2
    }
})
gsap.from(".hero-img-div img",{
    x:1000,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".hero-img-div img",
        scroller:"body",
        start:"top 150%",
        end:"top 10%",
        scrub:2
    }
})


gsap.from(".about-para",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-para",
        scroller:"body",
        start:"top 150%",
        end:"top 10%",
        scrub:2
    }
})
gsap.from(".about-img img",{
    x:1000,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".about-img img",
        scroller:"body",
        start:"top 150%",
        end:"top 10%",
        scrub:2,
    }
})

gsap.to(".project-outer .projects",{
    transform:"translateX(-440%)",
    scrollTrigger:{
     trigger: "#project-sec",
     scroller:"body",
     start:"top 0%",
     end:"top -200%",
     scrub:2,
     pin:true
    }
   
})
