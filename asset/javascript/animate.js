gsap.from('.header', {duration: 1, y : '-100%'})

gsap.to(
    '.home-image', {duration:2, x:20,}
)

gsap.from('.home-intro', {
    duration:2,
    ease:"bounce.out"
})