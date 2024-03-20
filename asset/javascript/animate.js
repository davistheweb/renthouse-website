
/* 
const home = gsap.timeline()


home.from('.home-intro .home-title', {
    y:100,
    opacity:0,
    stagger:0.2
})

home.from(".home-intro .home__buttons", {
    x: -100,
    opacity:0
}) */

ScrollReveal({ 
    origin:'top',
    distance:'90px',
    duration:1800,
    delay:160,
    reset:'true',
  });

ScrollReveal().reveal('.home-intro, .left-element',
{
     origin:'left'
    });
ScrollReveal().reveal('.home-image, .right-element', 
{ 
    origin:'right'
});
ScrollReveal().reveal('.about-container, .top-element', 
{ 
    origin: 'top'
})

ScrollReveal().reveal('.services__service, .bottom-element', 
{ 
    origin: 'bottom' 
})